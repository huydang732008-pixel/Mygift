const screens = [...document.querySelectorAll(".screen")];
const hint = document.getElementById("hint");

function show(id) {
  screens.forEach(screen => {
    screen.classList.toggle("active", screen.id === id);
  });

  if (hint) {
    hint.classList.toggle("hide", id !== "home");
  }
}

// Chuyển trang bằng cả click và touch
function addTap(selector, target) {
  const button = document.querySelector(selector);

  if (!button) return;

  let touched = false;

  button.addEventListener("touchend", function (e) {
    e.preventDefault();
    touched = true;
    show(target);
  }, { passive: false });

  button.addEventListener("click", function (e) {
    if (touched) {
      touched = false;
      return;
    }

    show(target);
  });
}

// Trang chủ → Gifts
addTap(".envelope-hotspot", "gifts");

// Gifts → Letter
addTap(".gift-letter", "letter");

// Gifts → Flower
addTap(".gift-flower", "flower");

// Gifts → Song
addTap(".gift-song", "song");

// Letter → Gifts
addTap(".back-2", "gifts");

// Flower → Gifts
addTap(".back-3", "gifts");

// Song → Gifts
addTap(".back-4", "gifts");

// Bàn phím máy tính
document.addEventListener("keydown", e => {
  if (e.key === "Escape") show("gifts");
  if (e.key === "1") show("home");
  if (e.key === "2") show("gifts");
  if (e.key === "3") show("letter");
  if (e.key === "4") show("flower");
  if (e.key === "5") show("song");
});
