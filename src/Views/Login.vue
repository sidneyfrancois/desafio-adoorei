<script setup>
import { ref } from "vue";
import Input from "../components/Input.vue";
import { useRouter, useRoute } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

async function handleLoginUser() {
  // call API to login
  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    });
    const data = await response.json();
    localStorage.setItem("token", data.token);
    router.push({ path: "/home" });
  } catch (error) {
    console.error(error);
  }
}
</script>
<template>
  <main>
    <div>
      <a href="index.html">
        <img src="../assets/locaweb-logo.png" alt="locaweb logo" />
      </a>
    </div>
    <div class="login-container">
      <div class="login-header">
        <h2>Entre na sua conta</h2>
        <p>Para acessar a sua conta informe seu e-mail e senha</p>
      </div>
      <form
        @submit.prevent="handleLoginUser"
        id="form1"
        class="login-input-container"
      >
        <Input label="E-mail" v-model:dataInput="email" />
        <Input label="Senha" v-model:dataInput="password">
          <template #bottomLabel>
            <a href="">Esqueci a minha senha</a>
          </template>
        </Input>
      </form>
      <button type="submit" form="form1" class="btn-login">Fazer Login</button>
    </div>
    <div class="register-tip">
      Ainda não tem conta?
      <label class="register-link">
        <router-link to="/plans">Cadastre-se</router-link>
      </label>
    </div>
  </main>
</template>
<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  min-height: 100vh;
}

.login-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  max-width: 38.75rem;
  padding: 1.6rem;
  background-color: var(--font-color-white);
  border: 1px solid var(--login-container-border-color);
  border-radius: var(--default-border-radius);
}

.login-input-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn-login {
  border: none;
  color: var(--default-white);
  background-color: var(--background-login-container);
  padding: 1.5rem 0;
  text-transform: uppercase;
  font-size: 0.9rem;
  border-radius: var(--default-border-radius);
}

.btn-login:active {
  background-color: hsla(334, 99%, 48%, 0.8);
}

.register-link {
  color: var(--default-red);
}
</style>
