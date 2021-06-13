<template>
  <section class="slide-home">
      <div class="slide-home-text">
      <h1 class="text-slide-home">Recebimentos e cobranças <br> em um único lugar.</h1>
      <img src="../../static/image/boleto-texto.png" alt="" class="" />    
      <div class="mt-2">
         <!-- <p class="text-subtitle ">Simplifique com o Imobanco.</p> -->
          <a href="https://app.imobanco.com.br/register" target="_blank" class="btn btn-success">Abra sua conta</a>
      </div>
    </div>
     <div>
        <img src="../../static/image/bg-home-1.png" alt="" class="waves" />
     </div>     
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
