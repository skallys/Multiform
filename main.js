import "./styles/homepage.css";
import "./styles/common.css";
import "./accroches";

const sameBut = document.querySelector(".samebutd");
const diff = document.querySelector(".sbdifferent");
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const val = scrolled * 0.5 + 68.85;
  const alv = scrolled * 0.5;
  diff.style.transform =
    "scale(" + 1.45 * val + "%) translateY(-" + 0.1 * alv + "%)";
  // animation du same but different
  const lav = scrolled * 0.01 + 1;
  sameBut.style.transform = "scale(" + 99.85 / lav + "%)";
  if (lav > 3.6) {
    sameBut.classList.add("activate");
  } else {
    sameBut.classList.remove("activate");
  }
  // changement de couleur de la nav
  if (val > 1060 && val < 1511) {
    nav.style.color = "var(--white)";
  } else if (val > 1811 && val < 2256) {
    nav.style.color = "var(--white)";
  } else if (val > 2524 && val < 2744) {
    nav.style.color = "var(--white)";
  } else {
    nav.style.color = "var(--black)";
  }
  console.log(val);
});
