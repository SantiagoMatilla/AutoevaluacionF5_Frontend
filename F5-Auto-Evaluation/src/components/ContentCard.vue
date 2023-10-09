<script setup>
import Criteria from './Criteria.vue';

const props = defineProps({
    content: Object,
});
</script>

<template>
    <div>
        <v-card color="#0F1523" width="64%" class="card">
            <div class="d-flex flex-no-wrap justify-space-around align-center">
                <div class="col-md-4 mb-4">
                    <!-- v-for="(content, index) in contents" :key="index" -->
                    <v-card-title class="text-h5">
                        {{ content.name }}
                    </v-card-title>
                </div>
                <Criteria />
            </div>
        </v-card>
    </div>
</template>

<style scoped>
.card {
    margin: 2vh auto 0;
}
</style>