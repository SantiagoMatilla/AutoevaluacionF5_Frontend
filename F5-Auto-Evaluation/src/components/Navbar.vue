<script setup>

</script>

<template>
  <v-toolbar :elevation="8" height="150">
    <div class>
      <img class="logo" src="../assets/images/Logo-FF5.png" alt="Logo F5">
    </div>
    <v-spacer></v-spacer>
    <router-link :to="{ name: 'Dashboard' }" class="link">Dashboard</router-link>
    <v-spacer></v-spacer>
    <router-link :to="{ name: 'Stacks' }" class="link">Evaluar</router-link>
    <v-spacer></v-spacer>
    <router-link :to="{ name: 'Teacher' }" class="link">Sección Formadores</router-link>
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

.link {
  text-decoration: none;
  color: black;
}

.userMenu {
  width: 35px;
  margin: 25px;
}
</style>