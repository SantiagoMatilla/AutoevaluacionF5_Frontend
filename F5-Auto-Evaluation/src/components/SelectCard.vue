<script setup>
import { ref } from "vue";
// import { useRouter } from "vue-router";

const bootcamps = ['DA', 'FEM', 'Unique', 'Rural Camp']; 
const selectedBootcamp = ref(null) ;
// const router = useRouter();

const goToBootcamp = () => {

  if (selectedBootcamp.value !== null) {
    
    console.log(`Bootcamp seleccionado: ${selectedBootcamp.value}`);

   
  } else {
    alert('Por favor, selecciona un bootcamp antes de acceder.');
  }
};
</script>

<template>

    <v-sheet 
        :height="400" :width="300" border color=#FF4702 rounded class="card">

        <div>
            <h3>Bienvenid@s!</h3>
        </div>

        <v-divider
        :thickness="2" class="border-opacity-75" color=#FFFFFF width="90%"
        ></v-divider>


        <v-card-text>
            Para continuar, selecciona el bootcamp al que perteneces.
        </v-card-text>

        <v-spacer></v-spacer>

        <v-select
            label="Bootcamp"
            :items="bootcamps"
            v-model="selectedBootcamp"          
            variant="underlined"
            class="selector"
        ></v-select>

        <v-spacer></v-spacer>
        <router-link to="/">
            <v-btn class="button" @click="goToBootcamp" to="" >
            Acceder
        </v-btn>
        </router-link>
        
    </v-sheet>
        
</template>

<style scoped>
.selector {
    width:85% ;
    margin: 10px;
}

h3{
    padding: 15px;
    text-align: center;
}
.button{
    margin-top:5%;
    margin-left:75px;
}
</style>
