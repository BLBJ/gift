import { createRouter, createWebHashHistory } from "vue-router";

import TheHome from "@/view/home.vue";
import G1 from "@/view/G1.vue";

const routes = [
  { path: "/", name: "Home", component: TheHome },
  { path: "/g1", name: "g1", component: G1 },
  { path: "/g2", name: "g2", component: TheHome },
  { path: "/g3", name: "g3", component: TheHome },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
