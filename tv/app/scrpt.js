/* ------------------------------------------------
CHANNEL LIST
-------------------------------------------------*/
const channels = [
{
"title": "2026 NBA Draft",
"category": "Basketball",
"service": "NBA",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/NBA_logo.svg/1200px-NBA_logo.svg.png",
"page": "go:nba1",
"date": "2026-06-25",
"endDate": "2026-06-25",
"startTime": "8:00 AM",
"endTime": "1:30 PM"
},
{
"title": "Cleveland Cavaliers vs New York Knicks",
"category": "Basketball",
"service": "NBA",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/NBA_logo.svg/1200px-NBA_logo.svg.png",
"page": "go:nba1",
"date": "2026-05-26",
"endDate": "2026-05-26",
"startTime": "8:00 AM",
"endTime": "12:30 PM"
},
{
"title": "🇵🇭 PBA - San Miguel vs Terrafirma",
"category": "Basketball",
"service": "PBA",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/PBA_logo.svg/1200px-PBA_logo.svg.png",
"page": "go:pba2",
"date": "2026-05-06",
"endDate": "2026-05-06",
"startTime": "8:30 PM",
"endTime": "11:30 PM"
},
{
"title": "Xander Zayas vs. Jaron 'Boots' Ennis",
"category": "Boxing",
"service": "Boxing",
"logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1280px-UFC_Logo.svg.png",
"page": "go:boxing1",
"date": "2026-06-28",
"endDate": "2026-06-28",
"startTime": "12:00 AM",
"endTime": "3:59 AM"
},
{
"title": "UFC - PANCRASE 363",
"category": "UFC",
"service": "UFC",
"logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1280px-UFC_Logo.svg.png",
"page": "go:ufc1",
"date": "2026-06-28",
"endDate": "2026-06-28",
"startTime": "11:30 AM",
"endTime": "7:00 PM"
},
{
"title": "Croatia vs. Ghana",
"category": "FIFA World Cup",
"service": "FIFA",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/FIFA_World_Cup_2026_logo.svg/1200px-FIFA_World_Cup_2026_logo.svg.png",
"page": "go:fifa1",
"date": "2026-06-28",
"endDate": "2026-06-28",
"startTime": "5:00 AM",
"endTime": "8:00 AM"
},
{
"title": "Panama vs. England",
"category": "FIFA World Cup",
"service": "FIFA",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/FIFA_World_Cup_2026_logo.svg/1200px-FIFA_World_Cup_2026_logo.svg.png",
"page": "go:fifa1",
"date": "2026-06-28",
"endDate": "2026-06-28",
"startTime": "5:00 AM",
"endTime": "8:00 AM"
},
{
"title": "South Africa vs. Canada",
"category": "FIFA World Cup",
"service": "FIFA",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/FIFA_World_Cup_2026_logo.svg/1200px-FIFA_World_Cup_2026_logo.svg.png",
"page": "go:fifa1",
"date": "2026-06-29",
"endDate": "2026-06-29",
"startTime": "3:00 AM",
"endTime": "6:00 AM"
},
{
"title": "Congo DR vs. Uzbekistan",
"category": "FIFA World Cup",
"service": "FIFA",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/FIFA_World_Cup_2026_logo.svg/1200px-FIFA_World_Cup_2026_logo.svg.png",
"page": "go:fifa1",
"date": "2026-06-28",
"endDate": "2026-06-28",
"startTime": "7:30 AM",
"endTime": "10:00 PM"
},
{
"title": "Algeria vs. Austria",
"category": "FIFA World Cup",
"service": "FIFA",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/FIFA_World_Cup_2026_logo.svg/1200px-FIFA_World_Cup_2026_logo.svg.png",
"page": "go:fifa1",
"date": "2026-06-28",
"endDate": "2026-06-28",
"startTime": "10:00 AM",
"endTime": "2:00 PM"
},
{
"title": "Jordan vs. Argentina",
"category": "FIFA World Cup",
"service": "FIFA",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/FIFA_World_Cup_2026_logo.svg/1200px-FIFA_World_Cup_2026_logo.svg.png",
"page": "go:fifa1",
"date": "2026-06-28",
"endDate": "2026-06-28",
"startTime": "10:00 AM",
"endTime": "2:00 PM"
},
{
"title": "Miami Marlins vs Pittsburgh Pirates",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb1",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "6:40 AM",
"endTime": "10:59 AM"
},
{
"title": "Seattle Mariners vs Washington Nationals",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb2",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "6:45 AM",
"endTime": "10:59 AM"
},
{
"title": "San Diego Padres vs Baltimore Orioles",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb3",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "7:05 AM",
"endTime": "11:50 AM"
},
{
"title": "Detroit Tigers vs Cleveland Guardians",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb4",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "7:10 AM",
"endTime": "11:59 AM"
},
{
"title": "Texas Rangers vs Boston Red Sox",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb5",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "7:10 AM",
"endTime": "11:59 AM"
},
{
"title": "Arizona Diamondbacks vs Cincinnati Reds",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb6",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "7:15 AM",
"endTime": "11:59 AM"
},
{
"title": "Atlanta Braves vs New York Mets",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb7",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "7:15 AM",
"endTime": "2:30 PM"
},
{
"title": "New York Yankees vs Toronto Blue Jays",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb8",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "7:37 AM",
"endTime": "2:30 PM"
},
{
"title": "Los Angeles Dodgers vs Chicago White Sox",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb9",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "7:40 AM",
"endTime": "1:30 PM"
},
{
"title": "Philadelphia Phillies vs Milwaukee Brewers",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb10",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "7:40 AM",
"endTime": "1:30 PM"
},
{
"title": "Houston Astros vs Kansas City Royals",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb11",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "8:10 AM",
"endTime": "3:29 PM"
},
{
"title": "St. Louis Cardinals vs Minnesota Twins",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb12",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "8:10 AM",
"endTime": "3:29 PM"
},
{
"title": "Tampa Bay Rays vs Los Angeles Angels",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb13",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "9:38 AM",
"endTime": "2:30 PM"
},
{
"title": "Colorado Rockies vs Athletics",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb14",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "10:05 AM",
"endTime": "3:24 PM"
},
{
"title": "Chicago Cubs vs San Francisco Giants",
"category": "MLB",
"service": "MLB",
"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
"page": "go:mlb15",
"date": "2026-06-13",
"endDate": "2026-06-13",
"startTime": "10:15 AM",
"endTime": "3:30 PM"
},
{
"title": "Spain vs. Austria",
"category": "FIFA World Cup",
"service": "FIFA World Cup",
"logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
"page": "go:fifa1",
"date": "2026-07-3",
"endDate": "2026-07-3",
"startTime": "3:00 AM",
"endTime": "7:29 AM"
},
{
"title": "Portugal vs. Croatia",
"category": "FIFA World Cup",
"service": "FIFA World Cup",
"logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
"page": "go:fifa1",
"date": "2026-07-3",
"endDate": "2026-07-3",
"startTime": "7:00 AM",
"endTime": "11:29 AM"
},
{
"title": "Switzerland vs. Algeria",
"category": "FIFA World Cup",
"service": "FIFA World Cup",
"logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
"page": "go:fifa1",
"date": "2026-07-3",
"endDate": "2026-07-3",
"startTime": "11:00 AM",
"endTime": "2:29 PM"
},
{
"title": "United States vs. Bosnia-Herzegovina",
"category": "FIFA World Cup",
"service": "FIFA",
"logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
"page": "go:fifa1",
"date": "2026-07-02",
"endDate": "2026-07-02",
"startTime": "8:00 AM",
"endTime": "1:29 PM"
},
{
"title": "Uruguay vs. Spain",
"category": "FIFA World Cup",
"service": "FIFA",
"logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
"page": "go:fifa1",
"date": "2026-06-27",
"endDate": "2026-06-27",
"startTime": "8:00 AM",
"endTime": "11:29 AM"
},
{
"title": "Egypt vs. Iran",
"category": "FIFA World Cup",
"service": "FIFA",
"logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
"page": "go:fifa1",
"date": "2026-06-27",
"endDate": "2026-06-27",
"startTime": "11:00 AM",
"endTime": "1:29 PM"
},
{
"title": "New Zealand vs. Belgium",
"category": "FIFA World Cup",
"service": "FIFA",
"logo": "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/IMG_6227.png",
"page": "go:fifa1",
"date": "2026-06-27",
"endDate": "2026-06-27",
"startTime": "11:00 AM",
"endTime": "1:29 PM"
},
{
"title": "British Grand Prix - Practice 1",
"category": "F1",
"service": "F1",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
"page": "go:f1",
"date": "2026-07-03",
"endDate": "2026-07-03",
"startTime": "7:30 PM",
"endTime": "11:59 PM"
},
{
"title": "British Grand Prix - Sprint Qualifying",
"category": "F1",
"service": "F1",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
"page": "go:f1",
"date": "2026-07-03",
"endDate": "2026-07-04",
"startTime": "11:30 PM",
"endTime": "3:59 AM"
},
{
"title": "British Grand Prix - Sprint",
"category": "F1",
"service": "F1",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
"page": "go:f1",
"date": "2026-07-04",
"endDate": "2026-07-04",
"startTime": "7:00 PM",
"endTime": "11:59 PM"
},
{
"title": "British Grand Prix - Qualifying",
"category": "F1",
"service": "F1",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
"page": "go:f1",
"date": "2026-07-04",
"endDate": "2026-07-04",
"startTime": "10:00 PM",
"endTime": "10:59 PM"
},
{
"title": "British Grand Prix - Race",
"category": "F1",
"service": "F1",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMs-qvMbBce47vo45QG1PlOjKTgyfWeid3uQ&s",
"page": "go:f1",
"date": "2026-07-05",
"endDate": "2026-07-05",
"startTime": "9:00 PM",
"endTime": "11:59 PM"
}  
];

