<template>
  <div>
    <SolucoesSlide />
    <Solucoes />
    <Solucoesboleto />   
    <Solucoessplit />   
    <SolucoesImopix />   
    <SolucoesEcommerce />   
    <SolucoesTransferencia />   
  </div>
</template>

<script>
import SolucoesSlide from "@/components/solucoes/SolucoesSlide.vue";
import Solucoes from "@/components/solucoes/Solucoes.vue";
import Solucoesboleto from "@/components/solucoes/Solucoesboleto.vue";
import Solucoessplit from "@/components/solucoes/Solucoessplit.vue";
import SolucoesImopix from "@/components/solucoes/SolucoesImopix.vue";
import SolucoesEcommerce from "@/components/solucoes/SolucoesEcommerce.vue";
import SolucoesTransferencia from "@/components/solucoes/SolucoesTransferencia.vue";

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
    SolucoesSlide,
    Solucoes,
    Solucoesboleto,
    Solucoessplit,
    SolucoesImopix,
    SolucoesEcommerce,
    SolucoesTransferencia,
  },
};
</script>

<style lang="scss" scoped></style>
