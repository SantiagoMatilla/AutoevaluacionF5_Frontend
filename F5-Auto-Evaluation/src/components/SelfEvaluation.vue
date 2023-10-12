<script setup>
import ProgressCard from '@/components/ProgressCard.vue';


</script>

<template>
     <v-card class="d-flex align-center flex-column prueba" > 

        <template v-slot:title  >
            <h2 style="font-size: 30px;">AUTOEVALUACIONES</h2>
        </template>

        <ProgressCard :ProgressCard="'1ª Evaluación'" :cardColor="green"></ProgressCard>
        <ProgressCard :ProgressCard="'2ª Evaluación'"></ProgressCard>
        <ProgressCard :ProgressCard="'3ª Evaluación'"></ProgressCard>
        <ProgressCard :ProgressCard="'4ª Evaluación'"></ProgressCard>


     </v-card> 

    
</template>

<style scoped >
.prueba{
    width: 50%;
    background-color:#0F1523 ;
}

h2{
    margin: 10% 0;
    color:rgb(244, 247, 249)
}

.backgroundColor {
    background-color: pink;
}

</style>
    

