<script setup>
let knowledgeArray = ["Investigar", "Recordar", "Comprender", "Aplicar", "Analizar", "Crear", "Evaluar"];

</script>


<template>

  <v-item-group multiple>
    <v-container>
      <v-row>
        <v-col
          v-for="n in 7"
          :key="n"

        >
          <v-item v-slot="{ isSelected, toggle }">
            <v-card
              :color="isSelected ? 'success' : 'red'"
              class="d-flex align-center"
              dark
              height="80"
              width="120"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div
                  class="text-h7  flex-grow-1 text-center"
                >
                  <!-- {{ isSelected ? 'Selected' : 'Click Me!' }} -->
                  {{ isSelected ? knowledgeArray[n-1] : knowledgeArray[n-1] }}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>




    <!-- <main>
        <section id="knowledge">
            <v-sheet class="knowledgeSquare" :height="100" :width="100" rounded :elevation="24">Investigar</v-sheet>
            <v-sheet class="knowledgeSquare" :height="100" :width="100" rounded :elevation="24">Recordar</v-sheet>
            <v-sheet class="knowledgeSquare" :height="100" :width="100" rounded :elevation="24">Comprender</v-sheet>
            <v-sheet class="knowledgeSquare" :height="100" :width="100" rounded :elevation="24">Aplicar</v-sheet>
            <v-sheet class="knowledgeSquare" :height="100" :width="100" rounded :elevation="24">Analizar</v-sheet>
            <v-sheet class="knowledgeSquare" :height="100" :width="100" rounded :elevation="24">Crear</v-sheet>
            <v-sheet class="knowledgeSquare" :height="100" :width="100" rounded :elevation="24">Evaluar</v-sheet>
        </section>

    </main> -->
</template>


<style scoped>



/* 
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
    background-color: var(--secondaryColor);
    color: white;
}*/


</style>