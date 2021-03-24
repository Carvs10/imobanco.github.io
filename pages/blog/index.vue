<template>
  <div class="container-fluid">
    <BlogSlide/>
    <BlogContent/>
  </div>
</template>

<script>
import BlogSlide from "@/components/blog/BlogSlide.vue";
import BlogContent from "@/components/blog/BlogContent.vue";

export default {
  components: {
    BlogSlide,
    BlogContent  
  },
};
</script>

<style></style>
