const nav = document.querySelector(".head_nav-li");
const hamburger = document.querySelector(".head_hamburger-conteiner");
const conteiner = document.querySelector(".head-conteiner");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  conteiner.classList.toggle("conteiner-active");
});
