<script setup>
import { ref } from 'vue';
import axios from 'axios';
const criteriaList = ref([
  { name: 'Investigar', value: false },
  { name: 'Recordar', value: false },
  { name: 'Comprender', value: false },
  { name: 'Aplicar', value: false },
  { name: 'Analizar', value: false },
  { name: 'Crear', value: false },
  { name: 'Evaluar', value: false }
]);

// const doEvaluation = (criteria) => {
//   const newStatus = !criteria.value; // Use criteria.value instead of criteria.firstCriteria
//   axios.put(`http://localhost:8080/api/evaluation/${criteria.id}?criteriaName=${criteria.name}&newState=${newStatus}`)
//     .then(() => {
//       // Handle success
//     })
//     .catch((error) => {
//       console.error('An error occurred:', error);
//     });
// };


</script>

<template>
  <v-item-group multiple>
    <v-container>
      <v-row>
        <v-col v-for="criteria in criteriaList" :key="criteria.name">
          <v-item v-slot="{ isSelected, toggle }">
            <v-card :color="isSelected ? 'success' : '#FF4702'" class="d-flex align-center" dark height="80" width="120"
            @click="toggle">
              <v-scroll-y-transition>
                <div class="text-h7 flex-grow-1 text-center">
                  {{ isSelected ? criteria.name : criteria.name }}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>
