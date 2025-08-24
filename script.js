        // WHyyy here bud... Whyyyy ? 🙄
        
        // Sections data
const sections = [
  { 
    title: "My Works", 
    type: "square", 
    items: [
      { 
        name: "None yet", 
        subtitle: "There's nothing in here !!", 
        url: "https://gifdb.com/images/high/really-why-reaction-h74fcycshvsgoedk.gif",
        image: "https://cdn.pfps.gg/pfps/7153-spongebob-bored-face.png"
      }
    ]
  },
  {
    title: "About Me", 
    type: "square", 
    items: [
      { 
        name: "Introduction", 
        subtitle: "Let me Introduce...", 
        content: "With over 15 years of experience in living, I specialise in not giving a f▒▒ about what others think while also considering useful opinions.<br><br>I blend aesthetic sensitivity with rigorous logic. I grew up moving from a quiet village to a busy town. Now I live surrounded by traffic and noise, but still notice the trees, the sunlight, the air, the birds, etc... <br><br>I spend most days with my family, doing a little bit of everything—chess, design, coding, cubes. Most of the time, I do nothing.", 
        image: "https://yt3.googleusercontent.com/JDPwhh73GWjQDySQyOGgbF6xof2nf_5zJ3_djjI-kqcuqUiznHCElC5uB5l8xzvJg_u_QIWi=s900-c-k-c0x00ffffff-no-rj" 
      },
      { 
        name: "Hobbies", 
        subtitle: "What I do...", 
        content: "Look back at the beginning of this website ⇀⁠‸⁠↼⁠", 
        image: "https://static.vecteezy.com/system/resources/previews/019/514/242/non_2x/confused-tom-cartoon-expression-free-vector.jpg" 
      },
      { 
        name: "Location", 
        subtitle: "Where I live...", 
        content: "Creep 😳", 
        image: "https://s2.dmcdn.net/u/5gEFn1PRT9GVzoOoJ/240x240",
        overlayImage : "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FwNKZnOdxY8bmTU4Asp2AhLyYjsv.jpg"
      }
    ]
  }
];

function seedImg(seed, ratio) {
  const base = `https://picsum.photos/seed/${seed}/`;
  return ratio === "tall" ? base + "240/360" : base + "300/300";
}

const overlay = document.createElement("div");
overlay.className = "overlay";
overlay.innerHTML = `
  <button class="overlay-close">&times;</button>
  <div class="overlay-thumb"></div>
  <div class="overlay-title"></div>
  <div class="overlay-subtitle"></div>
  <div class="overlay-content"></div>
`;
document.body.appendChild(overlay);

const overlayCloseBtn = overlay.querySelector(".overlay-close");
const overlayThumb = overlay.querySelector(".overlay-thumb");
const overlayTitle = overlay.querySelector(".overlay-title");
const overlaySubtitle = overlay.querySelector(".overlay-subtitle");
const overlayContent = overlay.querySelector(".overlay-content");

overlayCloseBtn.addEventListener("click", () => {
  overlay.classList.remove("open");
});

function makeSection({ title: label, type, items }) {
  const section = document.createElement("section");
  section.className = "section";
  section.innerHTML = `<h3>${label}</h3><div class="row"></div>`;
  const row = section.querySelector(".row");

  items.forEach((item) => {
    const isTall = type === "tall";
    const isAbout = label === "About Me";

    const card = document.createElement(isAbout ? "div" : "a");
    if (!isAbout) {
      card.href = item.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }
    card.className = `card ${isTall ? "tall" : ""} relative`;

    const pic = item.image || seedImg(item.seed, isTall ? "tall" : "square");

    card.innerHTML = `
      <div class="thumb ${isTall ? "tall" : ""}" style="background-image:url('${pic}')"></div>
      <div class="meta">
        <p class="title">${item.name}</p>
        <p class="subtitle">${item.subtitle}</p>
      </div>
    `;

    if (isAbout) {
      card.addEventListener("click", () => {
        const overlayPic = item.overlayImage || pic;
        overlayThumb.style.backgroundImage = `url('${overlayPic}')`;
        overlayTitle.textContent = item.name;
        overlaySubtitle.textContent = item.subtitle;
        overlayContent.innerHTML = item.content || "No description available.";
        overlay.classList.add("open");
      });
    }

    row.appendChild(card);
  });

  return section;
}

const container = document.getElementById("content");
sections.forEach((s) => container.appendChild(makeSection(s)));

document.querySelectorAll(".chip").forEach((ch) => {
  ch.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
    ch.classList.add("is-active");
  });
});

        //Got anything huh !? 🧐


        
