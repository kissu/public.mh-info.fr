function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

if (window.location.pathname == "/fr/" || window.location.pathname == "/en/") {
  waitForElm(".recent-article-feed h2").then((elm) => {
    const createScript = document.createElement("script");
    createScript.src = "../../script/posts-script.js";
    document.head.appendChild(createScript);
  });

  const createScript = document.createElement("script");
  createScript.src = "https://sibforms.com/forms/end-form/build/main.js";
  document.head.appendChild(createScript);
} else if (window.location.href.includes("tous-les-articles")) {
  waitForElm(".article-feed h2").then((elm) => {
    const createScript = document.createElement("script");
    createScript.src = "../../script/posts-script.js";
    document.head.appendChild(createScript);
  });
} else if (window.location.href.includes("sciences")) {
  waitForElm(".article-feed h2").then((elm) => {
    const createScript = document.createElement("script");
    createScript.src = "../../script/posts-script.js";
    document.head.appendChild(createScript);
  });
} else if (window.location.href.includes("actualites")) {
  waitForElm(".article-feed h2").then((elm) => {
    const createScript = document.createElement("script");
    createScript.src = "../../script/posts-script.js";
    document.head.appendChild(createScript);
  });
} else if (window.location.href.includes("histoire")) {
  waitForElm(".article-feed h2").then((elm) => {
    const createScript = document.createElement("script");
    createScript.src = "../../script/posts-script.js";
    document.head.appendChild(createScript);
  });
} else if (window.location.href.includes("archives")) {
  waitForElm(".article-feed h2").then((elm) => {
    const createScript = document.createElement("script");
    createScript.src = "../../script/posts-script.js";
    document.head.appendChild(createScript);
  });
} else if (window.location.href.includes("livres")) {
  waitForElm(".article-feed h2").then((elm) => {
    const createScript = document.createElement("script");
    createScript.src = "../../script/posts-script.js";
    document.head.appendChild(createScript);
  });
} else if (window.location.href.includes("le-saviez-vous")) {
  waitForElm(".article-feed h2").then((elm) => {
    const createScript = document.createElement("script");
    createScript.src = "../../script/posts-script.js";
    document.head.appendChild(createScript);
  });
} else if (window.location.href.includes("articles")) {
  waitForElm(".article-infos h1").then((elm) => {
    const createScript = document.createElement("script");
    createScript.src = "../../script/posts-script.js";
    document.head.appendChild(createScript);

    const createScript2 = document.createElement("script");
    createScript2.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
    document.head.appendChild(createScript2);
  });
} else if (window.location.href.includes("all-articles")) {
  waitForElm(".article-feed h2").then((elm) => {
    const createScript = document.createElement("script");
    createScript.src = "../../script/posts-script.js";
    document.head.appendChild(createScript);
  });
}
