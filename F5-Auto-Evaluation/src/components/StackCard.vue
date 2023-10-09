 <script setup>
//  import stackDataService from '../services/stackDataService';
// import { ref, onMounted } from 'vue';
  
// const stack = ref([]);



// const fetchStack = async () => {
//   try {
//     const response = await stackDataService.getAll("stack");
//     console.log("respose:  ",response);
//     stack.value = response.data.map(stack =>{
//       return stack;
//     } );
   
//   } catch (error) {
//     console.error(error);
//   }
// };




</script>

  
  
<template>
    <div>
      <v-card class="mx-auto" max-width="344" >
        <v-img class="card-img-top"  height="200px" contain></v-img> 
  
        <v-card-title> pepin</v-card-title>
        <v-divider :thickness="3" color="warning"></v-divider>
        <br>
        <v-card-subtitle   
  >
peppe
    </v-card-subtitle>  
  
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
  
   