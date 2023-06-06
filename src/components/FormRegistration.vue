<script setup>
import { ref } from "vue";
import Input from "./Input.vue";
import { useUserStore } from "@/store";

const fullName = ref("");
const cellphone = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const websiteName = ref("");
const privacyCheck = ref(false);

const registeredUser = useUserStore();

async function handleCreateAccount() {
  if (privacyCheck.value) {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify({
          email: email.value,
          password: password.value,
          name: {
            firstname: fullName.value.split(" ").at(0),
            lastname: fullName.value.split(" ").at(2),
          },
          phone: cellphone.value,
        }),
      });

      const data = await response.json();

      registeredUser.$patch({
        id: data.id,
        fullName: fullName.value,
        cellphone: cellphone.value,
        email: email.value,
        websiteName: websiteName.value,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<template>
  <div class="form-registration">
    <h2>Dados pessoais</h2>
    <p>Informe seus dados pessoais para acesso à sua conta</p>
    <form class="form-user">
      <div class="basic-user-info">
        <Input
          label="Nome completo"
          type="text"
          placeholder="Informe seu nome completo"
          v-model:data-input="fullName"
        />
        <Input
          label="Celular"
          type="text"
          placeholder="(99) 99999-0000"
          v-model:data-input="cellphone"
        />
        <Input
          label="E-mail"
          type="email"
          placeholder="Informe seu e-mail"
          v-model:data-input="email"
        />
        <Input label="Senha" type="password" v-model:data-input="password" />
        <Input
          label="Confirme sua senha"
          type="password"
          v-model:data-input="confirmPassword"
        />
      </div>
      <hr />
      <div class="website-registration">
        <h2>Dados do seu site</h2>
        <Input
          label="Nome do seu site"
          type="text"
          placeholder="Meu Site"
          v-model:data-input="websiteName"
        />
      </div>
      <hr />
      <div class="checkbox-registration">
        <input type="checkbox" id="checkbox-privacy" v-model="privacyCheck" />
        <label for="checkbox-privacy">
          Ao concluir com seu cadastro você concorda com nossos
          <label class="privacy-note"
            >termos de uso e politicas de privacidade</label
          >
        </label>
      </div>
    </form>
    <button @click="handleCreateAccount" class="btn-registration">
      criar conta
    </button>
  </div>
</template>
<style>
.form-registration {
  display: flex;
  flex-direction: column;
  background-color: var(--default-white);
  padding: 2rem;
}

.form-user {
  display: flex;
  flex-direction: column;
}

.basic-user-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
}

.website-registration {
  margin: 1rem 0;
}

.checkbox-registration {
  display: flex;
  align-items: baseline;
  gap: 1rem;

  margin: 1rem 0;
}

.checkbox-registration > label {
  padding-right: 7rem;
}

.privacy-note {
  text-decoration: underline;
}

.btn-registration {
  border: none;
  color: var(--default-white);
  background-color: var(--default-red);
  padding: 1rem 0;
  text-transform: uppercase;
}
</style>
