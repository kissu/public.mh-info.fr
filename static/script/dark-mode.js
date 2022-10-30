const mode = document.querySelector(".mode");
const setTheme = (theme) => (document.body.className = theme);

function darkMode() {
  mode.style.transform = "rotate(180deg)";
  setTheme("dark");
  localStorage.setItem("theme", "dark");
}

function lightMode() {
  mode.style.transform = "rotate(360deg)";
  setTheme("light");
  localStorage.setItem("theme", "light");
}

// mode.addEventListener("click", () => {
//   let modeClicks = 1;
//   let numberOfClicks = modeClicks++;

//   if (
//     window.getComputedStyle(document.body).backgroundColor ==
//     "rgb(250, 251, 252)"
//   ) {
//     numberOfClicks = modeClicks - 1;

//     if (
//       window.getComputedStyle(document.body).backgroundColor ==
//       "rgb(34, 34, 34)"
//     ) {
//       numberOfClicks = modeClicks + 1;
//     }
//   }

//   if (
//     window.getComputedStyle(document.body).backgroundColor == "rgb(34, 34, 34)"
//   ) {
//     numberOfClicks = numberOfClicks + 1;

//     if (
//       window.getComputedStyle(document.body).backgroundColor ==
//       "rgb(250, 251, 252)"
//     ) {
//       numberOfClicks = modeClicks - 1;
//     }
//   }

//   if (numberOfClicks % 2 !== 0) {
//     darkMode();
//   } else if (numberOfClicks % 2 == 0) {
//     lightMode();
//   }
// });

if (
  window.getComputedStyle(document.body).backgroundColor == "rgb(250, 251, 252)"
) {
  mode.style.transform = "rotate(360deg)";
}
if (
  window.getComputedStyle(document.body).backgroundColor == "rgb(34, 34, 34)"
) {
  mode.style.transform = "rotate(180deg)";
}

if (localStorage.getItem("theme") == "dark") {
  setTheme("dark");
} else if (localStorage.getItem("theme") == "light") {
  setTheme("light");
}

// mode.addEventListener("click", () => {
//   window.currentTheme = localStorage.getItem("theme");
// });

window.onbeforeunload = function () {
  localStorage.removeItem("theme");
};

// document.querySelector(".desktop-menu").addEventListener("click", () => {
//   window.onbeforeunload = function () {
//     localStorage.setItem("theme", currentTheme);
//   };
// });

// for (let i = 0; document.querySelector(".recent-article-feed") !== null; i++) {
//   if (document.querySelector(".recent-article-feed") !== null) {
//     document
//       .querySelector(".recent-article-feed")
//       .addEventListener("click", () => {
//         window.onbeforeunload = function () {
//           localStorage.setItem("theme", currentTheme);
//         };
//       });
//   }
// }

// for (let i = 0; document.querySelector(".article-feed") !== null; i++) {
//   if (document.querySelector(".article-feed") !== null) {
//     document.querySelector(".article-feed").addEventListener("click", () => {
//       window.onbeforeunload = function () {
//         localStorage.setItem("theme", currentTheme);
//       };
//     });
//   }
// }
