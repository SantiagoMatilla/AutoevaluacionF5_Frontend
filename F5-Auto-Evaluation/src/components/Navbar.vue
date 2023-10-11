<script setup>

</script>

<template>
  <v-toolbar :elevation="8" height="150">
    <div class>
      <img class="logo" src="../assets/images/Logo-FF5.png" alt="Logo F5">
    </div>
    <v-spacer></v-spacer>

    <button>Dashboard</button>

    <v-spacer></v-spacer>

    <button>Evaluar</button>

    <v-spacer></v-spacer>
    <v-btn class="button" :to="{ name: 'Teacher' }">
      Sección Formadores
    </v-btn>

    <button :to="{ name: 'Dashboard' }">Dashboard</button>
    <v-spacer></v-spacer>
    <button :to="{ name: 'Stack' }">Evaluar</button>
    <v-spacer></v-spacer>
    <button class="button" :to="{ name: 'Teacher' }">Sección Formadores</button>
    <v-spacer></v-spacer>
    <a href="">
      <img class="userMenu" src="../assets/images/User-menu.png" alt="User Menu">
    </a>
  </v-toolbar>
</template>


<style scoped>
.logo {
  height: 100px;
  margin-left: 15px;
  margin-top: 10px;
}

.userMenu {
  width: 35px;
  margin: 25px;
}
</style>