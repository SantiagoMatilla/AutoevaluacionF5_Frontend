<script setup>
import Navbar from '../components/Navbar.vue';
const stacks = ['Frontend', 'Backend', 'User UX/UI', 'Web Design']; 
</script>

<template>
    <Navbar />
    <v-container fluid class="container_stack">
        <div>
            <button @click="$router.push('/teacher')" class="back_button">
                Atras
            </button>
        </div>
        <div class="content_stack">
            <h2>Digital Academy Asturias</h2>
            <div class="new_stack_select">
                <v-select label="Nuevo marco de competencias" :items="stacks" class="selector" bg-color="white">
                </v-select>
                <v-button type="submit" class="button">
                    Añadir
                </v-button>
            </div>
            <div class="stacks_list">
                <table id="stacksList">
                    <thead class="text_center">
                        <tr>
                            <th>#</th>
                            <th>Marcos de competencias</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="text_center">
                        <tr>
                            <td width="2%">{{ id }}</td>
                            <td>{{ stackName }}</td>
                            <td width="4%">
                                <div class="btn_row">
                                    <button @click="$router.push('/assign-skills')" class="action-button">
                                        Editar
                                    </button>

                                    <button @click="deleteStack(stack.id)" class="action-button">
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
.container_stack {
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

h2 {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
}

.new_stack_select {
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

#stacksList {
    width: 100%;
}

#stacksList th,
#stacksList td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ccc;
}

#stacksList th {
    background-color: white;
    color: #FF4702;
}

#stacksList tbody tr:nth-child(odd) {
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

.new_stack_select {
    width: 50%;
    margin: auto;
}

</style>