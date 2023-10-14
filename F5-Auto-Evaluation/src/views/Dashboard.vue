<script setup>
import Navbar from '../components/Navbar.vue'
import SelfEvaluation from '../components/SelfEvaluation.vue'
import CoEvaluation from '../components/CoEvaluation.vue'
</script>

<template>
  <section>
    <Navbar />
    <div class="container">
      <SelfEvaluation />
      <CoEvaluation />
    </div>
  </section>
</template>
  
<style scoped>
section {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
}
</style>
  