/* ------------------------------------------------
BASE TIMEZONE (PHILIPPINES UTC+8)
-------------------------------------------------*/
const BASE_TIMEZONE_OFFSET = 8;

// Updated to support separate endDate for multi-day events
function getEventTimestamp(dateStr, timeStr) {
  const [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":");
  hours = parseInt(hours, 10);
  minutes = parseInt(minutes, 10);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  const parts = dateStr.split("-").map(Number);
  return Date.UTC(
    parts[0],
    parts[1] - 1,
    parts[2],
    hours - BASE_TIMEZONE_OFFSET,
    minutes
  );
}

/* ------------------------------------------------
CHANNEL STATUS
-------------------------------------------------*/
function getChannelStatus(channel) {
  const now = Date.now();
  const start = getEventTimestamp(channel.date, channel.startTime);
  const end = getEventTimestamp(channel.endDate, channel.endTime);
  if (now < start) return "upcoming";
  if (now >= start && now <= end) return "live";
  return "ended";
}

/* ------------------------------------------------
CATEGORY BUTTONS
-------------------------------------------------*/
function renderCategoryButtons() {
  const categories = [...new Set(channels.map(c => c.category))].sort();
  const container = document.getElementById("categoryButtons");
  container.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.onclick = () => {
      document.querySelectorAll(".category-buttons button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`section-${cat}`)?.scrollIntoView({ behavior: "smooth" });
    };
    container.appendChild(btn);
  });
}

