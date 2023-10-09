<<<<<<< HEAD
<script  >
  import { RouterView } from 'vue-router'
 import Navbar from './components/Navbar.vue';












</script>

<template>
  <div>
    
   <Navbar/> 
 
  
   
    <RouterView />  
  </div>
=======
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
    <!-- <SelfEvaluation/> 
  <CoEvaluation/> -->
    <!-- <Bootcamp/> -->
    <!-- <SkillsCard/> -->
    <!-- <Banner/> -->
    <!-- <ContentCard/> -->
    <RouterView />
  </body>
>>>>>>> df494184c1f3aa5663d80006f85094ccbd45c60f
</template>

<style scoped>
body {
  width: 100vw;
  height: 100vh;
}
</style>
