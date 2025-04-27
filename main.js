const burger = document.getElementById("hamburger");
const list = document.getElementById("navlist");

const images = [
  "images/topNeon.png",
  "images/aaaB.png",
  "images/oceara.png",
  "images/satisasasfya.png",
];

let index = 0;
const heroImage = document.getElementById("hero-image");

burger.addEventListener("click", () => {
  list.classList.toggle("navlist-active");
  if (list.classList.contains("navlist-active")) {
    // Menu OPEN hai -> Image aur animation hata do
    clearInterval(intervalId); // Stop changing images
    heroImage.style.display = "none"; // Image ko gayab kar do
  } else {
    // Menu CLOSE hai -> Image aur animation wapas lao
    heroImage.style.display = "inline-block"; // Wapas dikhado
    startImageAnimation(); // Animation wapas start karo
  }
});

function startImageAnimation() {
  intervalId = setInterval(() => {
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
  }, 3000);
}

// Jab page load ho tab animation start karwa do
startImageAnimation();

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
