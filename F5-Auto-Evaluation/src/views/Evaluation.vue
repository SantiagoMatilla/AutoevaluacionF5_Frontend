<script setup>
import Navbar from '../components/Navbar.vue';
import ContentCard from '../components/ContentCard.vue'
import stackDataService from '../services/stackDataService';
import skillDataService from '../services/skillDataService';
import contentDataService from '../services/contentDataService';
import coders from '../services/registrationDataService';
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const users = ref([]);
const selectedUser = ref(null);
const selectedCoder = ref("Choose Coder")
const stack = ref();
const skills = ref();
const contents = ref([]);

// retreive user data from database
function chooseCoder() {
    coders.getAll('users').then((response) => {

        users.value = response.data;

    }).catch(error => {
        console.error("Coder not found!", error);
    });
}

// bind the selected coder to the artice h2 section
async function assessUser() {
    if (selectedCoder.value !== "Choose Coder") {

        selectedUser.value = users.value.find(user => user.id === selectedCoder.value);
    } else {
        alert("Please select a coder before assessing.");
    }
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

function getContents() {
    contentDataService.getAllContents()
        .then((response) => {
            contents.value = response.data;
        });
}

onBeforeMount(() => {
    chooseCoder();
    getStack(router.params.id);
    getSkills();
    getContents();
});

</script>
<template>
    <Navbar />
    <section class="banner">
        <div class="columnDiv" id="coderDiv">

            <select id="firtsname" name="firtsname" class="form-control" v-model="selectedCoder" required>
                <option disabled>Choose Coder</option>
                <option v-for="user in users" :key="user.id" :value="user.id">{{ user.firstName + " " + user.lastName
                }}</option>
            </select> <br>
            <button @click="assessUser">Assess</button>
        </div>
        <div class="columnDiv">
            <h1 v-if="stack">{{ stack.name }}</h1>
            <div v-else>Loading...</div>
        </div>
        <div class="columnDiv">
            <v-progress-circular color="white" bg-color="blue-grey-lighten-3" :size="100" :model-value="25" :width="12">

            </v-progress-circular>
        </div>
    </section>
    <section class="evaluationDetails">
        <article>
            <h2 id="coderName">
                {{ selectedUser ? "Selected Coder: " + selectedUser.firstName + " " + selectedUser.lastName :'' }}
            </h2>
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
    <!-- eslint-disable-next-line -->
    <ul>
        <li v-for="(skill, index) in skills" :key="index">
            <h2>{{ skill.name }}</h2>
            <ul>
                <!-- eslint-disable-next-line -->
                <template v-for="(content, index) in contents" :key="index">
                    <li v-if="content.skill && skill.id === content.skill.id">
                        <ContentCard :content="content" />
                    </li>
                </template>
            </ul>
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

.coderSelection {
    width: 200px
}
</style>

