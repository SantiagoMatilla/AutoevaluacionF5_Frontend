 <script setup>
  import axios from '../http-common';
import { ref, onMounted } from 'vue';
  
  const skills = ref([]);
  
  const fetchSkills = async () => {
    try {
      const response = await axios.get("/skills");
    //   if (response.ok) {
        skills.value = await response.data;
        console.log(response.data);
    //   }
    } catch (error) {
      console.error(error);
    }
    console.log("prueba")
  onMounted(fetchSkills);
  };
  // console.log("prueba")
  // onMounted(fetchSkills);
  </script>
  
<template>
    <div>
      <v-card class="mx-auto" max-width="344" v-for="skill in skills" :key="skill.id">
        <v-img :src="skill.photo" class="card-img-top" :alt="skill.name" height="200px" contain></v-img> 
  
        <v-card-title>{{ skill.stack }}</v-card-title>
        <v-divider :thickness="3" color="warning"></v-divider>
        <br>
        <v-card-subtitle v-for="skill in skills"  
  :key="skill.id">
    uyuy{{skill }}
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
  
   