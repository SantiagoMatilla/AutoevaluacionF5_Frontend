<script >
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
  };
  console.log("prueba")
  onMounted(fetchSkills);




</script>

<template>

<div>
      <v-card class="mx-auto" max-width="344" v-for="skill in skills" :key="skill.id">
        <v-img :src="skill.photo" class="card-img-top" :alt="skill.name" height="200px" contain></v-img>
  
        <v-card-title>{{ skill.name }}</v-card-title>
        <v-divider :thickness="3" color="warning"></v-divider>
        <br>
        <v-card-subtitle>{{ skill.stack }}</v-card-subtitle>
  
        <v-card-actions>
          <v-btn class="accessButton" variant="text">
            Acceder
          </v-btn>
        </v-card-actions>
      </v-card>
      <div v-for="skill in skills" :key="skill.id" >{{ skill.name }}</div>
    </div>


</template>


<style scoped>
  .accessButton {
    color: white;
  }
  </style>
  
  