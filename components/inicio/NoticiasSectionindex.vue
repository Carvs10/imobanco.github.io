<template>
  <section class="">
    <b-container>
      <b-row>
        <b-col cols="12" md="12" lg="12" class="text-center">
          <h2 class="text-primary title-font">Notícias</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          cols="12"
          md="6"
          lg="4"
          class="text-left mt-2"
          v-for="post in response"
          :key="post.id"
          :v-if="response"
        >
          <Noticias
            :post_id="response[response.indexOf(post)]['id']"
            :post_title="
              response[response.indexOf(post)]['data']['titulo'][0]['text']
            "
            :post_image="
              response[response.indexOf(post)]['data']['imagem']['url']
            "
            :post_date="
              response[response.indexOf(post)]['first_publication_date']
                .split('T')[0]
                .split('-')
                .reverse()
                .join('/')
            "
            :post_content="
              response[response.indexOf(post)]['data']['conteudo'][0]['text']
            "
          />
        </b-col>
        <b-col lg="12" class="text-center">
          <router-link
                    to="/imprensa"
                    class="btn btn-outline-primary"
                    >Mais notícias</router-link>
        </b-col>
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
    Noticias,
  },
  data() {
    return {
      response: null,
    };
  },
  methods: {
    async getContent() {
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("document.type", "post"),
        {
          orderings: "[document.last_publication_date desc]",
        }
      );

      this.response = response["results"].slice(0, 3);
    },
  },
  created() {
    this.getContent();
  },
};
</script>
<style lang="scss" scoped>
section {
  padding-top: 25px;
  padding-bottom: 50px;
}
</style>
