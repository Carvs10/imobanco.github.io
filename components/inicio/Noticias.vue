<template>
    <section>
        <b-container>
            <b-row style="padding-top:50px">
                <b-col cols="12" md="6" lg="6" class="text-left mt-5   ">
                    <h2 class="text-azul-escuro">Tecnologia que facilita.</h2>
                    <p class="text-azul-claro">Resultados que transformam.</p>
                    <p class="pt-2 ">Api espetacular para integrar com sua necessidade</p>
                </b-col>
                <b-col  lg="1"></b-col>
                <b-col cols="12" md="6" lg="5" class="text-right mt-2">
                    <img src="../../static/image/apiindex.png" alt="" class="img-fluid">
                </b-col>
            </b-row>
            <b-row >
                <b-col cols="12" md="6" lg="12" class="text-left mt-5">
                    <h3 class="text-azul-escuro">Notícias</h3>
                </b-col>
            </b-row>
            <b-row>
               <b-col cols="12" md="6" lg="4" class="text-left mt-2">
                    <b-row v-if="post">
                        <b-col cols="12" md="6" lg="6">
                            <img :src="post['imagem']" alt="" class="img-fluid">
                        </b-col>
                        <b-col cols="12" md="6" lg="6">
                            <h6 class="text-imobanco text-title">{{ post['titulo'] }}</h6>
                             <p class="text-content">{{ post['conteudo'] }}</p>
                        </b-col>
                    </b-row>
                </b-col>              
            </b-row>
        </b-container>
        
        <pre id="app" v-html="JSON.stringify(response, null, 2)"></pre>
        
        
        
    </section>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      // Initialize "response"
      post: null
    }
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query('')
      console.log(response)
      this.post = {
          "imagem": response['results'][0]['data']['imagem']['url'],
          "titulo":response['results'][0]['data']['titulo'][0]['text'],
          "conteudo":response['results'][0]['data']['conteudo'][0]['text'],
      }
    }
  },
  created() {
    // Call the API query method
    this.getContent()
  }
}
</script>
<style lang="scss" scoped>
    section{
        padding-top: 25px;
        padding-bottom: 100px;
        mark{
            background-color: #38b4ca;
            border-radius: 8px;
            color:white;
        }
        .text-azul-escuro{
            color:#003F69;
            font-weight: bolder;
        }
        .text-azul-claro{
            color:#38b4ca;
            font-size: 25px;
        }
        .link-post{
            color:#38b4ca;
            font-size: 12px;
        }
        .except-post{
            font-size: 12px;
        }
        .data-post{
            font-size:11px
        }
        .btn-primary{
            background-color: #003F69;
        }
        iframe{
            border-radius:10px;
        }
        p{
            font-size: 18px;
        }
    }
</style>