/* ------------------------------------------------
RENDER CHANNELS
-------------------------------------------------*/
function renderChannels() {
  const container = document.getElementById("channels-container");
  container.innerHTML = "";
  const grouped = {};

  channels.forEach(c => {
    if (getChannelStatus(c) === "ended") return;
    grouped[c.category] ??= [];
    grouped[c.category].push(c);
  });

  for (const category in grouped) {
    grouped[category].sort((a, b) =>
      ({ live: 0, upcoming: 1 }[getChannelStatus(a)]) -
      ({ live: 0, upcoming: 1 }[getChannelStatus(b)])
    );
    const section = document.createElement("div");
    section.id = `section-${category}`;
    section.innerHTML = `<h2>${category}</h2>`;
    grouped[category].forEach(c => {
      const card = document.createElement("div");
      card.className = "channel-card";
      card.innerHTML = `
        <div class="channel-left">
          <img src="${c.logo}" class="channel-logo" alt="${c.service}">
          <div>
            <div class="channel-title">${c.title}</div>
            <small>${c.service} • ${c.date} ${c.startTime} – ${c.endDate !== c.date ? c.endDate + " " : ""}${c.endTime}</small>
          </div>
        </div>
        <div class="countdown" 
          data-date="${c.date}" 
          data-end-date="${c.endDate}"
          data-start="${c.startTime}" 
          data-end="${c.endTime}">
          Loading...
        </div>
      `;
      card.onclick = () => window.location.href = c.page;
      section.appendChild(card);
    });
    container.appendChild(section);
  }
}

/* ------------------------------------------------
COUNTDOWN TIMER
-------------------------------------------------*/
function updateCountdown() {
  const now = Date.now();
  let changed = false;

  document.querySelectorAll(".countdown").forEach(el => {
    const start = getEventTimestamp(el.dataset.date, el.dataset.start);
    const end = getEventTimestamp(el.dataset.endDate || el.dataset.date, el.dataset.end);

    if (now < start) {
      let diff = start - now;
      const d = Math.floor(diff / 86400000);
      diff %= 86400000;
      const h = Math.floor(diff / 3600000);
      diff %= 3600000;
      const m = Math.floor(diff / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      el.textContent = `Starts in ${d}d ${h}h ${m}m ${s}s`;
      el.style.color = "#8fd3fe";
    } else if (now <= end) {
      let diff = end - now;
      const h = Math.floor(diff / 3600000);
      diff %= 3600000;
      const m = Math.floor(diff / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      el.textContent = `LIVE • Ends in ${h}h ${m}m ${s}s`;
      el.style.color = "#00ff6a";
    } else {
      changed = true;
    }
  });

  if (changed) renderChannels();
}

/* ------------------------------------------------
INIT
-------------------------------------------------*/
renderCategoryButtons();
renderChannels();
updateCountdown();
setInterval(updateCountdown, 1000);

/* ------------------------------------------------
DEBUG TIMEZONE
-------------------------------------------------*/
console.log("User Timezone:", Intl.DateTimeFormat().resolvedOptions().timeZone);
