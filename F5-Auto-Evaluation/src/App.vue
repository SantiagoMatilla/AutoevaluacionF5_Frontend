<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue';
import BootcampPage from './components/BootcampPage.vue';
</script>

<template>
  <NavbarComponent />
  <BootcampPage />

  <RouterView />
</template>

<style scoped>
</style>
