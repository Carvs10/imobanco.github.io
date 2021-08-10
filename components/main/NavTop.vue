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
                    to="/quemsomos"
                    class=""
                    >Quem Somos</router-link
                  >
            </b-nav-item>
            <!-- <b-nav-item>
                  <router-link
                    to="/Ecommerce"
                    class=""
                    >Ecommerce</router-link
                  >
             </b-nav-item> -->
              <b-nav-item>    
                  <router-link
                    to="/conta"
                    class=""
                    >Conta Digital</router-link
                  >
              </b-nav-item>
              <b-nav-item>    
                  <router-link
                    to="/solucoes"
                    class=""
                    >Soluções</router-link
                  >
              </b-nav-item>
        
        <!-- <b-nav-item>
            <b-nav-item-dropdown class="text-light" text="Serviços" right>
                <b-dropdown-item> 
                  <router-link to="/Boletos" class=" text-primary" >Boletos </router-link>
                </b-dropdown-item>
                <b-dropdown-item> 
                  <router-link to="/quemsomos" class=" text-primary" >Carnê</router-link>
                </b-dropdown-item>
                <b-dropdown-item> 
                  <router-link to="/Boletos" class=" text-primary" >Ecommerce </router-link>
                </b-dropdown-item>
                <b-dropdown-item> 
                  <router-link to="/Boletos" class=" text-primary" >Folha de Pagamento </router-link>
                </b-dropdown-item>
                <b-dropdown-item> 
                  <router-link to="/Boletos" class=" text-primary" >Pix deposito </router-link>
                </b-dropdown-item>
                <b-dropdown-item> 
                  <router-link to="/Boletos" class=" text-primary" >Split de Pagamentos </router-link>
                </b-dropdown-item>
                <b-dropdown-item> 
                  <router-link to="/Boletos" class=" text-primary" >Sistema de Pagamentos </router-link>
                </b-dropdown-item>    
            </b-nav-item-dropdown>
       </b-nav-item> -->

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
        
                  <a href="https://app.imobanco.com.br/login" class="btn btn-success text-light">Login</a>
                  <a href="https://app.imobanco.com.br/register" class="btn text-light">Abra sua conta</a>
                  
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
 
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
        };
      });    
    });
  },
};
</script>
<style></style>

