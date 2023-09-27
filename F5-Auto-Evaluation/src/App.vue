<script setup>
import { RouterView } from 'vue-router'
import Evaluation from './views/Evaluation.vue';

</script>

<template>
  <body>
    <Evaluation />
    <RouterView />
  </body>
</template>

<style scoped>
body {
  height: 100vh;
  /* background: linear-gradient(to bottom, white, #0F1523);  */
}
</style>
