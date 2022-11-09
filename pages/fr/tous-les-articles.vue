<template>
  <div class="root-container">
    <HeaderFR />

    <h1>Tous les articles</h1>

    <div class="article-feed" v-if="posts">
      <div class="card" v-for="(post, index) in posts" :key="post.slug + '_' + index">
        <!-- <a :href="'/fr/articles/' + post.slug"> -->
        <nuxt-link :to="{ name: 'fr-articles-slug', params: { slug: post.slug } }">
          <div class="img" :src="post.featured_image"></div>

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
            <p class="description">{{ post.summary }}</p>
            <p class="read">Lire l'article &#x2192;</p>
          </div>
        </nuxt-link>
        <!-- </a> -->
      </div>
    </div>

    <FooterFR />
  </div>
</template>

<script>
import { butter } from "~/plugins/buttercms";

export default {
  head() {
    return {
      title: "Tous les articles | MH info",
    };
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async getPosts() {
      const response = await butter.post
        .list({
          page: 1,
          category_slug: "articles-fr",
        })
      this.posts = response.data.data
    },

    // onBeforeUnLoad() {
    //   window.onbeforeunload = function () {
    //     localStorage.setItem("theme", currentTheme);
    //   };
    // },
  },
  async fetch() {
    await this.getPosts();
  },
};
</script>

<style scoped>
.card a {
  display: flex;
  margin: 50px auto;
  box-shadow: -3px 3px 5px #c5c5c5;
  border-radius: 7px;
  width: 80vw;
  background: white;
}

.card a .text-box {
  margin: 3.5% 30px 3.5% 15px;
  width: 60%;
}

.card a .text-box .author,
.card a .text-box .date {
  font-family: "Nunito Sans";
  font-weight: 300;
  font-size: 13px;
  display: inline-block;
}

.card a .img {
  width: 40%;
  height: 250px;
  border-radius: 7px;
  margin: 30px;
  background-size: cover;
  background-position: center;
  background-color: gray;
}

.card a .description {
  text-align: justify;
  font-family: "Cormorant Garamond";
  font-style: italic;
}

.articles .card>* {
  margin: 30px;
}

.articles h2 {
  font-size: 2.8vw;
}

/* Effects */
.card:hover {
  transform: translate(10px, -10px);
}

.card {
  transition: 500ms ease;
}

/* Media queries */
@media screen and (max-width: 700px) {
  .card a {
    flex-direction: column;
  }

  .card a h2 {
    margin-top: 0;
  }

  .card a .img {
    width: calc(80vw - 60px);
    margin-bottom: 10px;
  }

  .card a .text-box {
    margin: 3.5% 30px;
    width: calc(80vw - 60px);
  }
}

@media screen and (max-width: 344px) {
  .dot {
    opacity: 0;
  }

  .text-box .author,
  .text-box .date {
    margin: 5px 0;
  }
}

@media (prefers-color-scheme: dark) {
  body .card a {
    background: #222;
    box-shadow: -3px 3px 5px #555;
    color: white;
  }
}

.dark .card a {
  background: #222;
  box-shadow: -3px 3px 5px #555;
  color: white;
}

.light .card a {
  background: white;
  box-shadow: -3px 3px 5px #c5c5c5;
  color: initial;
}

/*# sourceMappingURL=cards.css.map */
/* @import url(../../css/tous-les-articles.css); */
/* @import url(../../css/components/cards.css); */
</style>
