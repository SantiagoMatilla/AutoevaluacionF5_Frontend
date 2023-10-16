<script setup>
const criteriaArray = ["Investigar", "Recordar", "Comprender", "Aplicar", "Analizar", "Crear", "Evaluar"];
</script>

<template>
  <v-item-group multiple>
    <v-container>
      <v-row>
        <v-col v-for="n in 7" :key="n">
          <v-item v-slot="{ isSelected, toggle }">
            <v-card :color="isSelected ? 'success' : '#FF4702'" class="d-flex align-center" dark height="80" width="120"
              @click="toggle">
              <v-scroll-y-transition>
                <div class="text-h7  flex-grow-1 text-center">
                  {{ isSelected ? criteriaArray[n - 1] : criteriaArray[n - 1] }}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>


<style scoped></style>