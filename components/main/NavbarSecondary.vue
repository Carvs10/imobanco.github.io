<template>
  <b-navbar
    toggleable="lg"
    type="light"
    class="fixed-top container-fluid imobanco"
    id="nav"
  >
    <div class="container">
            <router-link to="/" class="navbar-brand">
              <img src="~assets/image/logoimobanco.png" alt />
            </router-link>
            <b-navbar-toggle
              target="nav-collapse"
              class="bg-white form-radius-total p-1"
            ></b-navbar-toggle>
        <div class="col-md-12 pt-4">
          <b-collapse id="nav-collapse" is-nav>
            <b-row class="justify-content-right">
              <b-col cols="12" md="6">
                <b-navbar-nav class="ml-auto text-center pb-2">
                  <router-link
                    to="/"
                    class="text-titulo-sidebar text-decoration-none text-white navbarbox"
                    >Home</router-link
                  >

                  <router-link
                    to="/Boletos"
                    class="text-titulo-sidebar text-decoration-none text-white navbarbox"
                    >Boletos</router-link
                  >
                  <router-link
                    to="/Ecommerce"
                    class="text-titulo-sidebar text-decoration-none text-white navbarbox"
                    >Ecommerce</router-link
                  >
                  <router-link
                    to="/cobrancas"
                    class="text-titulo-sidebar text-decoration-none text-white navbarbox"
                    >Cobranças</router-link
                  >
                  <router-link
                    to="/imprensa"
                    class="text-titulo-sidebar text-decoration-none text-white navbarbox"
                    >Imprensa</router-link
                  >
                  <router-link
                    to="/contato"
                    class="text-titulo-sidebar text-decoration-none text-white navbarbox"
                    >Contato</router-link
                  >
                  <a
                    href="http://app.imobanco.com.br/login"
                    target="_blank"
                    class="btn bg-bluepink text-titulo-sidebar text-decoration-none text-white navbarbox form-radius ml-3"
                    >Login</a
                  >
                  <router-link
                    to="/contato"
                    class="text-titulo-sidebar text-decoration-none text-white navbarbox btn btn-primary"
                    >Cadastre-se</router-link
                  >
                  <router-link
                    to="/contato"
                    class="text-titulo-sidebar text-decoration-none text-white navbarbox btn btn-info"
                    >Login</router-link
                  >
                  
                </b-navbar-nav>
              </b-col>
            </b-row>
      </b-collapse>
        </div>     
    </div>
  </b-navbar>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", function() {
        var navbar = document.getElementById("nav");
        var nav_classes = navbar.classList;
        if (document.documentElement.scrollTop >= 50) {
          if (nav_classes.contains("shrink") === false) {
            nav_classes.toggle("shrink");
          }
        } else {
          if (nav_classes.contains("shrink") === true) {
            nav_classes.toggle("shrink");
          }
        }
      });
    });
  },
};
</script>
<style></style>
