<script setup>
const stack = ['Frontend', 'Backend', 'User UX/UI', 'Web Design'];
const skills = ['Es capaz de x', 'Es capaz de y', 'Es competente en N']
</script>

<template>
    <v-container fluid class="container">
        <div class="title_n_backbtn">
            <button @click="$router.push('/assign-stacks')" class="back_button">
                Atras
            </button>
            <div>
                <h2>(Nombre de bootcamp) Digital Academy - Asturias <br>(Marco de competencia) Frontend{{ stack }}</h2>
            </div>
        </div>
        <div class="content_stack">
            <h3>Agrega las competencias al {Frontend}{{ stack }}</h3>
            <div class="new_skill_select">
                <v-select label="Competencia" :items="skills" class="selector" bg-color="white">
                </v-select>
                <v-button type="submit" class="button">
                    Añadir
                </v-button>
            </div>

            <h3> Competencias {{ skill }} en {Frontend} {{ stack }}</h3>
            <div class="skills_list">
                <table id="skillsList">
                    <thead class="text_center">
                        <tr>
                            <th>#</th>
                            <th>Competencia</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="text_center">
                        <tr>
                            <td width="2%">{{ id }}</td>
                            <td>{{ skillName }}</td>
                            <td width="4%">
                                <div class="btn_row">
                                    <button @click="$router.push('/assign-contents')" class="action-button">
                                        Editar
                                    </button>

                                    <button @click="deleteSkill(skill.id)" class="action-button">
                                        Borrar
                                    </button>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </v-container>
</template>


<style scoped>
.container {
    background-color: #FF4702;
    height: 85vh;
    padding: 5%;
    background-size: cover;
    background-repeat: no-repeat;
}

.back_button {
    background-color: white;
    border-radius: 10px;
    padding: 10px;
}

h3,
h2 {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
}

.new_skill_select {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.button {
    background-color: white;
    border-radius: 10px;
    margin: 20px;
    padding: 10px;
}

.h4 {
    display: flex;
    align-self: center;
    color: white;
    margin: 1rem;
}

#skillsList {
    width: 100%;
}

#skillsList th,
#skillsList td {
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ccc;
}

#skillsList th {
    background-color: white;
    color: #FF4702;
}

#skillsList tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
}

.action-button {
    background-color: #FF4702;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 8px;
    margin: 5px;
    cursor: pointer;
}

.action-button:hover {
    background-color: #E04106;
}

.btn_row {
    display: flex;
    flex-direction: row;
}
</style>