<script setup>
import Navbar from '../components/Navbar.vue'
import SelfEvaluation from '../components/SelfEvaluation.vue'
import CoEvaluation from '../components/CoEvaluation.vue'
</script>

<template>
  <Navbar />
  <div class="container">
    <SelfEvaluation />
    <CoEvaluation />
  </div>
</template>
  
<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
}
</style>
  