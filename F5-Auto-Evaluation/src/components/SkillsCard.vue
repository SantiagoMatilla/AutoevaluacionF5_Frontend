<script setup>
import { ref, onMounted } from 'vue';


const skills = ref ([]);


const fetchSkills = async () => {
    try {
        const response = await fetch("http://localhost:8090/api/");
        if (response.ok) {
      skills.value = await response.json();
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchSkills);
</script>


<template>
  <v-card class="mx-auto" max-width="344" v-for="skills in skills" :key="skills.id">
    >
    <v-img :src="skills.photo" class="card-img-top" :alt="skills.name" height="200px" cover></v-img>

    <v-card-title>{{ skills.name }}

    </v-card-title>
    <v-divider :thickness="3" color="warning"></v-divider>
    <br>
    <v-card-subtitle>
      {{ skills.stack }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn class="accessButton" variant="text">
        Acceder
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.accessButton {
  color: white;
  background-color: var(--primaryColor);
}
</style>
 