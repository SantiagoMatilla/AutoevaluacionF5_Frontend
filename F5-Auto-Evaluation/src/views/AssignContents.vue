<script setup>
import Navbar from '../components/Navbar.vue';
const contents = ['HTML', 'CSS', 'JS', 'SCSS'];
</script>

<template>
    <Navbar />
    <v-container fluid class="container_content">
        <div>
            <button @click="$router.push('/assign-skills')" class="back_button">
                Atras
            </button>
        </div>
        <div class="content_stack">
            <h2>Digital Academy Asturias </h2>
            <h3>Es capaz de x</h3>
            <div class="new_content_select">
                <v-select label="Nuevo contenido" :items="contents" class="selector" bg-color="white">
                </v-select>

                <v-button type="submit" class="button">
                    Añadir
                </v-button>
            </div>
            <div class="contents_list">
                <table id="contentsList">
                    <thead class="text_center">
                        <tr>
                            <th>#</th>
                            <th>Contenidos</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="text_center">
                        <tr>
                            <td width="2%">{{ id }}</td>
                            <td>{{ contentName }}</td>
                            <td width="4%">
                                <button @click="deleteContent(content.id)" class="action-button">
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
.container_content {
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

h2, h3 {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
}

.new_content_select {
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

#contentsList {
    width: 100%;
}

#contentsList th,
#contentsList td {
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ccc;
}

#contentsList th {
    background-color: white;
    color: #FF4702;
}

#contentsList tbody tr:nth-child(odd) {
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

.new_content_select {
    width: 50%;
    margin: auto;
}
</style>