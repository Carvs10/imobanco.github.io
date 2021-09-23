<template>
  <div>
    <blog-slide />
    <NoticiasSection titulo="Outras Notícias"/>
  </div>
</template>

<script>
import ImprensaSlide from "@/components/imprensa/ImprensaSlide.vue";
import BlogSlide from "@/components/blog/BlogSlide.vue";
import BlogContent from "@/components/blog/BlogContent.vue";
import NoticiasSection from "@/components/inicio/NoticiasSection.vue";


export default {
  components: {
    ImprensaSlide,
    BlogSlide,
    BlogContent,
    NoticiasSection,

  },
};
</script>

<style></style>
