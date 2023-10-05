<script setup>
import Criteria from './Criteria.vue';
// import { ref, onMounted } from 'vue';



// const contents = ref([]);
// const skills = ref([]);

// const getContent = onMounted(async () => {
//     try {
//         const response = await dataService.getAll("contents");
//         console.log("respose:  ",response);
//         contents.value = response.data.map(content => {
//             return content;
//         });
//     } catch (error) {
//         console.error('Error fetching contents:', error);
//     }
// });
// const getSkill = onMounted(async () => {
//     try {
//         const response = await dataService.getAll("skills");
//         console.log("respose:  ",response);
//         skills.value = response.data.map(skill => {
//             return skill;
//         });
//     } catch (error) {
//         console.error('Error fetching skills:', error);
//     }
// });

</script>

<template>
    <div>
        <!-- <h2 v-for="(skill, index) in skills" :key="index">  
            {{ skill.name }}
        </h2> -->
        <v-card color="#0F1523" width="90%" class="card">
            <div class="d-flex flex-no-wrap justify-space-around align-center">
                 <!-- <div class="col-md-4 mb-4" v-for="(content, index) in contents" :key="index"> -->
                <v-card-title class="text-h5">
                    <!-- {{ content.name }} -->
                    HTML
                </v-card-title>
                <!-- </div> -->
                <Criteria />
            </div>
        </v-card>
    </div>
</template>

<style scoped>
.card {
    margin: 2vh auto 0;
}

h2 {
    text-align: center;
}
</style>