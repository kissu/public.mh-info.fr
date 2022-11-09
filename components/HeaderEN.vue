<template>
  <div class="root-container-menuEN">
    <header class="desktop-menu" @click="onBeforeUnLoad">
      <nav>
        <a href="/en/" class="home inactive">Home</a>
        <a href="/en/all-articles/" class="all-articles inactive">
          All articles
        </a>
        <a href="/en/sciences/" class="sciences inactive">Sciences</a>
        <a href="/en/#s-abonner">Subscribe</a>
        <a href="/en/#contact">Contact</a>
        <a href="/fr/"> <i class="fa-solid fa-language"></i> Français </a>
        <i class="fa-solid fa-circle-half-stroke mode" @click="modeOnClick"></i>
      </nav>
    </header>

    <header class="mobile-menu">
      <nav>
        <i class="fa-solid fa-bars menu-icon" onclick="liensDisplayFlex()"></i>

        <div class="liens">
          <i class="fa-solid fa-xmark close-icon" onclick="closeMenu()"></i>

          <a href="/en/" onclick="closeMenu()" class="home inactive"> Home </a>
          <a
            href="/en/all-articles/"
            onclick="closeMenu()"
            class="all-articles inactive"
          >
            All articles
          </a>
          <a
            href="/en/sciences/"
            onclick="closeMenu()"
            class="sciences inactive"
          >
            Sciences
          </a>
          <a href="/en/#s-abonner/" onclick="closeMenu()">S'abonner</a>
          <a href="/en/#contact/" onclick="closeMenu()">Contact</a>
          <a href="/fr/" onclick="closeMenu()">
            <i class="fa-solid fa-language"></i> Français
          </a>
          <i
            class="fa-solid fa-circle-half-stroke mode"
            @click="modeOnClick"
          ></i>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  methods: {
    modeOnClick() {
      let modeClicks = 1;
      let numberOfClicks = modeClicks++;

      if (
        window.getComputedStyle(document.body).backgroundColor ==
        "rgb(250, 251, 252)"
      ) {
        numberOfClicks = modeClicks - 1;

        if (
          window.getComputedStyle(document.body).backgroundColor ==
          "rgb(34, 34, 34)"
        ) {
          numberOfClicks = modeClicks + 1;
        }
      }

      if (
        window.getComputedStyle(document.body).backgroundColor ==
        "rgb(34, 34, 34)"
      ) {
        numberOfClicks = numberOfClicks + 1;

        if (
          window.getComputedStyle(document.body).backgroundColor ==
          "rgb(250, 251, 252)"
        ) {
          numberOfClicks = modeClicks - 1;
        }
      }

      if (numberOfClicks % 2 !== 0) {
        darkMode();
      } else if (numberOfClicks % 2 == 0) {
        lightMode();
      }

      Vue.prototype.$currentTheme = localStorage.getItem("theme");
    },

    onBeforeUnLoad() {
      window.onbeforeunload = function () {
        localStorage.setItem("theme", currentTheme);
      };
    },
  },
  mounted() {
    const loadCreateScript = document.createElement("script");
    loadCreateScript.setAttribute("src", "../../script/create-script.js");
    document.head.appendChild(loadCreateScript);

    const loadFooterScript = document.createElement("script");
    loadFooterScript.setAttribute("src", "../../script/footer.js");
    document.head.appendChild(loadFooterScript);

    const loadDarkModeScript = document.createElement("script");
    loadDarkModeScript.setAttribute("src", "../../script/dark-mode.js");
    document.head.appendChild(loadDarkModeScript);

    const loadDesktopMenuScript = document.createElement("script");
    loadDesktopMenuScript.setAttribute("src", "../../script/desktop-menu.js");
    document.head.appendChild(loadDesktopMenuScript);

    // const loadActualPageScript = document.createElement("script");
    // loadActualPageScript.setAttribute("src", "../../script/actual-page.js");
    // document.head.appendChild(loadActualPageScript);

    const loadMobileMenuScript = document.createElement("script");
    loadMobileMenuScript.setAttribute("src", "../../script/mobile-menu.js");
    document.head.appendChild(loadMobileMenuScript);
  },
};
</script>
