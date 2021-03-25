<template>
    <section class="contadigital">
        <b-container>
            <b-row class="container">
                <b-col cols="12" md="6" lg="4" class="text-left mt-5 pt-4">
                    <h2>Conta Digital</h2>
                    <h3>Feita para o <mark>sucesso</mark> do seu negócio.</h3>
                    <v-btn class="btn btn-primary btn-sm">Cadastre-se</v-btn>
                </b-col>
                <b-col lg="2" class=" mt-5">
                </b-col>                
                <b-col cols="12" md="6" lg="6" class="text-right mt-3">
                    <img src="../../static/image/tela-index-slide.png" alt class="img-fluid" />
                </b-col>
            </b-row>

        <!-- Retirar aqui e criar uma section -->
            <div class="row container" style="padding-top:100px">
                 <b-col cols="12" md="6" lg="6" class="text-left mt-2">
                    <h2>Foque no que importa;</h2>
                    <p>Fechar novos e bons <br> negócios</p>
                </b-col>
                <b-col lg="1"></b-col>
                 <b-col cols="12" md="6" lg="5" class="text-left mt-2">
                <iframe width="100%" height="270" src="https://www.youtube.com/embed/mRdpOnCGR7E?start=3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </b-col> 
            </div>
        </b-container>
    </section>
</template>
<style lang="scss" scoped>
    section{
        padding: 50px 0px;

        mark{
            background-color: #38b4ca;
            border-radius: 8px;
            color:white;
        }

        h2,h3{
            color:#003F69;
            font-weight: bolder;
        }
        p{
            color:#38b4ca;
            font-size: 20px;
        }

        .btn-primary{
            background-color: #003F69;
        }

        iframe{
            border-radius:10px;
        }
    }
</style>