<script setup>
import { ref, onMounted } from 'vue';
import DataService from '../services/dataService.js';


// const skills = ref ([]);
const stacks = ref([{
  id: 1,
  name: 'Frontend',
  photo: 'photo1stack',
    skills:[{
      id: 1,
      name: 'Skill 1 1'
    },
    {
      id:2,
      name:'skill 1 2',
    }
  ]
},
 {id: 2, 
  name : "Backend",
  photo: 'photo2stack',
  skills: [{
    id: 1,
    name: 'Skill 2 1'
    },
    {
    id:2,
    name:'skill 2 2',
    },
    {
    id:3,
    name:'skill 2 3',
    }
  ]
}
]);
console.log("stacks before mount:   " + stacks.value);

onMounted(async() => {
  console.log("stacks names onMounted:   " + stacks.value);
   const stackData = await DataService.getAllStacks().name; 
   if (stackData.length > 0){
    stacks.value = stackData;
   }
});

// const fetchSkills = async () => {
//     try {
//         const response = await fetch("http://localhost:8090/skills");
//         if (response.ok) {
//       skills.value = await response.json();
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// onMounted(fetchSkills);
</script>


<template>
  <v-card 
  class="mx-auto" 
  max-width="344"
  v-for="stack in stacks"  
  :key="stack.id"
  >
    <v-img 
    :src="stack.photo" 
    class="card-img-top" 
    :alt="stack.photo" 
    height="200px" 
    cover>Photo
    </v-img>

    <v-card-title>
     Stack Name {{ stack.name }}
    </v-card-title>
   <v-divider 
    :thickness="3" 
    color="warning">
     </v-divider> 
    <br>
    <v-card-subtitle v-for="skill in stack.skills"  
  :key="skill.id">
   Skills:{{skill.name }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn 
      class="accessButton"
       variant="text">
        Acceder
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.accessButton {
  color: white;
  background-color: var(--primaryColor);
}
</style>
 