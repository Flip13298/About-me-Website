const demons = [
  {
    rank: 1,
    name: "GONER",
    creator: "Nighting",
    levelId: "77310650",
    videoUrl: "https://www.youtube.com/watch?v=1KHkcdxXZFg",
    image: "media/GONER-icon.png"
  },
  {
    rank: 2,
    name: "Diamond Disco",
    creator: "Zeronium",
    levelId: "117862884",
    videoUrl: "https://www.youtube.com/watch?v=ydLySiVTNDw&t=118",
    image: "media/diamond-disco.png"
  },
  {
    rank: 3,
    name: "Auditory Breaker",
    creator: "LazerBlitz",
    levelId: "51791710",
    videoUrl: "https://middletonschoolnz-my.sharepoint.com/:v:/r/personal/rodgerw_middleton_school_nz/Documents/auditory-breaker-video.mp4?d=w6382d7cb81454736a28bccd96d5049bf&csf=1&web=1&e=KQC3tJ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D", // Youtube video TBA
    image: "media/auditory-breaker.png"
  },
  {
    rank: 4,
    name: "Hot Rod",
    creator: "stcubing",
    levelId: "95355264",
    videoUrl: "https://www.youtube.com/watch?v=5_ZybgkU-kc",
    image: "media/hot-rod.png"
  },
  {
    rank: 5,
    name: "Blade of Justice",
    creator: "Manix648",
    levelId: "35448603",
    videoUrl: "https://www.youtube.com/watch?v=Ib_Hb_BP7yY",
    image: "media/blade-of-justice.png"
  },
  {
    rank: 6,
    name: "Ruler of Everything",
    creator: "ASBCHazel",
    levelId: "83204544",
    videoUrl: "https://www.youtube.com/watch?v=ZSlLC7G2fgU",
    image: "media/ruler-of-everything.png"
  },
  {
    rank: 7,
    name: "Doppler (2P)",
    creator: "At424",
    levelId: "133489881",
    videoUrl: "https://www.youtube.com/watch?v=yiwBejWCK8k",
    image: "media/doppler.png",
  },
  {
    rank: 8,
    name: "Stressed Out",
    creator: "meph",
    levelId: "118078448",
    videoUrl: "https://www.youtube.com/watch?v=qp5xhM43aH8",
    image: "media/stressed-out.png"
  },
  {
    rank: 9,
    name: "Maybe Possibly Thing",
    creator: "iNubble",
    levelId: "602840098",
    videoUrl: "https://www.youtube.com/watch?v=ZAWRfy5jXFQ",
    image: "media/maybe-possibly-thing.png"
  },
  {
    rank: 10,
    name: "Shukufuku",
    creator: "Joker179114",
    levelId: "93916671",
    videoUrl: "https://www.youtube.com/watch?v=MBzh4PhKncU",
    image: "media/shukufuku.png"
  }
];

const listEl = document.getElementById("demon-list");

demons
  .sort((a, b) => a.rank - b.rank)
  .forEach((demon) => {
    const item = document.createElement("li");
    item.className = "demon-card";

    // Layer a dark gradient over the image so white text is easy to read
    item.style.backgroundImage = `
      linear-gradient(to right, rgba(20, 23, 31, 0.45), rgba(20, 23, 31, 0.15)),
      url('${demon.image}')
    `;
// Display the full, bright image without a dark gradient over the whole card
    if (demon.image) {
      item.style.backgroundImage = `url('${demon.image}')`;
    }

    item.innerHTML = `
      <div class="level-label">
        <span class="rank">#${demon.rank}</span>
        <strong>${demon.name}</strong> by ${demon.creator}
        <small>(ID: ${demon.levelId})</small>
      </div>
      <a class="verify-btn" href="${demon.videoUrl}" target="_blank" rel="noopener">Completion</a>
    `;

    listEl.appendChild(item);
  });