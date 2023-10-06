<script setup>
defineProps ({
   ProgressCard: {
    type: String,
    cardColor: String, 
   } 


})



</script>

<template>
    <div class="minicard">
      <!-- <v-card class="d-flex align-center flex-column" width="510"  style="margin-right:30px;" > -->
        <div   style class="card " >
          <p  class="text-black">{{ ProgressCard, cardColor }}</p>   

        </div>
        <!-- </v-card> -->
        <v-progress-circular color="white" bg-color="blue-grey-lighten-3" :size="80" :model-value="25" :width="10" ></v-progress-circular> 
    </div>
  </template>

  <style scoped>
  .minicard {
    display: flex;
    width: 70%;
    margin: 30px
  }

  .card{
    display: flex;
    align-content: center;
    width: 90%;
    margin-right: 10%;
    font-size: 30px;
    text-align: center;
    background-color: rgb(242, 242, 245);
    align-items: center;
    justify-content: center;
  }
</style>
  