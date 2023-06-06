<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function handleExitUser() {
  localStorage.removeItem("token");
  router.push("/login");
}
</script>
<template>
  <header>
    <nav>
      <ul class="navbar-options">
        <li>
          <a href="index.html">
            <img src="../assets/locaweb-logo.png" alt="locaweb logo" />
          </a>
        </li>
        <li class="wrapper-user-menu">
          <img src="../assets/Icone-conta.png" alt="user-avatar" />
          <div class="user-menu-options">
            <a @click="handleExitUser">Sair</a>
          </div>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>Olá João,</h1>
    <p>Seja bem vindo a sua hospedagem</p>
    <div class="embedded-video-container">
      <iframe
        src="https://www.youtube.com/embed/fpa2W3YNg0Q"
        title="Test video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="video-presentation"
      ></iframe>
    </div>
    <div>Caso tenha alguma dúvida, visite nossa central de ajuda.</div>
  </main>
</template>
<style>
nav {
  padding: 2rem;
}

.navbar-options {
  display: flex;
  justify-content: space-between;

  list-style-type: none;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  margin: 0 auto;

  width: 80%;
}

.wrapper-user-menu {
  position: relative;
}

.user-menu-options {
  display: none;
  position: absolute;
  width: 100%;
  text-align: center;
  padding-top: 1rem;
  color: var(--font-color-black-dark);
  cursor: pointer;
}

.wrapper-user-menu:hover .user-menu-options {
  display: flex;
  flex-direction: column;
}

.embedded-video-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: var(--aspect-ratio);
}

.video-presentation {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
