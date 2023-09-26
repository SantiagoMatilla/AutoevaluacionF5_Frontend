<script setup>
import example from "../services/example.json"
import { ref } from "vue";
const stack = ref();

fetch (example)
.then((response) => {
    stack.value=response.data;
})
    
    
</script>

<template>
    <section class="title">
        <h1>Front End</h1>
        <!-- <h1> {{stack.framework}}</h1> -->
        <v-select class="coderSelection" label="Coder"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" 
        bg-color="white"
        density="compact"
        >
        </v-select>
    </section>
</template>

<style scoped>
.title {
    background-color: var(--primaryColor);
    height: 12vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h1 {
    text-align: center;
    color: white;
    margin-top: 2vh;
    font-size: 2rem;
}

.coderSelection {
    margin: auto;
    width: 20%;
    color: white;
}
</style>