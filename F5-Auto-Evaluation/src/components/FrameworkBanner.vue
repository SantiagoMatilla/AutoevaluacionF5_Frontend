<script setup>
import Service from '../services/dataService';

const data = Service;

const content = data.getAll().content;
const skill = data.getAll().skill;
const stack = data.getAll().stack;

const coder = document.getElementById("coderSelection").value;


</script>

<template>
  <section class="banner">
    <div class="columnDiv">
      <v-select id="coderSelection" label="Coder" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        bg-color="white" density="compact">
      </v-select>
    </div>
    <div class="columnDiv">
      <h1>{{ stack }}</h1>
    </div>
    <div class="columnDiv">
      <v-progress-circular color="white" bg-color="blue-grey-lighten-3" :size="100" :model-value="25" :width="12">

      </v-progress-circular>
    </div>
  </section>
  <section class="evaluationDetails">
    <h2>{{ name + " " + surname }}</h2>

    <v-sheet class="mx-auto">
      <v-slide-group show-arrows>
        <v-slide-group-item v-for="n in 4" :key="n" v-slot="{ isSelected, toggle }">
          <v-btn class="ma-2" rounded :color="isSelected ? 'primary' : undefined" @click="toggle">
            {{ n }}ª Evaluación
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>

  </section>
</template>

<style scoped>
/* ------------------------ */
/* Borrar tras añadir navbar */

.banner {
  margin-top: 150px;
}

/* ------------------------ */
/* ------------------------ */
/* ------------------------ */


.banner {
  background-color: var(--primaryColor);
  height: 20vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.columnDiv {
  width: 33vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0% 5%;
}

h1 {
  text-align: center;
  color: white;
  margin-top: 2vh;
  font-size: 2rem;
}

.evaluationDetails {
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>