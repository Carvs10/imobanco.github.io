export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  routes: [
    {
      name: 'release-single',
      path: '/release-single/:id',
      component: 'pages/release-single/index.vue'
    }
  ],
  head: {
    title: "IMOBANCO | Recebimentos e Cobranças",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "Tenha sua gestão financeira facilitada, para você focar no que realmente importa: Fechar novos e bons negócios",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff",
  },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/scss/custom.scss",
    // '@/assets/css/animate.css'
  ],

  /*
   ** Jquery CDN
   */
  script: [
    {
      src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      type: "text/javascript",
    },
  ],
  /*
   ** Plugins to load before mounting the App
   */

  plugins: [
    {
      src: "~plugins/bootstrap-vue",
    },
    {
      src: "~/plugins/js/main.js",
    },
    {
      src: "~/plugins/js/axios.js",
    },
    {
      src: "~/plugins/vue-notification.js",
      ssr: false,
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "bootstrap-vue/nuxt",
    "@nuxtjs/svg",
    "@neneos/nuxt-animate.css",
  ],
  
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
  },
  
};
