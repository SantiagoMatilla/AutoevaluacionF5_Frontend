<script>
  export default {
    data: () => ({
      length: 4,
      onboarding: 0,
    }),

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 > this.length
          ? 1
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 <= 0
          ? this.length
          : this.onboarding - 1
      },
    },
  }
</script>

<template>
    <v-carousel hide-delimiters height="fit-content" class="carousel">
        <v-carousel-item class="carouselItem"> <v-card class="card" color="#1F7087" theme="dark">
                <div class="d-flex flex-no-wrap justify-space-between align-center">
                    <div>
                        <v-card-title class="text-h5">
                            HTML
                        </v-card-title>

                        <v-card-subtitle>Foster the People</v-card-subtitle>

                        <v-card-actions>
                            <v-btn class="ms-2" variant="outlined" size="small">
                                START RADIO
                            </v-btn>
                        </v-card-actions>
                    </div>

                    <div>
                        <v-card theme="dark" flat rounded="0">
                            <v-window v-model="onboarding">
                                <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
                                    <v-card height="200" class="d-flex justify-center align-center">
                                        <span class="text-h5">
                                            Evaluación {{ n }}
                                        </span>
                                    </v-card>
                                </v-window-item>
                            </v-window>

                            <v-card-actions class="justify-space-between">
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

                    <!-- <v-avatar class="ma-3" size="125" rounded="0">
<v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
</v-avatar> -->
                </div>
            </v-card></v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
    </v-carousel>
</template>

<style scoped>
.carousel {
    width: 80vw;
    margin: auto;
    border: 1px solid red;
}

.carouselItem {
    height: 45px;
}

.card {
    width: 50%;
    height: 100%;
    margin: auto;
}
</style>