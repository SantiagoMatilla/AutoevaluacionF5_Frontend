<script setup>
import { RouterView } from 'vue-router'
import FrameworkBanner from './components/FrameworkBanner.vue';
import ContentCard from './components/ContentCard.vue';

</script>

<template>
  <body>    
    <FrameworkBanner />
    <ContentCard />
    <RouterView />
  </body>
</template>

<style scoped>
body {
  height: 100vh;
  /* background: linear-gradient(to bottom, white, #0F1523);  */
}

</style>
