<template>
  <div>
    <nav-top />
    <nuxt />
    <footer-index />
  </div>
</template>
 
<script>
import NavTop from "@/components/main/NavTop.vue";
import FooterIndex from "@/components/main/FooterIndex.vue";

export default {
  head: {
    title: "IMOBANCO | Recebimentos e Cobranças",
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
        content: "Tenha sua gestão financeira facilitada. O Imobanco é um banco digital oferece gestão financeira com serviços de conta digital, recebimentos, pagamentos, transferências, cobranças e e-commerce. ",
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
    NavTop,
    FooterIndex,
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.slideecommerce {
  height: 500px;
  /* background-image: url("~assets/image/bgecommerce.jpg"); */
  background: rgb(4, 95, 170);
  background-size: 100% auto cover;
  background-position: center top;
  background-repeat: no-repeat;
}
.mostrar {
  opacity: 0;
}
</style>
