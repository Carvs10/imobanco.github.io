<template>
  <b-container>
    <b-row class="justify-content-center pt-5 pb-5">
      <b-col cols="12" md="12" lg="12" class="text-left">
        <h1 class="text-imobanco text-title mt-3 title-font">
          Release imprensa
        </h1>
      </b-col>
      <b-col lg="2"></b-col>
      <b-col cols="12" md="12" lg="10" class="text-left bg-graylight form-radius pt-5 pb-5 box">
        <b-row>
          <b-col cols="12" md="12" lg="12" class="text-left">
            <p style="font-size:12px">Entrevista   11/03/2020</p>
          </b-col>
          <b-col cols="12" md="12" lg="3" class="text-left">
            <img src="image/bg-imo.jpg" alt class="img-fluid pb-3" />
          </b-col>
          <b-col cols="12" md="12" lg="9" class="text-left">
            <h5 class="text-blackdark">Hoje o assunto abordado na rádio xyz foi a entrevista</h5>
            <p>com Fernando Colares Hoje o assunto abordado 
              na rádio xyz foi a entrevista com Fernando 
              ColaresHoje o assunto abordado na rádio xyz 
              foi a entrevista com Fernando ColaresHoje o 
              assunto abordado na rádio xyz foi a entrevista com Fernando Colares.
            </p>
            <a href="#" class="text-success" style="font-size:12px">Leia mais</a>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="12" lg="12" class="text-left">
            <p style="font-size:12px">Entrevista   11/03/2020</p>
          </b-col>
          <b-col cols="12" md="12" lg="3" class="text-left">
            <img src="image/bg-imo.jpg" alt class="img-fluid pb-3" />
          </b-col>
          <b-col cols="12" md="12" lg="9" class="text-left">
            <h5 class="text-blackdark">Hoje o assunto abordado na rádio xyz foi a entrevista</h5>
            <p>com Fernando Colares Hoje o assunto abordado 
              na rádio xyz foi a entrevista com Fernando 
              ColaresHoje o assunto abordado na rádio xyz 
              foi a entrevista com Fernando ColaresHoje o 
              assunto abordado na rádio xyz foi a entrevista com Fernando Colares.
            </p>
            <a href="#" class="text-success" style="font-size:12px">Leia mais</a>
          </b-col>
        </b-row>
      </b-col>
      <post-card />
    </b-row>
  </b-container>
</template>

<script>
import PostCard from "@/components/imprensa/PostCard.vue";
export default {
  name: "PostItem",
  components: {
    PostCard,
  },
};
</script>

<style lang="scss" scoped>
  .box{
    box-shadow: 1px 4px 5px -2px rgba(80,79,79,0.75);
    -webkit-box-shadow: 1px 4px 5px -2px rgba(80,79,79,0.75);
    -moz-box-shadow: 1px 4px 5px -2px rgba(80,79,79,0.75);
  }
</style>
