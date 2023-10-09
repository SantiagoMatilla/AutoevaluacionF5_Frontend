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

        <div>
            <v-divider
            :thickness="2" class="border-opacity-75" color=#FFFFFF width="90%"
            ></v-divider>
        </div>

        <div>
            <v-card-text>
            Para continuar, selecciona el bootcamp al que perteneces.
            </v-card-text>
        </div>

        <!-- <v-spacer></v-spacer> -->
        <div>
            <v-select
                    label="Bootcamp"
                    :items="bootcamps"
                    class="selector"
                    bg-color="white"  
                >
            </v-select>
        </div>
        

        <!-- <v-spacer></v-spacer> -->
        <!-- <router-link to="/"> -->
        <!-- <v-btn class="button" :to="{name: 'Bootcamp'}" >    Dependerá de a dónde va           -->
        <router-link to="/teacher-view">
            <v-btn class="button" :to="{name: 'Teacher'}" >
            Acceder
            </v-btn>
        </router-link>
        

    </v-sheet>
        
</template>

<style scoped>
*{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}
.card {
    
}
.selector {
    width:80% ;
    margin: 10px;
    text-align: center;
}

/* .selector_div {
    border-radius: 25px;
} */

h3{
    padding: 15px;
    text-align: center;
}
.button{
    margin-top:15%;
    /* margin-left:30%; */
}
</style>
