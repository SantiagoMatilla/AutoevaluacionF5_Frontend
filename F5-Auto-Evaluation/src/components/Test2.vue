<script>
  import Criteria from './Criteria.vue';
  export default {
    data() {
      return {
        stacks: stacks, // Asegúrate de que esta variable esté disponible en tu componente
      };
    },
    components: {
      Criteria,
    },
  };

const frontendSkill1 = 'Es capaz de crear una UI web estática y adaptable';
const frontendSkill2 = 'Es capaz de crear una UI web dinámica y adaptable';
const backendSkill1 ='Es capaz de gestionar ....';
const backendSkill2 = 'backendSkill2 competencia'

const stacks = [
  {
    id: 1,
    name: 'FrontEnd',
    skills: [
      {
        id: 1,
        name: frontendSkill1, 
        contents: [
          { name: 'HTML', criteria: [false, false, false, false, false, false, false] },
          { name: 'CSS', criteria: [false, false, false, false, false, false, false] },
          { name: 'JS', criteria: [false, false, false, false, false, false, false] },
        ],
      },
      {
        id: 2,
        name: frontendSkill2,
        contents: [
          { name: 'React', criteria: [false, false, false, false, false, false, false] },
          { name: 'Vue', criteria: [false, false, false, false, false, false, false] },
          // Agrega más contenidos si es necesario
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'BackEnd',
    skills: [
      {
        id: 3,
        name: backendSkill1,
        contents: [
          { name: 'Java', criteria: [false, false, false, false, false, false, false] },
          { name: '.Net Core', criteria: [false, false, false, false, false, false, false] },
          // más contenidos si es necesario
        ],
      },
      {
        id: 4,
        name:backendSkill2,
        contents: [
          { name: 'Node.js', criteria: [false, false, false, false, false, false, false] },
          { name: 'Python', criteria: [false, false, false, false, false, false, false] },
          // más contenidos si es necesario
        ],
      },
      // más skills si es necesario
    ],
  },
  // Agrega más stacks si es necesario
];
</script>

<template>
    <div>
      <div v-for="stack in stacks" :key="stack.id">
        <h2>{{ stack.name }}</h2>
        <div  v-for="skill in stack.skills" :key="skill.id">
            <!-- <div class="col-md-12"> -->
                <h3>{{ skill.name }}</h3>
                <!-- </div> -->

                <v-card color="#0F1523" width="85%" class="card" >
                    <div class="d-flex flex-no-wrap justify-space-around align-center">
                        <div class="col-md-12">
                            <!-- <div class="d-flex flex-wrap"> -->
                                <div class="horizontal col-md-4 mb-4" v-for="content in skill.contents" :key="content.name">
                                    <v-card-title class="text-h5">
                                    {{ content.name }}
                                    </v-card-title>
                                    <Criteria />
                                </div>
                            <!-- </div>   -->
                        </div>  
                    </div>
                </v-card>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .card {
    margin: 2vh auto 0;
  }
  .horizontal{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  h2 {
    text-align: center;
  }
  </style>
  