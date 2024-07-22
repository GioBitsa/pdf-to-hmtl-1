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

function toggleDropdown(contentId) {
  const dropdownContent = document.getElementById(contentId);
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (
    !event.target.matches(".bs-mainDropdown") &&
    !event.target.closest(".bs-mainDropdown")
  ) {
    const dropdowns = document.getElementsByClassName(
      "bs-mainDropdown-content"
    );
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};

function toggleEditors(id) {
  const current = document.getElementById(id);
  const allEditors = document.querySelectorAll(".bs-academicEditors");

  allEditors.forEach((editor) => {
    if (editor === current) {
      editor.classList.toggle("open");
    } else {
      editor.classList.remove("open");
    }
  });
}

// Close all editors if the user clicks outside of them
window.onclick = function (event) {
  const allEditors = document.querySelectorAll(".bs-academicEditors");
  if (!event.target.closest(".bs-academicEditors")) {
    allEditors.forEach((editor) => {
      editor.classList.remove("open");
    });
  }
};
