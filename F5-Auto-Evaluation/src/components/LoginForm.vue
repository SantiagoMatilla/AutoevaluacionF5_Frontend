<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>

<template>
  <v-card class="loginCard">

    <h3>Bienvenid@ a tu autoevaluación</h3>
    <v-tabs class="tabsContainer" v-model="tab" bg-color="#FF4702" color="white" fixed-tabs>
      <v-tab class="tab" value="login">Login</v-tab>
      <v-tab class="tab" value="register">Registro</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="login">
          <form class="loginForm">
            <div class="inputContainer">
              <v-text-field class="loginInput" label="Email" variant="underlined" type="email"></v-text-field>
              <v-text-field class="loginInput" label="Contraseña" variant="underlined" type="password"></v-text-field>
            </div>
            <div class="buttonContainer">
              <RouterLink to="/dashboard">
                <v-btn class="button">
                  Entrar
                </v-btn>
              </RouterLink>
            </div>
          </form>
        </v-window-item>

        <v-window-item value="register">
          <form class="registerForm">
            <div class="inputContainer">
              <v-text-field class="loginInput" label="Nombre" variant="underlined"></v-text-field>
              <v-text-field class="loginInput" label="Apellidos" variant="underlined"></v-text-field>
              <v-text-field class="loginInput" label="Email" variant="underlined" type="email"></v-text-field>
              <v-text-field class="loginInput" label="Contraseña" variant="underlined" type="password"></v-text-field>
              <v-text-field class="loginInput" label="Confirmar contraseña" variant="underlined"
                type="password"></v-text-field>
            </div>
            <div class="buttonContainer">
              <v-btn class="button">
                Registrarse
              </v-btn>
            </div>
          </form>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
  <p class="forgotPassword">¿Olvidaste tu contraseña?</p>
</template>

<style scoped>
h3 {
  text-align: center;
}

.tabsContainer {
  color: lightgrey !important;
}

.loginCard {
  width: 240px;
  margin: auto;
}

/* .tab {
  width: 50%;
} */

.buttonContainer {
  display: flex;
  justify-content: center;
}

.button {
  color: white;
  background-color: var(--primaryColor);
  /* background-color: var(--secondaryColor); */
}

.forgotPassword {
  text-align: center;
}
</style>