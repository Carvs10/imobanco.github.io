<template>
  <div>
    <ContaSlide />
    <ContaBasica />
    <ContaCustodia />
  </div>
</template>

<script>
import ContaSlide from "@/components/conta/ContaSlide.vue";
import ContaBasica from "@/components/conta/ContaBasica.vue";
import ContaCustodia from "@/components/conta/ContaCustodia.vue";

export default {
  components: {
    ContaSlide,
    ContaBasica,
    ContaCustodia,
  },
};
</script>

<style lang="scss" scoped></style>
