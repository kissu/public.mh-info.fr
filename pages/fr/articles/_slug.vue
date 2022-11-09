<template>
  <div class=".root-container" v-if="Object.entries(post,data).length">
    <HeaderFR />

    <div class="article-image" :src="post.data.featured_image">
      <div class="article-infos">
        <h1 class="article-title">{{ post.data.title }}</h1>
        <p class="article-description">
          {{ post.data.summary }}
        </p>
        <div>
          <span class="author">
            <i class="fa-solid fa-user"></i> Par
            {{ post.data.author.first_name }}
            {{ post.data.author.last_name }}
          </span>
          <span class="dot">&#8729;</span>
          <span class="date"><i class="fa-solid fa-calendar-days"></i>
            <span class="date-numbers">{{ post.data.published }}</span>
          </span>
        </div>
      </div>
    </div>

    <section class="article-body" v-html="post.data.body"></section>

    <FooterFR />
  </div>
</template>

<script>
import { butter } from "~/plugins/buttercms";

export default {
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
    async getPost() {
      try {
        const response = await butter.post.retrieve(this.$route.params.slug)
        this.post = response.data
      } catch (error) {
        console.error(error)
      }
      // .then((res) => {
      //   console.log(res.data);
      //   this.post = res.data;
      // })
      // .catch((res) => {
      //   console.log(res);
      // });
    },
  },
  watch: {
    $route(to, from) {
      this.getPost();
    },
  },
  async fetch() {
    await this.getPost();
  },
};
</script>

<style>
@import url(../../../css/components/article.css);
</style>
