import { createApp } from "vue";
import "./reset.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Login from "@/Views/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "Login", component: Login }],
});

createApp(App).use(router).mount("#app");
