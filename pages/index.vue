<template>
  <div>
    <ContaDigitalSection />
    <ContaOnline />
    <ContaGeral />
    <ParceiroLogo />
    <ParceiroSection />
    <VideoSection />
    <EcommerceChamada />
    <!-- <TecnologiaSection />    -->
    <NoticiasSection titulo="Notícias" />
  </div>
</template>

<script>
import ContaDigitalSection from "../components/inicio/ContaDigitalSection";
import ContaOnline from "../components/inicio/ContaOnline";
import ContaGeral from "../components/inicio/ContaGeral";
import VideoSection from "../components/inicio/VideoSection";
import ParceiroLogo from "../components/inicio/ParceiroLogo";
import ParceiroSection from "../components/inicio/ParceiroSection";
import TecnologiaSection from "../components/inicio/TecnologiaSection";
import NoticiasSection from "../components/inicio/NoticiasSection";
import EcommerceChamada from "@/components/ecommerce/EcommerceChamada.vue";

export default {
  components: {
    ContaDigitalSection,
    ContaOnline,
    ContaGeral,
    VideoSection,
    ParceiroLogo,
    ParceiroSection,
    TecnologiaSection,
    NoticiasSection,
    EcommerceChamada,
  }
};
</script>
<style></style>
