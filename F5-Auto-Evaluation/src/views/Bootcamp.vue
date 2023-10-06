<script setup>
import SelectCard from '../components/SelectCard.vue';
// import SkillsCard  from '../components/SkillsCard.vue';


</script>
<template>
    <div class="background">
        <div class="select_card">
            <SelectCard />
        </div>
        <!-- <SkillsCard /> -->
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