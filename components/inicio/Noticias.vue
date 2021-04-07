<template>
  <b-row>
    <b-col cols="12" md="12" lg="12" class="mb-3">
      <span>
        <a :href="link+post_id" class="text-imobanco text-title">{{post_title}}</a>
      </span>
      <br />
      <span class="data-post text-content">Entrevista {{ post_date }}</span>
    </b-col>
    <b-col cols="12" md="6" lg="6">
      <img :src="post_image" alt class="img-fluid" />
    </b-col>
    <b-col cols="12" md="6" lg="6">
      <p class="text-content except-post">{{ post_content }}</p>
      <form action="/single">
        <input type="text" :value="post_id" hidden="hidden" name="post_id" />
        <!--<nuxt-link :to="/single/+post_id">Leia mais</nuxt-link>-->
        <button type="submit" class="text-success link-post">Leia mais</button>
      </form>
    </b-col>
  </b-row>
  <!-- <b-row >
            <b-col cols="12" md="6" lg="12" >
              <h6 class="text-imobanco text-title">{{ response[response.indexOf(post)]['data']["titulo"][0]["text"]}}</h6>
              <span class="data-post text-content">Entrevista {{ response[response.indexOf(post)]["first_publication_date"] }}</span>
            </b-col>
            <b-col cols="12" md="6" lg="6">
              <img :src="response[response.indexOf(post)]['data']['imagem']['url']" alt class="img-fluid" />
            </b-col>
            <b-col cols="12" md="6" lg="6">
              <p class="text-content except-post">{{ response[response.indexOf(post)]['data']["conteudo"][0]["text"] }}</p>
              <a href class="text-success link-post">Leia mais</a>
            </b-col>
  </b-row>-->
</template>
<script>
export default {
  props: ["post_id", "post_title", "post_image", "post_date", "post_content"],
  data() {
    return {
      link: "/single/?post_id="
    };
  }
};
</script>
<style lang="scss" scoped>
.except-post {
  font-size: 12px;
}
.data-post {
  font-size: 11px;
}
.link-post {
  font-size: 12px;
}
p {
  font-size: 18px;
}
a {
  text-decoration: none;
}
img {
  height: 120px;
}
</style>