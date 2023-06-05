import { createApp } from "vue";
import "./reset.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Login from "@/Views/Login.vue";
import Home from "@/Views/Home.vue";
import PlanShow from "@/Views/PlanShow.vue";
import SignUp from "@/Views/SignUp.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", name: "Home", component: Home },
    { path: "/login", name: "Login", component: Login },
    { path: "/plans", name: "Plans", component: PlanShow },
    { path: "/register", name: "Registration", component: SignUp },
  ],
});

createApp(App).use(router).mount("#app");
