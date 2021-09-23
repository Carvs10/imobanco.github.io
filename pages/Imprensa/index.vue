<template>
  <div>
    <imprensa-slide />
    <ReleaseSection />
    <footer-imprensa />
  </div>
</template>

<script>
import ReleaseSection from "@/components/imprensa/ReleaseSection.vue";
import ImprensaSlide from "@/components/imprensa/ImprensaSlide.vue";
import FooterImprensa from "@/components/imprensa/FooterImprensa.vue";


export default {
  components: {
    ReleaseSection,
    ImprensaSlide,
    FooterImprensa
    
  }
};
</script>

<style></style>
