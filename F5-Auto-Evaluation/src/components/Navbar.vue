<script setup>
// import { useRouter } from 'vue-router';

// const router = useRouter();
   
</script>

<template>
  <v-toolbar 
    :elevation="8"
    height="150"
    >
      <div class>
      <img class="logo" src="../assets/images/Logo-FF5.png" alt="Logo F5">
      </div>
      <v-spacer></v-spacer>
<<<<<<< HEAD
      
      <button>Dashboard</button>

      <v-spacer></v-spacer>
      
      <button>Evaluar</button>

      <v-spacer></v-spacer>
      <!-- <router-link to="/"> -->
            <v-btn class="button" :to="{name:'Teacher'}" >
              Sección Formadores
        </v-btn>
      <!-- </router-link> -->

=======
      <button  :to="{name:'Dashboard'}">Dashboard</button>
      <v-spacer></v-spacer>
      <button :to="{name:'Evaluation'}">Evaluar</button>
      <v-spacer></v-spacer>
      <button class="button" :to="{name:'Teacher'}">Sección Formadores</button>
      <v-spacer></v-spacer>
>>>>>>> d9c3998eba62bcb0d10d40b79d93b273d992cfb1
    <a href="">
      <img class="userMenu" src="../assets/images/User-menu.png" alt="User Menu">
    </a>
  </v-toolbar>
</template>


<style scoped>
.logo{
  height: 100px; 
  margin-left:15px;
  margin-top: 10px;
  /* margin: 25px; */
}
.userMenu{
  width:35px;
  /* margin-right:25px;
  margin-top:10px; */
  margin:25px;
}

</style>