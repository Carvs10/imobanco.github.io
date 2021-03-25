<template>
  <div>
    <!--<navbar-mobile />
    <header-slide />
    <persona-section />
    <services-section />
    <facilidades-item />
    <chat-comercial />-->
  
    <SlideSection/>
    <Parceiro/>
    <CtaLoja/>
    <Noticias/>
    
  </div>
</template>

<script>

import SlideSection from "../components/inicio/SlideSection";
import Parceiro from "../components/inicio/Parceiro";
import CtaLoja from "../components/inicio/CtaLoja";
import Noticias from "../components/inicio/Noticias";

export default {
  components: {
    SlideSection,
    Parceiro,
    CtaLoja,
    Noticias,

  },
};
</script>
<style></style>
