<script setup>
// import Criteria from '../components/Criteria.vue';
import { ref, onMounted } from 'vue';
import dataService from '../services/dataService';

const skillsWithContents = ref([]);


const getSkillsAndContents = async () => {
    try {
        const skillResponse = await dataService.getAll("skills");

        const contentsResponse = await dataService.getAll("contents");
        // contents.value = contentResponse.data.map(content => content);

        skillsWithContents.value = skillResponse.data.map(skill =>{
            const skillContents = contentsResponse.data.filter(content => content.skillId === skill.id);
            return {
                name: skill.name,
                contents: skillContents,
            };
        });

    } catch (error) {
        console.error('Error fetching contents:', error);
    }
};
onMounted(getSkillsAndContents);
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

// const skillsWithContents = {
//     data:{
//         skills: [
//             { id: 1, name: 'Front End', content: [
//                 { id :1 , name:'HTML'}, { id : 2, name: 'CSS'}, {id : 3, name: 'Javascript'}, { id:4, name: 'Content 4'}
//             ]},
//             { id:2, name:'Backend', content: [
//                 {id: 1, name:'OOP'}, { id: 2, name: 'JAVA'},{id:3, name: 'Spring boot'}, { id:4, name: 'Spring Security'}
                
//             ] }
//         ]
//     }
// }
</script>

<template>
    <div>
        <h2 v-for="skill in skillsWithContents" :key="skill.id">  
            {{ skill.name }}
        </h2>
        <v-card color="#0F1523" width="64%" class="card">
            <div class="d-flex flex-no-wrap justify-space-around align-center">
                 <div class="col-md-4 mb-4" v-for="(content, contentIndex) in skills.contents" :key="contentIndex">
                <v-card-title class="text-h5">
                    {{ content.name }}
                </v-card-title>
                </div>
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