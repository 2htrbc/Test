const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

exports.deleteExpiredAccounts = functions.pubsub.schedule("every 1 hours").onRun(async () => {
  const now = Date.now();
  const expiredUsers = await db.collection("users")
    .where("expiresAt", "<=", now)
    .get();

  const deletions = expiredUsers.docs.map(async (doc) => {
    const uid = doc.id;
    try {
      await admin.auth().deleteUser(uid);             // Delete Auth account
      await db.collection("users").doc(uid).delete(); // Delete Firestore doc
      console.log(`Deleted user: ${uid}`);
    } catch (err) {
      console.error(`Failed to delete ${uid}:`, err);
    }
  });

  await Promise.all(deletions);
  return null;
});
