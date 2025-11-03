// ================= Sticky hero shrink + glass =================
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if(window.scrollY > 20){
    hero.classList.add("glass", "shrink");
  } else {
    hero.classList.remove("glass", "shrink");
  }
});

// ================= Scroll fluide pour navbar bubble =================
const sectionMap = {
    0: "#travaux",
    1: "#notes",
    2: "#documents",
    3: "#certifications",
    4: "#projet",
    5: "#soutenance",
    6: "#ressources"
};

document.querySelectorAll(".navbar-bubble ul li").forEach((li, index) => {
  li.addEventListener("click", () => {
    const targetSelector = sectionMap[index];
    const target = document.querySelector(targetSelector);
    if(target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ================= Effet show-on-scroll avec parallax léger =================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card').forEach(el => observer.observe(el));

// Parallax léger sur cards
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const speed = 0.05;
    const offset = window.scrollY * speed;
    card.style.transform = card.classList.contains('show')
      ? `translateY(${offset}px) scale(1)`
      : `translateY(50px) scale(0.96)`;
  });
});

// ================= Déroulement des fichiers avec agrandissement rubrique =================


const rubriques = document.querySelectorAll(".rubrique-title");

rubriques.forEach(title => {
  title.addEventListener("click", () => {
    const files = title.parentElement.querySelector(".file-list"); // cherche correctement le ul
    if(files) {
      files.classList.toggle("show");
      title.classList.toggle("active"); // agrandit la rubrique
    }
  });
});

