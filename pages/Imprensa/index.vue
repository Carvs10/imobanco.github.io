<template>
  <div class="container-fluid">
    <!--<navbar-secondary />-->
    <imprensa-slide />
    <ReleaseSection />
    <noticias-section titulo="Noticias"/>
    <footer-imprensa />
  </div>
</template>

<script>
import ReleaseSection from "@/components/imprensa/ReleaseSection.vue";
import ImprensaSlide from "@/components/imprensa/ImprensaSlide.vue";
import NoticiasSection from "@/components/inicio/NoticiasSection.vue";
import FooterImprensa from "@/components/imprensa/FooterImprensa.vue";
//import NavbarSecondary from "@/components/main/NavbarSecondary.vue";

export default {
  components: {
    ReleaseSection,
    ImprensaSlide,
    NoticiasSection,
    FooterImprensa
    //avbarSecondary,
  }
};
</script>

<style></style>
