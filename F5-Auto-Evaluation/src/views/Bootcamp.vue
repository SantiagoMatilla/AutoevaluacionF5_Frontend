<script setup>
import SelectBootcamp from '../components/SelectBootcamp.vue';
</script>

<template>
    <div class="background">
        <div class="select_card">
            <SelectBootcamp />
        </div>
    </div>
</template>

<style scoped>
.background {
    height: 85vh;
    margin: 0;
    padding: 0;
    background-image: url('../assets/images/fondo1.png');
    background-size: cover;
    background-repeat: no-repeat;
}
.select_card {
    position: absolute;
    margin-left: 70%;
    margin-top: 10%;
}
</style>