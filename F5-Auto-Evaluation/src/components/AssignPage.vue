<script setup>
   const bootcamps = ['DA', 'FEM', 'Unique', 'Rural Camp']; 
</script>
<template>
   <v-container fluid class = "container">
    <h3 class="title">Selecciona el bootcamp a editar</h3>
        <!-- <v-card> -->
            <v-col cols="12">
              <v-combobox class="nombre_bootcamp"
                v-model="value"
                :items="bootcamps"
                density="comfortable"
                label="Nombre de bootcamp"
              >
            </v-combobox>
              <v-spacer></v-spacer>
              <!-- :to="{name:'Coders'}" -->
              <!-- <router-link > -->
                <v-btn>Asignar coders</v-btn>
              <!-- </router-link> -->
            <v-btn>Editar contenidos</v-btn>
            </v-col>
        <!-- </v-card> -->
        <v-card>
          <!-- <v-col class="buttons" d-flex justify-space-between>
            <v-btn>Asignar coders</v-btn>
            <v-btn>Editar contenidos</v-btn>
          </v-col> -->
        </v-card>
        
  </v-container>
</template>


<style scoped>
.container{
  background-color: #FF4702;
  height: 100vh;
  /* height: 90vh; */
    margin: 0;
    padding: 0;
    background-size: cover;
    background-repeat: no-repeat;
    
}
.title{
  color: white;
  display: flex;
  align-items: center;
}
.buttons {
  margin : 100px;
  padding: 0;
}
.nombre_bootcamp{
  margin-top: 30%;
  background-color: white;
  /* display: flex;
  align-items: center; */
}

</style>