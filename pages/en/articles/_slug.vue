<template>
  <div class=".root-container">
    <HeaderEN />

    <div class="article-image" :src="post.data.featured_image">
      <div class="article-infos">
        <h1 class="article-title">{{ post.data.title }}</h1>
        <p class="article-description">
          {{ post.data.summary }}
        </p>
        <div>
          <span class="author">
            <i class="fa-solid fa-user"></i> By
            {{ post.data.author.first_name }}
            {{ post.data.author.last_name }}
          </span>
          &#8729;
          <span class="date"
            ><i class="fa-solid fa-calendar-days"></i>
            <span class="date-numbers">{{ post.data.published }}</span>
          </span>
        </div>
      </div>
    </div>

    <section class="article-body" v-html="post.data.body"></section>

    <FooterEN />
  </div>
</template>

<style>
@import url(../../../css/components/article.css);
</style>

<script>
import { butter } from "~/plugins/buttercms";

export default {
  head() {
    return {
      htmlAttrs: {
        lang: "en",
      },
    };
  },
  data() {
    return {
      post: {
        data: {
          author: {},
        },
        meta: {},
      },
    };
  },
  methods: {
    getPost() {
      butter.post
        .retrieve(this.$route.params.slug)
        .then((res) => {
          console.log(res.data);
          this.post = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
  watch: {
    $route(to, from) {
      this.getPost();
    },
  },
  created() {
    this.getPost();
  },
};
</script>
