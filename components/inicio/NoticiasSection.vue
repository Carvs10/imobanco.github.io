<template>
  <section class="">
    <b-container>
      <b-row>
        <b-col cols="12" md="12" lg="12" class="text-center">
          <h2 class="text-primary title-font">Notícias Blog</h2>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="12" md="8" lg="8" v-for="post in response"
          :key="post.id"
          :v-if="response"> Esquerda
        </b-col>
        <b-col cols="12" md="4" lg="4"> Direita</b-col>
        <!-- <b-col
          cols="12"
          md="6"
          lg="8"
          class="text-left mt-2"
          v-for="post in response"
          :key="post.id"
          :v-if="response"
        >
          <noticias-blog
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
        <b-col lg="3" class=""
          v-for="post in response"
          :key="post.id"
          :v-if="response">
           <noticias-blog
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
        </b-col> -->
      </b-row>
    </b-container>
  </section>
</template>
<script>
import NoticiasBlog from '../blog/NoticiasBlog.vue';
export default {
  name: "App",
  props: ["titulo"],
  components: {
    NoticiasBlog,
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

      this.response = response["results"].slice(0, 6);
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
