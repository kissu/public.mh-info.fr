// Open mobile menu
function liensDisplayFlex() {
  const liens = document.querySelector(".liens");
  const menuIcon = document.querySelector(".menu-icon");
  liens.style.display = "flex";
  menuIcon.style.color = "#fafbfc";

  const body = document.querySelector("body");
  body.setAttribute("class", "disable-scroll");
}

// Close mobile menu
function closeMenu() {
  const liens = document.querySelector(".liens");
  const menuIcon = document.querySelector(".menu-icon");
  liens.style.display = "none";
  menuIcon.style.color = "#3a4f66";

  const body = document.querySelector("body");
  body.removeAttribute("class");
}