document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("videoPlayer");
  const channelList = document.getElementById("channelList");
  const refreshBtn = document.getElementById("refreshBtn");

  refreshBtn.addEventListener("click", () => location.reload());

  // Load channels from JSON
  fetch("channels.json")
    .then(res => res.json())
    .then(channels => loadChannels(channels))
    .catch(err => console.error("Failed to load channels:", err));

  function loadChannels(channels) {
    channels.forEach((ch, index) => {
      const div = document.createElement("div");
      div.className = "channel";
      div.innerHTML = `
        <img src="${ch.logo}" alt="${ch.name}" loading="lazy">
        <span>${ch.name}</span>
      `;
      div.onclick = () => playChannel(ch);
      channelList.appendChild(div);
    });
  }

  function playChannel(ch) {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(ch.url);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = ch.url;
    }
    video.play();
  }
});
