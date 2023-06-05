import { createApp } from "vue";
import "./reset.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Login from "@/Views/Login.vue";
import Home from "@/Views/Home.vue";
import PlanShow from "./Views/PlanShow.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", name: "Home", component: Home },
    { path: "/login", name: "Login", component: Login },
    { path: "/plans", name: "Plans", component: PlanShow },
  ],
});

createApp(App).use(router).mount("#app");
