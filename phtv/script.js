document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("videoPlayer");
  const channelList = document.getElementById("channelList");
  const refreshBtn = document.getElementById("refreshBtn");

  refreshBtn.addEventListener("click", () => {
    channelList.innerHTML = "";
    loadChannels();
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

  // ▶️ Universal Player (HLS or DASH)
  function playChannel(ch) {
    const src = ch.url || ch.manifestUri;
    if (!src) return alert("⚠️ Invalid stream URL for " + ch.name);

    // Stop current playback
    video.pause();
    video.removeAttribute("src");
    video.load();

    // MPEG-DASH (.mpd) + ClearKey DRM
    if (ch.type === "mpegdash") {
      loadDash(ch);
    }
    // HLS (.m3u8)
    else {
      loadHls(src);
    }
  }

  // 🧩 HLS Loader
  function loadHls(src) {
    if (Hls.isSupported()) {
      const hls = new Hls({
        maxBufferLength: 10,
        liveSyncDuration: 5
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.play();
    }
  }

  // 🎬 DASH Loader (ClearKey Supported)
  function loadDash(ch) {
    if (typeof shaka === "undefined") {
      // Dynamically load Shaka Player only when needed
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/shaka-player/4.3.5/shaka-player.compiled.js";
      script.onload = () => initShaka(ch);
      document.head.appendChild(script);
    } else {
      initShaka(ch);
    }
  }

  async function initShaka(ch) {
    try {
      const player = new shaka.Player(video);
      window.player = player; // Debugging access
      if (ch.clearKey) {
        player.configure({
          drm: {
            clearKeys: ch.clearKey
          }
        });
      }
      await player.load(ch.manifestUri);
      video.play();
    } catch (err) {
      console.error("❌ DASH load error:", err);
      alert("Failed to play " + ch.name);
    }
  }

  // 💾 Service Worker registration
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => console.log("✅ Service Worker Registered"))
      .catch(err => console.warn("SW registration failed:", err));
  }

  // ⏳ Delay for faster first paint
  setTimeout(loadChannels, 150);
});
