<script setup>
import Login from "./Views/Login.vue";
</script>

<template>
  <main>
    <!-- <Login /> -->
    <router-view />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  min-height: 100vh;
}
</style>
