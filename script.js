const screens = [...document.querySelectorAll(".screen")];
const hint = document.getElementById("hint");

function show(id) {
  screens.forEach(s => s.classList.toggle("active", s.id === id));
  hint.classList.toggle("hide", id !== "home");
}

document.querySelector(".envelope-hotspot").addEventListener("click", () => show("gifts"));
document.querySelector(".gift-letter").addEventListener("click", () => show("letter"));
document.querySelector(".gift-flower").addEventListener("click", () => show("flower"));
document.querySelector(".gift-song").addEventListener("click", () => show("song"));
document.querySelector(".back-2").addEventListener("click", () => show("gifts"));
document.querySelector(".back-3").addEventListener("click", () => show("gifts"));
document.querySelector(".back-4").addEventListener("click", () => show("gifts"));

document.addEventListener("keydown", e => {
  if (e.key === "Escape") show("gifts");
  if (e.key === "1") show("home");
  if (e.key === "2") show("gifts");
  if (e.key === "3") show("letter");
  if (e.key === "4") show("flower");
  if (e.key === "5") show("song");
});
