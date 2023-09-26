<script setup>
import Knowledge from './Knowledge.vue';

// export default {
//     data: () => ({
//         length: 4,
//         onboarding: 0,
//     }),

//     methods: {
//         next() {
//             this.onboarding = this.onboarding + 1 > this.length
//                 ? 1
//                 : this.onboarding + 1
//         },
//         prev() {
//             this.onboarding = this.onboarding - 1 <= 0
//                 ? this.length
//                 : this.onboarding - 1
//         },
//     },
// }
</script>

<template>
    <v-card color="#0F1523" width="64%" class="card">
        <div class="d-flex flex-no-wrap justify-space-between align-center">            
                <v-card-title class="text-h5">
                    HTML
                </v-card-title>
                <Knowledge />
        </div>
    </v-card>



    <!-- <v-carousel hide-delimiters height="fit-content" class="carousel">
        <v-carousel-item class="carouselItem"> <v-card class="card" color="#FF4702" theme="dark">
                <div class="content d-flex flex-no-wrap justify-space-between align-center">
                    <div>
                        <v-card-title class="text-h5">
                            HTML
                        </v-card-title>
                        <v-card-subtitle>Es capaz de crear una UI web estática y adaptable</v-card-subtitle>

                    </div>

                    <div>
                        <v-card>
                            <v-window v-model="onboarding">
                                <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
                                    <v-card height="240" class="progress d-flex justify-center align-center" color="#003D4D">
                                        <span class="evaluation text-h5">
                                            Evaluación {{ n }}
                                        </span>
                                        <v-progress-circular color="success" bg-color="blue-grey-lighten-3" model-value="14" :size="128"
                                            :width="12"></v-progress-circular>
                                    </v-card>
                                </v-window-item>
                            </v-window>

                            <v-card-actions class="actions">
                                <v-btn variant="plain" icon="mdi-chevron-left" @click="prev"></v-btn>
                                <v-item-group v-model="onboarding" class="text-center" mandatory>
                                    <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ isSelected, toggle }"
                                        :value="n">
                                        <v-btn :variant="isSelected ? 'outlined' : 'text'" icon="mdi-record"
                                            @click="toggle"></v-btn>
                                    </v-item>
                                </v-item-group>
                                <v-btn variant="plain" icon="mdi-chevron-right" @click="next"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </div>

                </div>
            </v-card>
        </v-carousel-item>

        <v-carousel-item height="304" src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

        <v-carousel-item height="304" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
    </v-carousel> -->
</template>

<style scoped>
.card {
    margin: auto;
}


/* .carousel {
    width: 80vw;
    margin: auto;
}

.carouselItem {
    height: 45px;
}

.card {
    width: 50%;
    height: 100%;
    margin: auto;
}

.content {
    margin-left: 1vw;
}

.progress {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.actions {
    background-color: #003D4D;
} */
</style>