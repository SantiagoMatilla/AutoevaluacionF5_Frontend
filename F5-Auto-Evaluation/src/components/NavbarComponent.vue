<script>
   
</script>

<template>
  <v-toolbar 
    :elevation="8"
    class="navbar"
    height="150"
    >
      <div class>
      <img class="logo" src="../assets/img/Logo-FF5.png" alt="Logo F5">
      </div>
      <v-spacer></v-spacer>

      <button>Bootcamp</button>

      <v-spacer></v-spacer>

    <a href="">
      <img class="userMenu" src="../assets/img/User-menu.png" alt="User Menu">
    </a>
  </v-toolbar>
</template>


<style scoped>
.logo{
height: 100px; 
margin-left:15px;
margin-top: 10px;
}
.userMenu{
  width:35px;
  margin-right:25px;
  margin-top:10px;
}

</style>