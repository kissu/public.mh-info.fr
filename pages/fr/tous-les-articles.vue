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

<style>
@import url(../../css/tous-les-articles.css);
@import url(../../css/components/cards.css);
</style>
