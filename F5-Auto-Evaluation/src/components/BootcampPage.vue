<script setup>
import SelectCard from '../components/SelectCard.vue';

</script>
<template>
    <div class="background">
        <div class="select_card">
            <SelectCard />
        </div>
    </div>
</template>

<style scoped>
.background {
    height: 90vh;
    margin: 0;
    padding: 0;
    background-image: url('../assets/img/fondo1.png');
    background-size: cover;
    background-repeat: no-repeat;
}
.select_card {
    position: absolute;
    margin-left: 70%;
    margin-top: 20vh;
}
</style>