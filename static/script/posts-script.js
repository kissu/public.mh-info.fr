const dateNumbers = document.querySelectorAll(".date-numbers");

if (document.querySelector(".root-container-menuFR") !== null) {
  for (let i = 0; i < dateNumbers.length; i++) {
    const newDates = dateNumbers[i].textContent
      .slice(0, 10)
      .replaceAll("-", " ")
      .split(" ")
      .reverse()
      .join()
      .replaceAll(",", "/");

    dateNumbers[i].textContent = "";
    dateNumbers[i].textContent = newDates;
  }
} else if (document.querySelector(".root-container-menuEN") !== null) {
  for (let i = 0; i < dateNumbers.length; i++) {
    const newDates = dateNumbers[i].textContent
      .slice(0, 10)
      .replaceAll("-", " ")
      .split(" ");

    newDates.splice(3, 1, "2021");
    newDates.splice(0, 1);

    dateNumbers[i].textContent = "";
    dateNumbers[i].textContent = newDates.join().replaceAll(",", "/");
  }
}

const articleBoxes = document.querySelectorAll(
  ".article, .img, .article-image"
);

for (let i = 0; i < articleBoxes.length; i++) {
  const articleBackgroundImage = articleBoxes[i].getAttribute("src");

  articleBoxes[i].style.backgroundImage = "url(" + articleBackgroundImage + ")";
}

if (window.location.href.includes("articles")) {
  document.head.querySelector("title").textContent =
    document.querySelector("h1").textContent + " | MH info";

  const figure = document.querySelectorAll("figure");

  for (let i = 0; i < figure.length; i++) {
    const createHr = document.createElement("hr");
    const figcaption = document.querySelectorAll("figcaption");
    figure[i].insertBefore(createHr, figcaption[i]);
  }
}

if (document.querySelector(".article-body h2") !== null) {
  if (
    document
      .querySelector(".article-body h2")
      .textContent.includes("Le saviez-vous")
  ) {
    document.querySelector(
      ".article-image .article-description"
    ).style.display = "none";
  }
}

const imgBox = document.querySelectorAll("figure.image");
const img = document.querySelectorAll("figure.image img");
const articleParagraphe = document.querySelectorAll(
  ".article-body > p:not(.article-intro)"
);

for (let i = 0; i < img.length; i++) {
  if (imgBox[i].offsetWidth > img[i].offsetWidth) {
    img[i].style.margin = "0 calc((100% - " + img[i].offsetWidth + "px)/2)";
  }

  if (articleParagraphe[i].offsetWidth < img[i].offsetWidth) {
    img[i].style.width = "100%";
    img[i].style.height = "auto";
  }
}

const iframe = document.querySelectorAll("p iframe");

for (let i = 0; i < iframe.length; i++) {
  const iframeBox = document.querySelectorAll("p iframe")[i].parentNode;

  if (iframeBox.offsetWidth > iframe[i].offsetWidth) {
    iframe[i].style.margin =
      "0 calc((100% - " + iframe[i].offsetWidth + "px)/2)";
  }

  if (articleParagraphe[i].offsetWidth < iframe[i].offsetWidth) {
    iframe[i].style.width = "100%";
    iframe[i].style.height = "auto";
  }
}

const mjxExpression = document.querySelectorAll("mjx-container svg");

for (
  let i = 0;
  i < document.querySelectorAll("mjx-container svg").length;
  i++
) {
  if (
    Number(
      window
        .getComputedStyle(document.querySelectorAll("mjx-container svg")[i])
        .width.replace("px", "")
    ) > articleParagraphe[i].offsetWidth
  ) {
    document.querySelectorAll("mjx-container svg")[i].style.width =
      "fit-content";
  }
}
