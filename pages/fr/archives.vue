<template>
  <div class="root-container-archives">
    <HeaderFR />

    <h1>Archives</h1>

    <div class="article-feed" @click="onBeforeUnLoad">
      <div
        class="card"
        v-for="(post, index) in posts"
        :key="post.slug + '_' + index"
      >
        <a :href="'/fr/articles/' + post.slug">
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
        </a>
      </div>
    </div>

    <FooterFR />
  </div>
</template>

<style>
@import url(../../css/archives.css);
@import url(../../css/components/cards.css);
</style>

<script>
import { butter } from "~/plugins/buttercms";

export default {
  head() {
    return {
      title: "Archives | MH info",
    };
  },
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
          category_slug: "archives-fr",
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
</script>
