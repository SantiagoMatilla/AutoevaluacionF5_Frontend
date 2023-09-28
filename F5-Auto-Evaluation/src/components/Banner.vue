<script setup>
import Service from '../services/dataService';

const data = Service;

const stack = data.getAll().stack;

function chooseCoder() {
  const chosenCoder = document.getElementById("coderSelection").value;
  document.getElementById("coderName").innerHTML = chosenCoder;
}


</script>

<template>
  <section class="banner">
    <div class="columnDiv" id="coderDiv">
      <v-select id="coderSelection" label="Coder" :items="['Diego Córdoba', 'Manuela Grajales', 'María Villaverde']"
        bg-color="white" density="compact">
      </v-select>
      <v-btn @click="chooseCoder">Evaluar</v-btn>
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
    <article>
      <h2 id="coderName"></h2>
    </article>
    <v-sheet class="mx-auto">
      <v-slide-group show-arrows>
        <v-slide-group-item v-for="n in 4" :key="n" v-slot="{ isSelected, toggle }">
          <v-btn class="ma-2" rounded :color="isSelected ? '#0F1523' : undefined" @click="toggle">
            {{ n }}ª Evaluación
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </section>
</template>

<style scoped>

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

#coderDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
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

article {
  height: 24px;
}

</style>