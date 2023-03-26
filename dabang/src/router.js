import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import Home2 from "./components/404page.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/map",
    component: Home,
  },
  {
    path: "/:anything(.*)", //404 page /:anything(.*)
    component: Home2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
