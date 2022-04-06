import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Web from "../views/Web.vue";
import Kiosk from "../views/Kiosk.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Web",
    component: Web,
  },
  {
    path: "/kiosk",
    name: "Kiosk",
    component: Kiosk,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: (to) => {
      return { name: "Web" };
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
