<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12" md="6" lg="12" class="text-center" v-if="response">
          <h1 class="text-imobanco text-title title-font">{{response['data']['titulo'][0]['text']}}</h1>
          <h6
            class="text-content text-blackdark"
          >Data de publicação: {{response['first_publication_date'].split('T')[0].split('-').reverse().join('/')}}</h6>
          <img
            :src="response['data']['imagem']['url']"
            alt="imagem principal do post"
            class="img-fluid"
            width="400px"
            height="400px"
            srcset
          />
          <br />
          <br />
          <div v-for="paragrafo in content_full" :key="paragrafo">
            <p class="text-content text-blackdark">{{ paragrafo['text']}}</p>
          </div>
        </b-col>
        <!-- <div :v-for="post in response" :key="post" v-if="response">
        <div>
          <!--<div v-if="response[response.indexof(post)]['id'] == post_id">
              {{response.indexof(post)}}
              <p>{{response[response.indexof(post)]}}</p>
          </div>
        </div>-->
      </b-row>
    </b-container>
  </section>
</template>

<script>
if (process.browser) {
  var post_id = location.search.slice(1).split("=")[1];
}
export default {
  data() {
    return {
      post_id,
      content_full: null,
      response: null
    };
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query("");
      this.response = response["results"];
      for (let i = 0; i < this.response.length; i++) {
        if (this.response[i]["id"] == this.post_id) {
          this.response = this.response[i];
          this.content_full = this.response["data"]["conteudo"];
        }
      }
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
  padding-top: 100px;
  padding-bottom: 50px;
}
</style>