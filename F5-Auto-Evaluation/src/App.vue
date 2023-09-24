<script setup>
import { RouterView } from 'vue-router'
import FrameworkBanner from './components/FrameworkBanner.vue';
import Knowledge from './components/Knowledge.vue';
import ContentCard from './components/ContentCard.vue';

</script>

<template>
  <FrameworkBanner />
  <Knowledge />
  <ContentCard />
  <RouterView />
</template>

<style scoped></style>
