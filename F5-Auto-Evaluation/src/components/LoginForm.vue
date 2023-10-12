<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>

<template>
  <section>
    <img class="logo" src="../assets/images/Logo-FF5.png" alt="">
    
    <h3>Bienvenid@ a tu autoevaluación</h3>

    <v-card class="loginCard">
      <v-tabs class="tabsContainer" v-model="tab" bg-color="#FF4702" color="white" fixed-tabs>
        <v-tab class="tab" value="login">Login</v-tab>
        <v-tab class="tab" value="register">Registro</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="login">
            <form class="loginForm">
              <div class="loginContainer">
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
              <div class="registrationContainer">
                <div class="registrationSection">
                  <v-text-field class="registrationInput" label="Nombre" variant="underlined"></v-text-field>
                  <v-text-field class="registrationInput" label="Apellidos" variant="underlined"></v-text-field>
                </div>
                <div class="registrationSection">
                  <v-text-field class="registrationInput" label="Email" variant="underlined" type="email"></v-text-field>
                  <v-text-field class="registrationInput" label="Contraseña" variant="underlined" type="password"></v-text-field>
                </div>
                <div class="registrationSection">
                  <v-text-field class="registrationInput" label="Confirmar contraseña" variant="underlined" type="password"></v-text-field>
                </div>
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
      <p class="forgotPassword">¿Olvidaste tu contraseña?</p>
    </v-card>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 8vh;
}

.logo {
  height: 12%;
}

h3 {
  text-align: center;
  width: 50%;
}

.tabsContainer {
  color: lightgrey !important;
}

.loginCard {
  width: 80%;
  height: 400px;
  margin: auto;
}

.loginForm {
  display: flex;
  flex-direction: column;
  gap: 58px;
}

.loginContainer {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.registrationContainer {
  display: flex;
  flex-direction: column;
}

.registrationSection {
  display: flex;
  gap: 10%;
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