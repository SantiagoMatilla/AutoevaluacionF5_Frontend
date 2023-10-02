<script setup>
 import { RouterView } from 'vue-router'
// import Navbar from './components/Navbar.vue';
// import Bootcamp from './views/Bootcamp.vue'
// import ContentCard from './components/ContentCard.vue';
// import Banner from './components/Banner.vue';
// import SkillsCard from './components/SkillsCard.vue';
import StakCard from '../views/StakCard.vue'
//import SkillsCard from './components/SkillsCard.vue';
</script>

<template>
  <div>
    <StakCard/>
    <!-- <SkillsCard/> -->
  <!-- <Navbar/> -->
  <!-- <Bootcamp/> -->
  <!-- <SkillsCard/> -->
  <!-- <Banner/> -->
  <!-- <ContentCard/> -->
   <RouterView /> 
  </div>
</template>

<style scoped>

</style>
