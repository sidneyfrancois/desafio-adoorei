<template>
  <h2>Dados pessoais</h2>
  <p>Informe seus dados pessoais para acesso à sua conta</p>
  <form action="">
    <label for="name-input">Nome completo</label>
    <input
      id="name-input"
      name="user-name"
      placeholder="Informe seu nome completo"
      type="text"
    />
    <label for="celular-input">Celular</label>
    <input type="text" id="celular-input" placeholder="(99) 99999-0000" />
    <label for="email-input">E-mail</label>
    <input type="text" id="email-input" placeholder="Informe seu e-mail" />
    <label for="password-input">Senha</label>
    <input type="text" id="password-input" />
    <label for="password-input-confirmation">Confirme sua senha</label>
    <input type="text" id="password-input-confirmation" />
    <hr />
    <h2>Dados do seu site</h2>
    <label for="">Nome do seu site</label>
    <input type="text" />
    <hr />
    <label for="">
      Ao concluir com seu cadastro você concorda com nossos
      <label>termos de uso e politicas de privacidade</label>
    </label>
    <input type="checkbox" />
  </form>
  <button>criat conta</button>
</template>
