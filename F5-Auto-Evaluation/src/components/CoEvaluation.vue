<script setup>
import ProgressCard from '@/components/ProgressCard.vue';
</script>

<template>
    <v-card class="d-flex align-center flex-column evalContainer" color="#FF4702">
        <template v-slot:title>
            <h2 style="font-size: 30px;">CO-EVALUACIONES</h2>
        </template>
        <ProgressCard :ProgressCard="'1ª Evaluación'"></ProgressCard>
        <ProgressCard :ProgressCard="'2ª Evaluación'"></ProgressCard>
        <ProgressCard :ProgressCard="'3ª Evaluación'"></ProgressCard>
        <ProgressCard :ProgressCard="'4ª Evaluación'"></ProgressCard>
    </v-card>
</template>

<style scoped>
.evalContainer {
    width: 50%;
}

h2 {
    margin: 10% 0;
    color: rgb(250, 248, 248);
}
</style>
    

