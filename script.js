/* ================= SPLASH + PETALS ================= */
window.addEventListener("load", () => {
  // Splash
  const splash = document.getElementById("splash");
  if (splash) {
    setTimeout(() => {
      splash.classList.add("hide");
      setTimeout(() => {
        splash.style.display = "none";
      }, 1200);
    }, 400);
  }

  // Falling petals (once)
  for (let i = 0; i < 18; i++) {
    const petal = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    petal.setAttribute("viewBox", "0 0 24 24");
    petal.classList.add("falling-petal");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M12 2 C9 6,5 9,6 13 C7 17,12 22,12 22 C12 22,17 17,18 13 C19 9,15 6,12 2Z"
    );

    petal.appendChild(path);
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 3 + Math.random() * 3 + "s";

    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 6000);
  }
});

/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;
    if (top < trigger) section.classList.add("active");
  });
});

/* ================= HERO MULTI-VIDEO ================= */
const videos = [
  "https://igjtvefiqhxqaqwoacxm.supabase.co/storage/v1/object/public/bibah/hall.mp4",
  "https://igjtvefiqhxqaqwoacxm.supabase.co/storage/v1/object/public/bibah/venue.mp4"
];

const heroVideo = document.getElementById("heroVideo");
let currentVideo = 0;

if (heroVideo) {
  heroVideo.src = videos[currentVideo];
  heroVideo.muted = true;
  heroVideo.playsInline = true;

  heroVideo.play().catch(() => {
    // autoplay fallback for mobile
    heroVideo.addEventListener("canplay", () => heroVideo.play(), { once: true });
  });

  heroVideo.addEventListener("ended", () => {
    currentVideo = (currentVideo + 1) % videos.length;
    heroVideo.src = videos[currentVideo];
    heroVideo.play();
  });
}

/* ================= LOGO LETTER ANIMATION ================= */
const logoText = document.getElementById("logoText");

if (logoText) {
  const text = logoText.innerText;
  logoText.innerHTML = "";

  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${i * 0.08}s`;
    logoText.appendChild(span);
  });
}

/* ================= OPTIONAL MOBILE MENU (SAFE) ================= */
// This WILL NOT break if hamburger/menu do not exist
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  mobileMenu.addEventListener("click", e => {
    if (e.target.tagName === "A") {
      mobileMenu.classList.remove("active");
    }
  });
}
// GALLERY VIEW MORE
const viewMoreBtn = document.getElementById("viewMoreBtn");
const moreImages = document.querySelectorAll(".more-img");

let expanded = false;

viewMoreBtn.addEventListener("click", () => {
  expanded = !expanded;

  moreImages.forEach(img => {
    img.style.display = expanded ? "block" : "none";
  });

  viewMoreBtn.textContent = expanded ? "View Less" : "View More";
});
