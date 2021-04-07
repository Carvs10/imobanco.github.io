<template>
  <div>
    <!--<navbar-mobile />
    <header-slide />
    <persona-section />
    <services-section />
    <facilidades-item />
    <chat-comercial />-->
    <ContaDigitalSection />
    <FoqueSection />
    <ParceiroSection />
    <TecnologiaSection />
    <NoticiasSection titulo="Notícias" />
  </div>
</template>

<script>
import ContaDigitalSection from "../components/inicio/ContaDigitalSection";
import FoqueSection from "../components/inicio/FoqueSection";
import ParceiroSection from "../components/inicio/ParceiroSection";
import TecnologiaSection from "../components/inicio/TecnologiaSection";
import NoticiasSection from "../components/inicio/NoticiasSection";

export default {
  components: {
    ContaDigitalSection,
    FoqueSection,
    ParceiroSection,
    TecnologiaSection,
    NoticiasSection
  }
};
</script>
<style></style>
