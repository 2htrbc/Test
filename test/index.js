const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.deleteExpiredUsers = functions.pubsub.schedule('every 24 hours').onRun(async () => {
  const db = admin.firestore();
  const now = Date.now();
  const snapshot = await db.collection('users').where('expiry', '<=', now).get();

  for (const doc of snapshot.docs) {
    const uid = doc.id;
    try {
      await admin.auth().deleteUser(uid);
      await doc.ref.delete();
      console.log(`Deleted expired user: ${uid}`);
    } catch (err) {
      console.error(`Failed to delete user ${uid}:`, err.message);
    }
  }
  return null;
});
