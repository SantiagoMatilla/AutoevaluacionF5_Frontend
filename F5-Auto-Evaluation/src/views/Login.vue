<script setup>
import LoginForm from '../components/LoginForm.vue'
</script>

<template>
    <body>
        <img src="../assets/images/loginBackground.jpg" alt="">
        <LoginForm />
    </body>
</template>

<style scoped>
body {
    display: flex;
}

img {
    max-width: 80%;
}

@media only screen and (max-width: 1440px) {
  img {
    max-width: 60%;
}
}
</style>