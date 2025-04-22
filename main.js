const burger = document.getElementById("hamburger");
const list = document.getElementById("navlist");

burger.addEventListener("click", () => {
  list.classList.toggle("navlist-active");
});

const images = [
  "images/topNeon.png",
  "images/aaaB.png",
  "images/oceara.png",
  "images/satisasasfya.png",
];

let index = 0;
const heroImage = document.getElementById("hero-image");

setInterval(() => {
  index = (index + 1) % images.length;
  heroImage.classList.add("fade-out");
  setTimeout(() => {
    heroImage.src = images[index];
    heroImage.classList.remove("fade-out");
    heroImage.classList.add("fade-in");
  }, 400);
  setTimeout(() => {
    heroImage.classList.remove("fade-in");
  }, 800);
}, 3000); // Change every 3 seconds
