import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/cine/:slug",
    name: "cine",
    component: () => import("@/views/FichaCine.vue"),
  },
];

const router = new VueRouter({
  base: process.env.VUE_APP_ROUTER_BASE,
  mode: "history",
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});

export default router;
