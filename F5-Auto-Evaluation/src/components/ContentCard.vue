<script setup>
import Service from '../services/dataService';
import Knowledge from './Knowledge.vue';

const data = Service;

const content = data.getAll().content;
const skill = data.getAll().skill;

</script>

<template>
    <v-card color="#0F1523" width="64%" class="card">
        <div class="d-flex flex-no-wrap justify-space-around align-center">
            <v-card-title class="text-h5">
                {{ content }}
            </v-card-title>
            <Knowledge />
        </div>
    </v-card>
</template>

<style scoped>
.card {
    margin: 2vh auto 0;
}
</style>