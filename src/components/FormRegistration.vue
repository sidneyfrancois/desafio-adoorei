<script setup>
import Input from "./Input.vue";
</script>

<template>
  <div class="form-registration">
    <h2>Dados pessoais</h2>
    <p>Informe seus dados pessoais para acesso à sua conta</p>
    <form class="form-user">
      <div class="basic-user-info">
        <Input label="Nome completo" />
        <Input label="Celular" />
        <Input label="E-mail" />
        <Input label="Senha" />
        <Input label="Confirme sua senha" />
      </div>
      <hr />
      <div class="website-registration">
        <h2>Dados do seu site</h2>
        <Input label="Nome do seu site" />
      </div>
      <hr />
      <div class="checkbox-registration">
        <input type="checkbox" id="checkbox-privacy" />
        <label for="checkbox-privacy">
          Ao concluir com seu cadastro você concorda com nossos
          <label class="privacy-note"
            >termos de uso e politicas de privacidade</label
          >
        </label>
      </div>
    </form>
    <button class="btn-registration">criar conta</button>
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
