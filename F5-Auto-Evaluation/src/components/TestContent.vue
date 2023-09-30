<script>
// import Criteria from './Criteria.vue'

// const skillsFront = [{id:1, name: 'Es capaz de crear una UI web estática y adaptable'},{id:2, name: 'Es capaz de crear una UI web dinámica y adaptable'}];
// const skillsBack = [{id:1, name: 'Es capaz de gestionar las estructuras, el flujo y el almacenamiento de datos de una web'},{id:2, name: 'Es capaz de desarrollar algoritmos que ejecutan procesos lógicos'}];
// const frontEndContent = [
//     {id:1, name:'HTML'},
//     {id:2, name: 'CSS'}, 
//     {id:3, name: 'JS'}
// ];
// const backEndContent = [];

// const getSkills = () => {
//     if(stack.name = 'FrontEnd'){
//         return skillsFront;
//     }
//     if(stack.name = 'BackEnd'){
//         return skillsBack;
//     };
// }
// const getContent = () => {
//     if (skill.name = 'FrontEnd'){
//         for()
//     }
// }
const stack1 = 'Front End';
const stack1Content1Desciption = 'Es capaz de crear una UI web estática y adaptable';
const stack1Content2Desciption = 'Es capaz de crear una UI web dinámica y adaptable';
const stack2 = 'Back End';
const stack2Content1Description = 'Es capaz de gestionar ....';
const stack2Content2Description = 'Es capaz de gestionar .... más ...';

const data = () => {
    return {
        stacks: [
            {id:1, name: 'FrontEnd', skills:[
                {stack1Content1Desciption:[
                    {contents: 
                        ['HTML', 'Css', 'JS']
                    }
                ]}, 
                {stack1Content2Desciption:[
                    {contents:
                        ['React','Vue']
                    }
                ]}
            ]},
            {id:2, name: 'BackEnd', skills:[
                {stack1Content1Desciption:[
                    {contents: 
                        ['HTMLBACK', 'BACKCss', 'BackEndJS']
                    }
                ], 
                stack1Content2Desciption:[
                    {contents: 
                        ['Java', '.Net Core']
                    },
                ]}
            ]}, 

            // {id:3, name: 'Project Management', contents: ['Agile', 'Scrum', 'Client relationship']},
            // {id:4, name: 'Functional and technical analysis', contents: ['Algorithmia', 'Diagramas de flujo', 'Diagramas funcionales', 'Modelo de datos']}
        ]
    }
}

</script>
<template>
    <div>
        <h2 v-for="skill in skils" :key="skill.id">
        {{ skill.description }}
        </h2>
        <v-card color="#0F1523" width="64%" class="card">
            <div class="d-flex flex-no-wrap justify-space-around align-center">
                <div class="col-md-4 mb-4" v-for="content in contents" :key="content.id">
                    <v-card-title class="text-h5">
                    {{ content.name }}
                </v-card-title>
                </div>
                <Criteria />
            </div>
        </v-card>
    </div>
</template>
<!-- <template>
    <div>
        <h2 v-for="(skill, index) in skills" :key="index">  
            {{ skill.name }}
        </h2>
        <v-card color="#0F1523" width="64%" class="card">
            <div class="d-flex flex-no-wrap justify-space-around align-center">
                 <div class="col-md-4 mb-4" v-for="(content, index) in contents" :key="index">
                <v-card-title class="text-h5">
                    {{ content.name }}
                </v-card-title>
                </div>
                <Criteria />
            </div>
        </v-card>
    </div>
</template> -->

<style scoped>
.card {
    margin: 2vh auto 0;
}

h2 {
    text-align: center;
}
</style>