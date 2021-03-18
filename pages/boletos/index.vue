<template>
  <div class="container-fluid">
    <div>
      <navbar-secondary />
      <HeaderAzul/>
      <frase-boleto />
      <multibanco-boleto />
      <vantagens-boleto />
      <mais-boleto />
    </div>
  </div>
</template>

<script>
import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
import HeaderAzul from "@/components/boletos/HeaderAzul.vue";
import FraseBoleto from "@/components/boletos/FraseBoleto.vue";
import MultibancoBoleto from "@/components/boletos/MultibancoBoleto.vue";
import VantagensBoleto from "@/components/boletos/VantagensBoleto.vue";
import MaisBoleto from "@/components/boletos/MaisBoleto.vue";

export default {
  components: {
    NavbarSecondary,
    HeaderAzul,
    FraseBoleto,
    MultibancoBoleto,
    VantagensBoleto,
    MaisBoleto,
  },
};
</script>

<style></style>
