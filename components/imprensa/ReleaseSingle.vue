<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12" md="6" lg="12" class="text-center" v-if="response">
          <h1 class="text-imobanco text-title title-font">{{response['data']['titulo'][0]['text']}}</h1>
          <h6
            class="text-content text-blackdark"
          >Data: {{response['data']['data'].split('-').reverse().join('/')}}</h6>
          <br />
          <br />
          <div v-for="paragrafo in content_full" :key="paragrafo" :v-if="content_full">
            <p class="text-content text-blackdark">{{ paragrafo['text']}}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
if (process.browser) {
  var release_id = location.search.slice(1).split("=")[1];
}
export default {
  data() {
    return {
      //release_id,
      release_id,
      content_full: null,
      response: null
    };
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("document.type", "releases")
      );
      this.response = response["results"];
      for (let i = 0; i < this.response.length; i++) {
        if (this.response[i]["id"] == this.release_id) {
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