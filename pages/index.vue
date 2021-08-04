<template>
  <div>
    <ContaDigitalSection />
    <ContaOnline />
    <VideoSection />
    <ParceiroSection />
    <EcommerceChamada />
    <!-- <TecnologiaSection />    -->
    <NoticiasSection titulo="Notícias" />
  </div>
</template>

<script>
import ContaDigitalSection from "../components/inicio/ContaDigitalSection";
import ContaOnline from "../components/inicio/ContaOnline";
import VideoSection from "../components/inicio/VideoSection";
import ParceiroSection from "../components/inicio/ParceiroSection";
import TecnologiaSection from "../components/inicio/TecnologiaSection";
import NoticiasSection from "../components/inicio/NoticiasSection";
import EcommerceChamada from "@/components/ecommerce/EcommerceChamada.vue";

export default {
  components: {
    ContaDigitalSection,
    ContaOnline,
    VideoSection,
    ParceiroSection,
    TecnologiaSection,
    NoticiasSection,
    EcommerceChamada,
  }
};
</script>
<style></style>
