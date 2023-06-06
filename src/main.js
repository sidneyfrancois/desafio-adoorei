import { createApp } from "vue";
import "./reset.css";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import App from "./App.vue";
import Login from "@/Views/Login.vue";
import Home from "@/Views/Home.vue";
import PlanShow from "@/Views/PlanShow.vue";
import SignUp from "@/Views/SignUp.vue";
import { useAuthenticate } from "./store";

const pinia = createPinia();

const isAuthenticated = true;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/home", name: "Home", component: Home },
    { path: "/login", name: "Login", component: Login },
    { path: "/plans", name: "Plans", component: PlanShow },
    { path: "/register", name: "Registration", component: SignUp },
  ],
});

router.beforeEach((to, from, next) => {
  const auth = useAuthenticate();
  console.log(auth.isAuthenticated);
  if (to.name !== "Login" && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Home" && isAuthenticated) {
    next({ name: "Home" });
  } else {
    next();
  }
});

createApp(App).use(pinia).use(router).mount("#app");
