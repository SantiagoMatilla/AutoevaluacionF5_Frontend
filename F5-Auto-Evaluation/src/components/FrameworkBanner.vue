<script setup>
import example from "../services/example.json"
import { ref } from "vue";
const stack = ref();

fetch(example)
    .then((response) => {
        stack.value = response.data;
    })


</script>

<template>
    <section class="title">
        <div class="coderContainer">
            <v-select class="coderSelection" label="Coder"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" bg-color="white"
                density="compact" width="300">
            </v-select>
        </div>
        <h1>Front End</h1>
        <v-progress-circular   color="success"
        bg-color="blue-grey-lighten-3"
        model-value="20" :size="128" :width="12"></v-progress-circular>
    </section>
</template>

<style scoped>
.title {
    background-color: var(--primaryColor);
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

h1 {
    text-align: center;
    color: white;
    margin-top: 2vh;
    font-size: 2rem;
}

.coderSelection {
    color: white;
}

.coderContainer {
    width: 15%;
}
</style>