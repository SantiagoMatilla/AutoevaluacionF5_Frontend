<script setup>
    // deleteCoder()
</script>
<template>
    <v-container  fluid class="container_coder">
        <div class="content_coder">
            <h3>Nombre de bootcamp</h3>
            <div class="new_coder_input">
                <div class="h4">
                    <h4>Nuev@ coder:</h4>
                </div>

                <!--      No se alinea en Y hay que bajarlo     y no estoy seguro sobre "@submit.prevent" -->
                <v-text-field @submit.prevent
                v-model="Name"
                :rules="rules"
                label="Nombre de coder"
                bg-color="white"
                type="text" 
                ></v-text-field>

                <!-- <v-form @submit.prevent>
        <v-text-field
            v-model="firstName"
            :rules="rules"
            label="First name"
        ></v-text-field>
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
        </v-form> -->


                <v-button type="submit" class="button" size="large">
                    Asignar
                </v-button>
            </div>

            <h3> Coders de {} {{ bootcamp }}</h3>
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
                            <td>{{ id }}</td>
                            <td>{{ coderName }}</td>
                            <td class="accion_cell">
                                <button @click="deleteCoder(coder.id)" class="action-button">Borrar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </v-container>
</template>


<style scoped>
.container_coder{
  background-color: #FF4702;
  height: 100vh;
  padding: 5%;
  background-size: cover;
  background-repeat: no-repeat;
}
h3{
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:1rem;
}
.new_coder_input {
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
}
.button {
  background-color:white;
  border-radius: 15px;
  margin : 20px;
  padding: 10px;
}
.h4 {
    display:flex ;
    align-self:center;
    color:white;
    margin: 1rem;
}
/* .codersList {
    display: grid;
    grid-gap: .8em;
} */
#codersList {
    width: 100%;
    /* border-collapse: collapse; */
}
#codersList th, #codersList td {
    padding: 8px;
    text-align: left;
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
/* #codersList td button {
    background-color: #FF4702;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 8px; 
    cursor: pointer;
} */

.action-button:hover {
    background-color: #E04106;
}
.accion_cell {
    width: 1%;
    white-space: nowrap;
}


</style>