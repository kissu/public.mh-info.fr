<template>
  <div class="root-container-menuFR">
    <header class="desktop-menu">
      <nav>
        <!-- <a href="/fr/" class="accueil inactive">Accueil</a> -->
        <!-- <a
          href="/fr/tous-les-articles/"
          class="tous-les-articles"
          id="inactive"
        >
          Tous les articles
        </a> -->
        <nuxt-link :to="{ name: 'fr' }">Accueil</nuxt-link>
        <nuxt-link :to="{ name: 'fr-tous-les-articles' }">Tous les articles</nuxt-link>
        <nuxt-link :to="{ name: 'fr-sciences' }">Sciences</nuxt-link>
        <!-- <a href="/fr/sciences/" class="sciences inactive">Sciences</a> -->
        <!-- <a href="/fr/actualites/" class="actualites inactive"> Actualités </a> -->
        <!-- <a href="/fr/histoire/" class="histoire inactive">Histoire</a> -->
        <!-- <a href="/fr/livres/" class="livres" id="inactive">Livres</a> -->
        <!-- <a href="/fr/le-saviez-vous/" class="le-saviez-vous inactive">
          Le saviez-vous ?
        </a> -->
        <!-- <a href="/fr/archives/" class="archives inactive">Archives</a> -->
        <a href="/fr/#s-abonner">S'abonner</a>
        <a href="/fr/#contact">Contact</a>
        <!-- <a href="/en/"> <i class="fa-solid fa-language"></i> English </a> -->
        <nuxt-link :to="{ name: 'en' }"><i class="fa-solid fa-language"></i> English</nuxt-link>

        <i class="fa-solid fa-circle-half-stroke mode" @click="modeOnClick"></i>
      </nav>
    </header>

    <!-- <header class="mobile-menu">
      <nav>
        <i class="fa-solid fa-bars menu-icon" onclick="liensDisplayFlex()"></i>

        <div class="liens">
          <i class="fa-solid fa-xmark close-icon" onclick="closeMenu()"></i>

          <a href="/fr/" onclick="closeMenu()" class="accueil" id="inactive">
            Accueil
          </a>
          <a
            href="/fr/tous-les-articles/"
            onclick="closeMenu()"
            class="tous-les-articles inactive"
          >
            Tous les articles
          </a>
          <a
            href="/fr/sciences/"
            onclick="closeMenu()"
            class="sciences inactive"
          >
            Sciences
          </a>
          <a
            href="/fr/actualites/"
            onclick="closeMenu()"
            class="actualites inactive"
          >
            Actualités
          </a>
          <a
            href="/fr/histoire/"
            onclick="closeMenu()"
            class="histoire inactive"
          >
            Histoire
          </a>
          <a href="/fr/livres/" onclick="closeMenu()" class="livres inactive">
            Livres
          </a>
          <a
            href="/fr/le-saviez-vous/"
            onclick="closeMenu()"
            class="le-saviez-vous inactive"
          >
            Le saviez-vous ?
          </a>
          <a href="/fr/archives/" class="archives inactive">Archives</a>
          <a href="/fr/#s-abonner/" onclick="closeMenu()">S'abonner</a>
          <a href="/fr/#contact/" onclick="closeMenu()">Contact</a>
          <a href="/en/" onclick="closeMenu()">
            <i class="fa-solid fa-language"></i> English
          </a>
          <i
            class="fa-solid fa-circle-half-stroke mode"
            @click="modeOnClick"
          ></i>
        </div>
      </nav>
    </header> -->
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

    // onBeforeUnLoad() {
    //   window.onbeforeunload = function () {
    //     localStorage.setItem("theme", currentTheme);
    //   };
    // },
  },
  mounted() {
    // const loadCreateScript = document.createElement("script");
    // loadCreateScript.setAttribute("src", "../../script/create-script.js");
    // document.head.appendChild(loadCreateScript);

    // const loadFooterScript = document.createElement("script");
    // loadFooterScript.setAttribute("src", "../../script/footer.js");
    // document.head.appendChild(loadFooterScript);

    // const loadDarkModeScript = document.createElement("script");
    // loadDarkModeScript.setAttribute("src", "../../script/dark-mode.js");
    // document.head.appendChild(loadDarkModeScript);

    // const loadDesktopMenuScript = document.createElement("script");
    // loadDesktopMenuScript.setAttribute("src", "../../script/desktop-menu.js");
    // document.head.appendChild(loadDesktopMenuScript);

    // const loadActualPageScript = document.createElement("script");
    // loadActualPageScript.setAttribute("src", "../../script/actual-page.js");
    // document.head.appendChild(loadActualPageScript);

    // const loadMobileMenuScript = document.createElement("script");
    // loadMobileMenuScript.setAttribute("src", "../../script/mobile-menu.js");
    // document.head.appendChild(loadMobileMenuScript);
  },
};
</script>
