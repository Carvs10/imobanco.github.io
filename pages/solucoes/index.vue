<template>
  <div>
      <BoletoSlide />
    <Solucoes />
    <Solucoesboleto />   
    <Solucoessplit />   
    <SolucoesImopix />   
  </div>
</template>

<script>
import BoletoSlide from "@/components/boletos/BoletoSlide.vue";
import Solucoes from "@/components/solucoes/Solucoes.vue";
import Solucoesboleto from "@/components/solucoes/Solucoesboleto.vue";
import Solucoessplit from "@/components/solucoes/Solucoessplit.vue";
import SolucoesImopix from "@/components/solucoes/SolucoesImopix.vue";

export default {
    head: {
    title: "IMOBANCO | Simplifique suas cobranças recorrentes",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "Com o Imobanco fica mais fácil ganhar dinheiro. Todo o sistema é multibanco e automatizado. Gere boletos, carnês e envie por email de forma gratuita. ",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },
  components: {
    BoletoSlide,
    Solucoes,
    Solucoesboleto,
    Solucoessplit,
    SolucoesImopix,
  },
};
</script>

<style lang="scss" scoped></style>
