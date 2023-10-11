<script setup>
// const bootcamps = ['DA', 'FEM', 'Rural Camp', 'UniqueCamp' ]
</script>
<template>
  <v-container fluid class="container">
    <div class="content">
      <h3>Selecciona el bootcamp a editar</h3>
      <v-select
        bg-color="white"
        label="Nombre de bootcamp"
        v-model="selectedBootcamp"
        class="select_bootcamp"
      >
        <option v-for="bootcamp in bootcamps" :key="bootcamp.id">
          {{ bootcamp }}
        </option>
      </v-select>
      <div class="buttons_box">
        <v-button
          class="buttons"
          @click="$router.push('/assign-coders')"
          type="submit"
          name="AssignCoder"
          id=""
        >
          Asignar coders
        </v-button>
        <!-- <v-button class="buttons" :to="{name:'CoderAssign'}">Asignar coders</v-button> -->
        <v-button
          class="buttons"
          @click="$router.push('/assign-stacks')"
          type="submit"
          name="AssignStacks"
        >
          Editar contenido
        </v-button>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.container {
  background-color: #ff4702;
  height: 100vh;
  padding: 5%;
  background-size: cover;
  background-repeat: no-repeat;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

h3 {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
}

.select_bootcamp {
  width: 60%;
  margin-left: 20%;
}

.buttons_box {
  width: inherit;
  display: flex;
  flex-direction: row;
  /* justify-content:center ; */
  justify-content: space-evenly;
}

.buttons {
  background-color: white;
  border-radius: 15px;

  margin: 20px;
  padding: 10px;
}

/* .bootcamp{
  margin-top: 30%;

  background-color: white;
} */
</style>
