<template>
     <div>
      <BoletoSlide />
      <VantagensBoleto />
      <MaisBoleto />
    </div>
</template>

<script>

import BoletoSlide from "@/components/boletos/BoletoSlide.vue";
import VantagensBoleto from "@/components/boletos/VantagensBoleto.vue";
import MaisBoleto from "@/components/boletos/MaisBoleto.vue";

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
    VantagensBoleto,
    MaisBoleto,
  },
};
</script>

<style lang="scss">
  .text-tachado{
    text-decoration: line-through;
  }
  mark{
    color:white;
    background-color: #38C1DF;
    border-radius: 6px;
    padding:2px;
  }
</style>
