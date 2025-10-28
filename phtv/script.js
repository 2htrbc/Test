document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("videoPlayer");
  const channelList = document.getElementById("channelList");
  const refreshBtn = document.getElementById("refreshBtn");

  // 🔁 Refresh Button (Soft Reload)
  refreshBtn.addEventListener("click", () => {
    channelList.innerHTML = "";
    loadChannels(); // re-fetch instead of full reload
  });

  // 🚀 Lazy Fetch + Render Channels
  async function loadChannels() {
    try {
      const response = await fetch("channels.json", { cache: "force-cache" });
      const channels = await response.json();
      renderChannels(channels);
    } catch (err) {
      console.error("❌ Failed to load channels:", err);
      channelList.innerHTML = `<p style="color:red;text-align:center;">Failed to load channels.</p>`;
    }
  }

  function renderChannels(channels) {
    const fragment = document.createDocumentFragment();
    channels.forEach((ch) => {
      const div = document.createElement("div");
      div.className = "channel";
      div.innerHTML = `
        <img src="${ch.logo}" alt="${ch.name}" loading="lazy" decoding="async">
        <span>${ch.name}</span>
      `;
      div.addEventListener("click", () => playChannel(ch));
      fragment.appendChild(div);
    });
    channelList.appendChild(fragment);
  }

  // ▶️ Play Channel
  function playChannel(ch) {
    if (Hls.isSupported()) {
      const hls = new Hls({
        maxBufferLength: 10, // keeps memory small
        liveSyncDuration: 5
      });
      hls.loadSource(ch.url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = ch.url;
      video.play();
    }
  }

  // 💾 Register Service Worker for caching
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => console.log("✅ Service Worker Registered"))
      .catch(err => console.warn("SW registration failed:", err));
  }

  // ⏳ Load Channels after small delay for faster first paint
  setTimeout(loadChannels, 150);
});
