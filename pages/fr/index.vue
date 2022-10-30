<template>
  <div class="root-container">
    <HeaderFR />

    <h1>Accueil</h1>

    <div class="recent-article-feed" @click="onBeforeUnLoad">
      <div v-for="(post, index) in posts" :key="post.slug + '_' + index">
        <a :href="'/fr/articles/' + post.slug">
          <div class="article" :src="post.featured_image">
            <div class="dark-window">
              <div class="text-box">
                <h2 class="title">{{ post.title }}</h2>
                <div>
                  <span class="author">
                    <i class="fa-solid fa-user"></i> Par
                    {{ post.author.first_name }} {{ post.author.last_name }}
                  </span>
                  <span class="dot">&#8729;</span>
                  <span class="date">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span class="date-numbers">{{ post.published }}</span>
                  </span>
                </div>
                <p class="description">
                  {{ post.summary }}
                </p>
                <p class="read">Lire l'article &#x2192;</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

    <section class="s-abonner" id="s-abonner">
      <div>
        <p>
          <span class="bold">Inscription à la newsletter</span> <br />
          Seulement un mail à chaque nouvel article, et une info concernant MH
          info de temps à autre
        </p>

        <div class="sib-form">
          <div id="sib-form-container" class="sib-form-container">
            <div
              id="sib-container"
              class="sib-container--large sib-container--vertical"
            >
              <form
                id="sib-form"
                method="POST"
                action="https://7d1c8516.sibforms.com/serve/MUIEALlWLxHdHoKi3KMHF5AfqJd22ztJwWkwqGaS4xnG5Et8_wRncfWEzLOVuhsH036hWwfB_fSBjHqX60sYFVBChw1_WFYqgb_xfJSWNz3qXDp8bj7H_ePvkNeCnDYIRrJHjouVNj1yfvAdmGcoWcpnAZ7gilRTmZy_YfoerVkJmBfCkQCuqyrdMUCcLWp12Zgmi0bSnvMd7trp"
                data-type="subscription"
              >
                <div>
                  <div class="sib-input sib-form-block">
                    <div class="form__entry entry_block">
                      <div class="form__label-row">
                        <label class="entry__label" for="PRENOM">
                          <i class="fa-solid fa-user"></i>
                          Prénom*
                        </label>

                        <div class="entry__field">
                          <input
                            class="input"
                            type="text"
                            id="PRENOM"
                            name="PRENOM"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="sib-input sib-form-block">
                    <div class="form__entry entry_block">
                      <div class="form__label-row">
                        <label class="entry__label" for="NOM">
                          <i class="fa-solid fa-user"></i>
                          Nom*
                        </label>

                        <div class="entry__field">
                          <input
                            class="input"
                            type="text"
                            id="NOM"
                            name="NOM"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="sib-input sib-form-block">
                    <div class="form__entry entry_block">
                      <div class="form__label-row">
                        <label class="entry__label" for="EMAIL">
                          <i class="fa-solid fa-at"></i>
                          Adresse e-mail*
                        </label>

                        <div class="entry__field">
                          <input
                            class="input"
                            type="text"
                            id="EMAIL"
                            name="EMAIL"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="sib-form-block">
                    <button
                      class="sib-form-block__button sib-form-block__button-with-loader"
                      form="sib-form"
                      type="submit"
                    >
                      <svg
                        class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                        />
                      </svg>
                      S'abonner
                    </button>
                  </div>
                </div>

                <input
                  type="text"
                  name="email_address_check"
                  value=""
                  class="input--hidden"
                />
                <input type="hidden" name="locale" value="fr" />
              </form>
            </div>

            <div id="error-message" class="sib-form-message-panel">
              <div
                class="sib-form-message-panel__text sib-form-message-panel__text--center"
              >
                <svg
                  viewBox="0 0 512 512"
                  class="sib-icon sib-notification__icon"
                >
                  <path
                    d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"
                  />
                </svg>
                <span class="sib-form-message-panel__inner-text">
                  Nous n'avons pas pu confirmer votre inscription. Veuillez
                  remplir tous les champs.
                </span>
              </div>
            </div>
            <div id="success-message" class="sib-form-message-panel">
              <div
                class="sib-form-message-panel__text sib-form-message-panel__text--center"
              >
                <svg
                  viewBox="0 0 512 512"
                  class="sib-icon sib-notification__icon"
                >
                  <path
                    d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"
                  />
                </svg>
                <span class="sib-form-message-panel__inner-text">
                  Merci pour votre inscription !
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact" id="contact">
      <div class="ext-contact-box">
        <div class="int-contact-box">
          <h2>Contact</h2>
          <p><a href="mailto:contact@mh-info.fr">contact@mh-info.fr</a></p>
        </div>
      </div>
    </section>

    <FooterFR />
  </div>
</template>

<style>
@import url("../../css/index.css");
@import url("../../css/components/recent-article-feed.css");
@import url("https://sibforms.com/forms/end-form/build/sib-styles.css");
</style>

<script>
import { butter } from "~/plugins/buttercms";

export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      butter.post
        .list({
          page: 1,
          page_size: 3,
          category_slug: "articles-fr",
        })
        .then((res) => {
          // console.log(res.data)
          this.posts = res.data.data;
        });
    },

    onBeforeUnLoad() {
      window.onbeforeunload = function () {
        localStorage.setItem("theme", currentTheme);
      };
    },
  },
  created() {
    this.getPosts();
  },
};

window.REQUIRED_ERROR_MESSAGE = "Vous devez renseigner ce champ. ";
</script>
