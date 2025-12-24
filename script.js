
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


const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;
    if (top < trigger) section.classList.add("active");
  });
});


const videos = [
  "https://igjtvefiqhxqaqwoacxm.supabase.co/storage/v1/object/public/bibah/WhatsApp%20Video%202025-12-20%20at%2011.52.03%20AM.mp4",
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
    
    heroVideo.addEventListener("canplay", () => heroVideo.play(), { once: true });
  });

  heroVideo.addEventListener("ended", () => {
    currentVideo = (currentVideo + 1) % videos.length;
    heroVideo.src = videos[currentVideo];
    heroVideo.play();
  });
}


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

const viewMoreBtn = document.getElementById("viewMoreBtn");
const moreImages = document.querySelectorAll(".more-img");

if (viewMoreBtn && moreImages.length > 0) {
  let expanded = false;

  viewMoreBtn.addEventListener("click", () => {
    expanded = !expanded;

    moreImages.forEach(img => {
      img.style.display = expanded ? "block" : "none";
    });

    viewMoreBtn.textContent = expanded ? "View Less" : "View More";
  });
}



document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleLang");
  const aboutEn = document.getElementById("about-en");
  const aboutAs = document.getElementById("about-as");

  if (!toggleBtn || !aboutEn || !aboutAs) return;

  let isAssamese = false;

  toggleBtn.addEventListener("click", () => {
    isAssamese = !isAssamese;

    aboutEn.style.display = isAssamese ? "none" : "grid";
    aboutAs.style.display = isAssamese ? "grid" : "none";

    toggleBtn.textContent = isAssamese
      ? "View in English"
      : "View in Assamese";
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !date) {
      alert("Please fill all required fields.");
      return;
    }

    
    const whatsappText =
      `Hello, I would like to book Ashrayaa Prakreeti.%0A%0A` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Event Date: ${date}%0A` +
      `Message: ${message || "N/A"}`;

    const whatsappNumber = "919435525413";

    
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappText}`,
      "_blank"
    );

    
    window.location.href =
      `mailto:anupamdutta2008@gmail.com?subject=Venue Booking Inquiry&body=` +
      `Name: ${name}%0AEmail: ${email}%0ADate: ${date}%0AMessage: ${message}`;

 
    form.reset();
  });
});

const heroSlides = document.querySelectorAll(".hero-slide");
let heroIndex = 0;

setInterval(() => {
  heroSlides[heroIndex].classList.remove("active");
  heroIndex = (heroIndex + 1) % heroSlides.length;
  heroSlides[heroIndex].classList.add("active");
}, 4000); // 4 seconds

