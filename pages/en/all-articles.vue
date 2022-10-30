<template>
  <div class="root-container">
    <HeaderEN />

    <h1>All articles</h1>

    <div class="article-feed" @click="onBeforeUnLoad">
      <div
        class="card"
        v-for="(post, index) in posts"
        :key="post.slug + '_' + index"
      >
        <a :href="'/en/articles/' + post.slug">
          <div class="img" :src="post.featured_image"></div>

          <div class="text-box">
            <h2 class="title">{{ post.title }}</h2>
            <div>
              <span class="author">
                <i class="fa-solid fa-user"></i> By
                {{ post.author.first_name }} {{ post.author.last_name }}
              </span>
              <span class="dot">&#8729;</span>
              <span class="date">
                <i class="fa-solid fa-calendar-days"></i>
                <span class="date-numbers">{{ post.published }}</span>
              </span>
            </div>
            <p class="description">{{ post.summary }}</p>
            <p class="read">Read &#x2192;</p>
          </div>
        </a>
      </div>
    </div>

    <FooterEN />
  </div>
</template>

<style>
@import url(../../css/tous-les-articles.css);
@import url(../../css/components/cards.css);
</style>

<script>
import { butter } from "~/plugins/buttercms";

if (window.location.href.includes("all-articles")) {
  butter.page.retrieve("*", "simple-page").then(() => {
    const createScript = document.createElement("script");
    createScript.src = "../../script/posts-script.js";
    document.head.appendChild(createScript);
  });
}

export default {
  head() {
    return {
      title: "All articles | MH info",
      htmlAttrs: {
        lang: "en",
      },
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
          page_size: 3,
          category_slug: "articles-en",
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
