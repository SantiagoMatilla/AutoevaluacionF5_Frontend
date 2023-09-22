<script setup>

</script>


<template>
    <main>
        <section id="knowledge">
            <v-sheet class="knowledgeSquare" :height="80" :width="80" color="blue-grey-darken-1" rounded :elevation="24">Investigar</v-sheet>
            <v-sheet class="knowledgeSquare" :height="80" :width="80" color="blue-grey-darken-1" rounded :elevation="24">Recordar</v-sheet>
            <v-sheet class="knowledgeSquare" :height="80" :width="80" color="blue-grey-darken-1" rounded :elevation="24">Comprender</v-sheet>
            <v-sheet class="knowledgeSquare" :height="80" :width="80" color="blue-grey-darken-1" rounded :elevation="24">Aplicar</v-sheet>
            <v-sheet class="knowledgeSquare" :height="80" :width="80" color="blue-grey-darken-1" rounded :elevation="24">Analizar</v-sheet>
            <v-sheet class="knowledgeSquare" :height="80" :width="80" color="blue-grey-darken-1" rounded :elevation="24">Crear</v-sheet>
            <v-sheet class="knowledgeSquare" :height="80" :width="80" color="blue-grey-darken-1" rounded :elevation="24">Evaluar</v-sheet>
        </section>
    </main>
</template>


<style scoped>

#knowledge {
    margin: 8vh auto;
    width: 70%;
    display: flex;
    justify-content: space-around;
}

.knowledgeSquare {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: small;
}

</style>