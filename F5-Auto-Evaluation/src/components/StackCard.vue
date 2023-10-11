<script setup>
import stackDataService from '../services/stackDataService';
import { ref, onBeforeMount } from 'vue';


const stack = ref([]);

const fetchStack = async () => {
  try {
    var response = await stackDataService.getAllStacks();
    stack.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onBeforeMount(fetchStack);

</script> 



  
  
<template>
   <div v-for="eachStack in stack" :key="eachStack.id">
    <v-card class="mx-auto" max-width="344">
      <v-img :src="eachStack.image" />

      <v-card-title class="mx-auto" max-width="344">{{ eachStack.name }} </v-card-title>
      <v-divider :thickness="3" color="warning"></v-divider>
      <br>
      <v-card-skills>

      </v-card-skills>

      <v-card-actions>
        <v-btn class="accessButton" variant="text" @click="nombreBoton">
          Acceder
        </v-btn>
      </v-card-actions>
    </v-card>

  </div> 
  </template>

 
  
   
  
<style scoped>
.accessButton {
  color: rgb(247, 247, 247);
  background-color: rgb(248, 74, 16);
}


</style> 
  
  