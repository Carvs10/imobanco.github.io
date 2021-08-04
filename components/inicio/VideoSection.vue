<template>
  <section class="videosection pt-2 pb-2">
    <b-container class="videobase">
      <b-row class="">
        <b-col cols="12" md="6" lg="6" class="text-left mt-2">
           <img src="../../static/image/logo-globo-rn.png" alt class="img-fluid logo-video" />
          <iframe
            width="100%"
            height="270"
            src="https://www.youtube.com/embed/5vgKO1SAqVQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </b-col>
        <b-col cols="12" md="6" lg="6" class="text-left mt-2">
          <h2 class="title-font text-primary">Gestão Financeira facilitada, para você focar no que realmente importa:</h2>
          <p class="text-subtitle">
            Fechar novos e bons negócios
          </p>
        </b-col>
        
      </b-row>
    </b-container>
  </section>
</template>
<style lang="scss" scoped>
section {
  padding-bottom: 50px;
  .text-success {
    font-size: 30px;
  }
  iframe {
    border-radius: 10px;
  }
}
</style>