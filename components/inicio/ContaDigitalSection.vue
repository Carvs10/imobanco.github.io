<template>
  <section class="slide-home">
    <b-container>
      <b-row>
      <b-col lg=6 class="slide-home-text">
        <h1 class="text-slide-home">Recebimentos e cobranças <br> em um único lugar.</h1>
        
      <div class="mt-2">
          <a href="https://app.imobanco.com.br/register" target="_blank" class="btn btn-success">Abra sua conta</a>
      </div>
      </b-col>
      <b-col lg=6 class="slide-home-text-right">
        
      </b-col>
    </b-row>
    </b-container>
      <!-- <div>
        <img src="../../static/image/bg-home-1.png" alt="" class="waves" />
     </div>      -->
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
