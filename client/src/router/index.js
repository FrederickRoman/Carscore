import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const About = () => import("../views/About.vue");
const ComingSoon = () => import("../views/ComingSoon.vue");
const NotFound = () => import("../views/NotFound.vue");

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/comingSoon", name: "ComingSoon", component: ComingSoon },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
