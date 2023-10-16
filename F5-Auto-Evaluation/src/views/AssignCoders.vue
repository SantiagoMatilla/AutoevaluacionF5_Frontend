<script setup>
import Navbar from '../components/Navbar.vue';
const coders = ['Angela Coello', 'Nafisa Usmanova', 'Habibullah Afzali', 'Victor Tejedor', 'Santiago Matilla', 'Brian Menendez']; 
</script>

<template>
    <Navbar />
    <v-container fluid class="container_coder">
        <div class="firstline_buttons">
            <button @click="$router.push('/teacher')" class="button">
                Atras
            </button>
        </div>
        <div class="content_coder">
            <h2>Digital Academy Asturias</h2>
            <div class="new_coder_select">
                <div class="h4">
                </div>
                <v-select label="Nuev@ coder" :items="coders" class="selector" bg-color="white">
                </v-select>
                <v-button type="submit" class="button_assign">
                    Asignar
                </v-button>
            </div>

            <h3> Coders</h3>
            <div class="coders_list">
                <table id="codersList">
                    <thead class="text_center">
                        <tr>
                            <th>#</th>
                            <th>Nombre de coder</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="text_center">
                        <tr>
                            <td width="2%">{{ id }}</td>
                            <td>{{ coderName }}</td>
                            <td class="accion_cell">
                                <button @click="deleteCoder(coder.id)" class="action-button">
                                    Borrar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </v-container>
</template>


<style scoped>
.container_coder {
    background-color: #FF4702;
    height: 85vh;
    padding: 5%;
    background-size: cover;
    background-repeat: no-repeat;
}

.firstline_buttons {
    display: flex;
    justify-content: space-between;
}

h2, h3 {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
}

.new_coder_select {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.button {
    background-color: white;
    border-radius: 10px;
    padding: 5px;
}

.button_assign {
    background-color: white;
    border-radius: 10px;
    margin: 20px;
    padding: 5px;
}

.h4 {
    display: flex;
    align-self: center;
    color: white;
    margin: 1rem;
}

#codersList {
    width: 100%;
}

#codersList th,
#codersList td {
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ccc;
}

#codersList th {
    background-color: white;
    color: #FF4702;
}

#codersList tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
}

.action-button {
    background-color: #FF4702;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 8px;
    cursor: pointer;
}

.action-button:hover {
    background-color: #E04106;
}

.accion_cell {
    width: 1%;
    white-space: nowrap;
}

.new_coder_select {
    width: 50%;
    margin: auto;
}
</style>