<script setup>

 import SelfEvaluation from '../components/SelfEvaluation.vue'
  import CoEvaluation from '../components/CoEvaluation.vue'

</script>


<template>
    <div class="container">
        <SelfEvaluation/>   
        <CoEvaluation/>
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
  
  /* .container::before {
    content: "";
    flex: 1;
   
  }
  
  .container::after {
    content: "";
    flex: 1;
    
  } */
  </style>
  