const nav = document.querySelector(".head_nav-li");
const element = document.querySelector(".wrapper");

element.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  conteiner.classList.toggle("conteiner-active");
  if (element.classList.contains("x")) {
    element.classList.remove("x");
  } else {
    element.classList.add("x");
  }
});
