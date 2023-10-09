<script setup>
import Navbar from '../components/Navbar.vue';
import ContentCard from '../components/ContentCard.vue'
import stackDataService from '../services/stackDataService';
import skillDataService from '../services/skillDataService';
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const stack = ref();
const skills = ref();

function chooseCoder() {
    const chosenCoder = document.getElementById("coderSelection").value;
    document.getElementById("coderName").innerHTML = chosenCoder;
}

function getStack(id) {
    stackDataService.getStackById(id).then((response) => {
        stack.value = response.data;
    });
}

function getSkills() {
    skillDataService.getAllSkills()
        .then((response) => {
            skills.value = response.data;
        });
}

onBeforeMount(() => {
    getStack(route.params.id);
    getSkills();
});

</script>

<template>
    <Navbar />
    <section class="banner">
        <div class="columnDiv" id="coderDiv">
            <v-select id="coderSelection" label="Coder" :items="['Diego Córdoba', 'Manuela Grajales', 'María Villaverde']"
                bg-color="white" density="compact">
            </v-select>
            <v-btn @click="chooseCoder">Evaluar</v-btn>
        </div>
        <div class="columnDiv">
            <h1>
                {{ stack.name }}
            </h1>
        </div>
        <div class="columnDiv">
            <v-progress-circular color="white" bg-color="blue-grey-lighten-3" :size="100" :model-value="25" :width="12">

            </v-progress-circular>
        </div>
    </section>
    <section class="evaluationDetails">
        <article>
            <h2 id="coderName"></h2>
        </article>
        <v-sheet class="mx-auto">
            <v-slide-group show-arrows>
                <v-slide-group-item v-for="n in 4" :key="n" v-slot="{ isSelected, toggle }">
                    <v-btn class="ma-2" rounded :color="isSelected ? '#0F1523' : undefined" @click="toggle">
                        {{ n }}ª Evaluación
                    </v-btn>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </section>

    <ul>
        <li v-for="(skill, index) in skills" :key="index">
            <h2>{{ skill.name }}</h2>
            <!-- <ContentCard /> -->
        </li>
    </ul>
</template>

<style scoped>
.banner {
    background-color: var(--primaryColor);
    height: 20vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.columnDiv {
    width: 33vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0% 5%;
}

#coderDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    text-align: center;
    color: white;
    margin-top: 2vh;
    font-size: 2rem;
}

.evaluationDetails {
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

article {
    height: 24px;
}

h2 {
    text-align: center;
}
</style>