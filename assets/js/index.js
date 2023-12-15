const btnMenuMobile = document.querySelector(".header__menu--mobie");
const MenuMobile = document.querySelector(".header__menu--mobie ul");

btnMenuMobile.onclick = () => {
  if (MenuMobile.style.display === "none" || MenuMobile.style.display === "") {
    MenuMobile.style.display = "block";
  } else {
    MenuMobile.style.display = "none";
  }
};

document.addEventListener("click", function (event) {
  if (
    !btnMenuMobile.contains(event.target) &&
    !MenuMobile.contains(event.target)
  ) {
    MenuMobile.style.display = "none";
  }
});

const btnTranslate = document.querySelector(".button__translate");
const subButton = document.querySelector(".button__translate--sub");
btnTranslate.addEventListener("mouseenter", () => {
  subButton.style.display = "block";
});

// Ẩn khi rời khỏi
btnTranslate.addEventListener("mouseleave", () => {
  subButton.style.display = "none";
});
