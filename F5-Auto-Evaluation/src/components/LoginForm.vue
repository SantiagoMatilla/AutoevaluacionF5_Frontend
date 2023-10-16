<script setup>
import registrationService from '../services/registrationDataService';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const tab = ref('login');
const loginErrorMessage = ref('');

const router = useRouter();

const loginData = ref({
  email: '',
  password: '',
});

const registrationData = ref({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
  repeatPassword: ''
});

const registeration = async () => {

  await registrationService.save('saveUser', registrationData.value)
    .then(() => {
      alert("Registered successfully!");
      router.push("/");
    })
    .catch(error => {
      console.error("an error occured:", error);
    });

};
const login = async (loginData) => {
 await registrationService.login('login', loginData)
    .then(() => {
      alert("User successfully logged in!");
      router.push("/dashboard")
    })
    .catch(error => {
      console.error("Login failed:", error);
      loginErrorMessage.value = "Wrong username or password. Please try again.";
    });

};

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
            <form class="loginForm" @submit.prevent="login(loginData)">
              <div class="loginContainer">
                <v-text-field v-model="loginData.email" class="loginInput" label="Email" variant="underlined"
                  type="email"></v-text-field>
                <v-text-field v-model="loginData.password" class="loginInput" label="Contraseña" variant="underlined"
                  type="password"></v-text-field>
              </div>
              <div v-if="loginErrorMessage" class="alert alert-danger" style="color: red;">{{ loginErrorMessage }}</div>
              <div class="buttonContainer">
                <v-btn class="button" type="submit">
                  Entrar
                </v-btn>
              </div>
            </form>
          </v-window-item>
          <v-window-item value="register">
            <form class="registerForm" @submit.prevent="registeration">
              <div class="registrationContainer">
                <div class="registrationSection">
                  <v-text-field v-model="registrationData.firstName" class="registrationInput" label="Nombre"
                    variant="underlined"></v-text-field>
                  <v-text-field v-model="registrationData.lastName" class="registrationInput" label="Apellidos"
                    variant="underlined"></v-text-field>
                </div>
                <div class="registrationSection">
                  <v-text-field v-model="registrationData.phone" class="registrationInput" label="phone"
                    variant="underlined"></v-text-field>
                  <v-text-field v-model="registrationData.email" class="registrationInput" label="Email"
                    variant="underlined" type="email"></v-text-field>
                </div>
                <div class="registrationSection">
                  <v-text-field v-model="registrationData.password" class="registrationInput" label="Contraseña"
                    variant="underlined" type="password"></v-text-field>
                  <v-text-field v-model="registrationData.repeatPassword" class="registrationInput"
                    label="Confirmar contraseña" variant="underlined" type="password"></v-text-field>
                </div>
              </div>
              <div class="buttonContainer">
                <v-btn class="button" type="submit">
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
  margin-top: 6vh;
}

h3 {
  text-align: center;
  width: 50%;
}

.tabsContainer {
  color: lightgray !important;
}

.loginCard {
  width: 80%;
  height: 400px;
  margin: auto;
  background-color: #ECEFF1;
}

.loginForm {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 34px;
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

.buttonContainer {
  display: flex;
  justify-content: center;
}

.button {
  color: white;
  background-color: var(--primaryColor);
}

.forgotPassword {
  text-align: center;
}</style>