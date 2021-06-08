<template>
  <section class="slide-top">
    <b-container fluid >
      <b-row>
        <img src="../../static/image/banner-corretor.jpg" alt="" class="img-fluid" />
        <!-- <b-col cols="12" md="6" lg="6" class="text-left pt-5">
          <h1 class="text-slide">Recebimentos e cobranças em um único lugar.
          </h1>
          <p class="text-subtitle ">Simplifique com o Imobanco.</p>
          <a href="https://app.imobanco.com.br/register" target="_blank" class="btn btn-success">Abra sua conta</a>
        </b-col>
        <b-col cols="12" md="6" lg="5" class="text-right">
          <img src="../../static/image/slider-01.png" alt="" class="img-fluid" />
        </b-col> -->
      </b-row>
    </b-container>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
