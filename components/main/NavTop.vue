<template>
<div class="nav-imobanco">
  <b-navbar toggleable="lg"
    type="light"
    class="fixed-top container-fluid imobanco"
    id="nav">
       
      <div class="container">
    
      <router-link to="/" class="navbar-brand">
            <div class="logo"></div>
      </router-link>
   

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
        <router-link
                    to="/"
                    class=""
                    >Home</router-link
                  >
        </b-nav-item>
        <b-nav-item>
                  <router-link
                    to="/Boletos"
                    class=""
                    >Boletos</router-link
                  >
            </b-nav-item>
            <b-nav-item>
                  <router-link
                    to="/Ecommerce"
                    class=""
                    >Ecommerce</router-link
                  >
             </b-nav-item>
        <b-nav-item>    
                  <router-link
                    to="/imprensa"
                    class=""
                    >Contas</router-link
                  >
                  </b-nav-item>
        <b-nav-item>
                  <router-link
                    to="/imprensa"
                    class=""
                    >Combo</router-link
                  >
                  </b-nav-item>
        <b-nav-item>
                  <router-link
                    to="/imprensa"
                    class=""
                    >Blog</router-link
                  >
                   </b-nav-item>
        <b-nav-item>
                  <router-link
                    to="/contato"
                    class=""
                    >Contato</router-link
                  > 
                  </b-nav-item>
        
                  <a href="https://app.imobanco.com.br/login" class="btn btn-success">Login</a>
                  <a href="https://app.imobanco.com.br/register" class="btn">Abra sua conta</a>
                  
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
 
</template>
<script>
export default {
  // mounted() {
  //   this.$nextTick(function() {
  //     window.addEventListener("scroll", function() {
  //       var navbar = document.getElementById("nav");
  //       var nav_classes = navbar.classList;
  //       if (document.documentElement.scrollTop >= 50) {
  //         if (nav_classes.contains("shrink") === false) {
  //           nav_classes.toggle("shrink");
  //         }
  //       } else {
  //         if (nav_classes.contains("shrink") === true) {
  //           nav_classes.toggle("shrink");
  //         }
  //       };
  //     });    
  //   });
  // },
};
</script>
<style></style>

