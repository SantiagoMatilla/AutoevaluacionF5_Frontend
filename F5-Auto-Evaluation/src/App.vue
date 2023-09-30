<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Bootcamp from './views/Bootcamp.vue'
// import ContentCard from './components/ContentCard.vue';
import Banner from './components/Banner.vue';
import SkillsCard from './components/SkillsCard.vue';
import Test2 from './components/Test2.vue'


</script>

<template>
  <div>
  <Navbar/>
  <Bootcamp/>
  <SkillsCard/>
  <Banner/>
  <!-- <ContentCard/> -->
  <Test2 />
  <RouterView />
  </div>
</template>

<style scoped>

</style>
