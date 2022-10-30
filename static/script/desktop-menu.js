// Reducing the desktop menu after scroll
window.onscroll = function () {
  if (window.location.href.includes("fr")) {
    reduceMenuAfterScrollFR();
  } else if (window.location.href.includes("en")) {
    reduceMenuAfterScrollEN();
  }
};

const desktopMenu = document.querySelector(".desktop-menu");
const linksOfDesktopMenuFR = document.querySelectorAll(
  ".root-container-menuFR .desktop-menu nav a"
);
const linksOfDesktopMenuEN = document.querySelectorAll(
  ".root-container-menuEN .desktop-menu nav a"
);

const modeIcon = document.querySelector(
  ".root-container-menuFR .desktop-menu nav > i, .root-container-menuEN .desktop-menu nav > i"
);

function reduceMenuAfterScrollFR() {
  for (let i = 0; i < linksOfDesktopMenuFR.length; i++) {
    if (document.documentElement.scrollTop > 71) {
      desktopMenu.style.height = "40px";
      linksOfDesktopMenuFR[i].style.padding = "12px 12px";
      modeIcon.style.padding = "10px 12px";
    } else {
      desktopMenu.style.height = "118px";
      linksOfDesktopMenuFR[i].style.padding = "51px 12px";
      modeIcon.style.padding = "49px 12px";
    }
  }
}

function reduceMenuAfterScrollEN() {
  for (let i = 0; i < linksOfDesktopMenuEN.length; i++) {
    if (document.documentElement.scrollTop > 71) {
      desktopMenu.style.height = "40px";
      linksOfDesktopMenuEN[i].style.padding = "12px 12px";
      modeIcon.style.padding = "10px 12px";
    } else {
      desktopMenu.style.height = "118px";
      linksOfDesktopMenuEN[i].style.padding = "51px 12px";
      modeIcon.style.padding = "49px 12px";
    }
  }
}
