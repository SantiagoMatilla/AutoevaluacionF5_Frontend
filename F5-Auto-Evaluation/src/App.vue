<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

// import ContentCard from './components/ContentCard.vue';
// import Bootcamp from './views/Bootcamp.vue'
// import Banner from '../components/Banner.vue';
// import ContentCard from './components/ContentCard.vue';
// import Bootcamp from './views/Bootcamp.vue'
// import Banner from './components/Banner.vue';
// import SkillsCard from './components/SkillsCard.vue';
// import SelfEvaluation from './components/SelfEvaluation.vue'
// import CoEvaluation from './components/CoEvaluation.vue'
</script>

<template>

  <body>

    <Navbar />

    <RouterView />
  </body>

</template>

<style scoped>
body {
  width: 100vw;
  height: 100vh;
}
</style>
