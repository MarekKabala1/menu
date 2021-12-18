const nav = document.querySelector(".head_nav-li");
const hamburger = document.querySelector(".head_hamburger-conteiner");
const conteiner = document.querySelector(".head-conteiner");
const hamburgerLineOne = document.querySelector(".line-one ");
const hamburgerLineTwo = document.querySelector(".line-two ");
const hamburgerLineThree = document.querySelector(".line-three ");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  hamburger.classList.toggle("active");
  conteiner.classList.toggle("conteiner-active");
  hamburgerLineOne.classList.toggle("active-rotate");
  hamburgerLineTwo.classList.toggle("active-rotate");
  hamburgerLineThree.classList.toggle("active-rotate");
});
