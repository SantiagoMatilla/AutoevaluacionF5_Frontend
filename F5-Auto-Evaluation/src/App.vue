<script setup>
import { RouterView } from 'vue-router'

import NavbarComponent from './components/NavbarComponent.vue';
import BootcampPage from './components/BootcampPage.vue';

import SkillsCard from './components/SkillsCard.vue';

</script>

<template>
  <NavbarComponent />
  <BootcampPage />

  <RouterView />
  <SkillsCard/>
</template>

<style scoped>
</style>
