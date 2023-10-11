<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
// import ContentCard from './components/ContentCard.vue';
// import Bootcamp from './views/Bootcamp.vue'
// import SkillsCard from './components/SkillsCard.vue';




</script>

<template>
  <div>
  <Navbar/>

  <!-- <Bootcamp/> -->
  <!-- <SkillsCard/> -->
  <!-- <ContentCard/> -->

  <RouterView />
  </div>
</template>

<style scoped>

</style>
