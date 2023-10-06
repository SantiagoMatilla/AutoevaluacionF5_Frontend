<script setup>
import ProgressCard from '@/components/ProgressCard.vue';


</script>

<template>
    <v-card  class="d-flex align-center flex-column prueba"   color="#FF4702">

        <template v-slot:title  >
            <h2 style="font-size: 30px;">CO-EVALUACIONES</h2>
        </template>

        <ProgressCard   :cardColor="white" :ProgressCard="'1ª Evaluación'"></ProgressCard>
        <ProgressCard :ProgressCard="'2ª Evaluación'"></ProgressCard>
        <ProgressCard :ProgressCard="'3ª Evaluación'"></ProgressCard>
        <ProgressCard :ProgressCard="'4ª Evaluación'"></ProgressCard>


    </v-card>

    
</template>

<style scoped>
.prueba{
    width: 50%;    
}

h2{
    margin: 10% 0;
}
</style>
    

