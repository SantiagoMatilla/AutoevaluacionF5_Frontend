<script setup>
import stackDataService from '../services/stackDataService';
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

const stack = ref([]);
const router = useRouter();

const fetchStack = async () => {
  try {
    let response = await stackDataService.getAllStacks();
    stack.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onBeforeMount(fetchStack);

const redirectToEvaluation = (stackId) => {
  console.log("STACK ID: " + stackId);
  const evaluationPath = `/evaluation/${stackId}`;
  console.log("ROUTER PUSH  " + evaluationPath);
  router.push(evaluationPath);
};
</script> 
  
<template>
  <div class="card-container">
    <v-card v-for="eachStack in stack" :key="eachStack.id" class="card">
      <v-img :src="eachStack.image" class="card-image" />
      <v-card-title class="card-title">{{ eachStack.name }}</v-card-title>
      <v-divider :thickness="3" color="warning"></v-divider>
      <v-card-actions class="button-container">
        <v-btn class="accessButton" variant="text" @click="redirectToEvaluation(eachStack.id)">
          Acceder
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: var(--primaryColor);
  width: 100%;
  height: 100%;
}

.card {
  flex: 0 0 calc(30% - 20px);
  margin: 30px;
  max-width: 400px;
  margin: 50px;
}

.card:nth-child(n+4) {
  flex: 0 0 calc(45% - 20px);
}

.card-image {
  max-height: 200px;

}

.card-title {
  font-size: 20px;
  text-align: center;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.accessButton {
  color: rgb(247, 247, 247);
  background-color: rgb(248, 74, 16);
}
</style>