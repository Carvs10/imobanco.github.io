<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12" md="6" lg="12" class="text-left">
          <h3 class="text-imobanco text-title title-font">{{titulo}}</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          cols="12"
          md="6"
          lg="4"
          class="text-left mt-2"
          v-for="post in response"
          :key="post"
          :v-if="response"
        >
          <Noticias
            :post_id="response[response.indexOf(post)]['id']"
            :post_title="response[response.indexOf(post)]['data']['titulo'][0]['text']"
            :post_image="response[response.indexOf(post)]['data']['imagem']['url']"
            :post_date="response[response.indexOf(post)]['first_publication_date'].split('T')[0].split('-').reverse().join('/')"
            :post_content="response[response.indexOf(post)]['data']['conteudo'][0]['text']"
          />
        </b-col>

        <!--<Noticias :post="{post}"/>-->
        <!---->
        <!--
        <b-col cols="12" md="6" lg="4" class="text-left mt-2">
          <div class="row">
            <div class="col-md-12">
              <h6 class="text-imobanco text-title">Pix digital o novo sucesso</h6>)
              <p class="data-post text-content">Entrevista 11/03/2020</p>
            </div>
            <img src="../../assets/image/lojas.png" alt class="col-md-4 img-fluid" />
            <div class="col-md-8">
              <p
                class="except-post text-content"
              >o e o assunto abordado na rádio xyz foi a entrevista com Fernando Colares Hoje o assunto abordado na rádio xyz foi a</p>
              <p class="text-success link-post text-content">Leia mais</p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="6" lg="4" class="text-left mt-2">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <h6 class="text-imobanco text-title">Pix digital o novo sucesso</h6>
              <p class="data-post text-content">Entrevista 11/03/2020</p>
            </div>
            <img src="../../assets/image/lojas.png" alt class="col-md-4 col-sm-4 img-fluid" />
            <div class="col-md-8 col-sm-8">
              <p
                class="except-post text-content"
              >o e o assunto abordado na rádio xyz foi a entrevista com Fernando Colares Hoje o assunto abordado na rádio xyz foi a</p>
              <p class="text-success link-post text-content">Leia mais</p>
            </div>
          </div>
        </b-col>-->
      </b-row>
    </b-container>
  </section>
</template>
<script>
import Noticias from "./Noticias";
export default {
  name: "App",
  props: ["titulo"],
  components: {
    Noticias
  },
  data() {
    return {
      // Initialize "response"
      //posts: null
      response: null
    };
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      //const response = await this.$prismic.client.query("");
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("document.type", "post")
      );
      /*this.posts = [{
          "imagem": response['results'][0]['data']['imagem']['url'],
          "titulo": response['results'][0]["data"]["titulo"][0]["text"],
          "data_post": response['results'][0]["first_publication_date"],
          "conteudo": response['results'][0]["data"]["conteudo"][0]["text"]
      }]*/
      this.response = response["results"].slice(0, 3);
    }
  },
  created() {
    // Call the API query method
    this.getContent();
  }
};
</script>
<style lang="scss" scoped>
section {
  padding-top: 25px;
  padding-bottom: 50px;
}
</style>