import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import ErrorPage from "./components/404page.vue";
import Sales from "./components/Sales.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/sales",
    component: Sales,
  },
  {
    path: "/search/map",
    component: Home,
  },
  {
    path: "/sales",
    component: Sales,
  },
  {
    path: "/recent-room",
    component: ErrorPage,
  },
  {
    path: "/:anything(.*)", //404 page /:anything(.*)
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
