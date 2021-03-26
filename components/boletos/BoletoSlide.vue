<template>
  <section class="pt-5 pb-5">
    <b-container>
      <b-row>
        <b-col cols="12" md="6" lg="7" class="pt-5">
          <h2 class="text-imobanco text-title title-font">
            A melhor solução do <br> mercado
            <mark>Brasileiro</mark>
          </h2>
          <h4 class="text-imobanco text-title">
            Bancos:
            <span class="text-tachado text-success text-title">R$ 6,70</span>
          </h4>
          <h4 class="text-imobanco text-title">
            Mercado:
            <span class="text-tachado text-success text-title">R$ 3,70</span>
          </h4>
          <h4 class="text-imobanco text-title">
            Imobanco *a partir de:
            <span class="text-tachado text-success text-title">R$ 1,50</span>
          </h4>
          <span
            class="text-imobanco text-content"
          >(Pague por boleto somente quando seu cliente pagar)</span>
          <br />
          <v-btn class="btn bg-primary btn-sm mt-3">Contratar</v-btn>
        </b-col>
  
        <b-col cols="12" md="6" lg="5">
          <img src="../../static/image/icon/g22048.png" alt class="img-fluid" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "FraseBoleto"
};
</script>

<style lang="scss" scoped></style>
