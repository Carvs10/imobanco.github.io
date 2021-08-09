<template>
  <section class="videosection pt-2 pb-2">
    <b-container class="videobase">
      <b-row class="">
        <b-col lg="12" class="text-center">
          <h2 class="text-light title-font">Vídeo</h2>
            <p class="text-light">Vídeo, podcast e muito mais.</p>
        </b-col>
        <b-col lg="12">
          <img src="../../static/image/logo-globo-rn.png" alt class="img-fluid logo-video" />
        </b-col>
        <b-col cols="12" md="6" lg="6" class="text-left mt-2">
           
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
          <h2 class="title-font text-light">Tire suas dúvidas sobre o 'PIX' - com o CEO Fernando Colares</h2>
          <p class="text-subtitle">
            Bom Dia RN - TV GLOBO
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