const leftContentOpen = document.getElementById("bs-leftContentOpen");
const leftContentClose = document.getElementById("bs-leftContentClose");
const leftContent = document.getElementById("bs-leftContent");

leftContentOpen.addEventListener("click", () => {
  leftContent.classList.add("bs-active");
});

leftContentClose.addEventListener("click", () => {
  leftContent.classList.remove("bs-active");
});

const rightContentOpen = document.getElementById("bs-rightContentOpen");
const rightContentClose = document.getElementById("bs-rightContentClose");
const rightContent = document.getElementById("bs-rightContent");

rightContentOpen.addEventListener("click", () => {
  rightContent.classList.add("bs-active");
});

rightContentClose.addEventListener("click", () => {
  rightContent.classList.remove("bs-active");
});

const filterHeaderToggle = document.getElementById("bs-filterHeaderToggle");
const filterHeader = document.getElementById("bs-filterHeader");
