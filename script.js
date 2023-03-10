const menuBtn = document.querySelector(".header__burger");
const menuBurger = document.querySelector(".burger");
const closeBtn = document.querySelector(".burger__close");

menuBtn.addEventListener("click", () => {
  menuBurger.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  menuBurger.classList.add("hidden");
});
