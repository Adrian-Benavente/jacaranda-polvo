import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/",
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    alias: "/home",
  },
  {
    path: "/cine/:slug",
    name: "cine",
    component: () => import("@/views/FichaCine.vue"),
  },
  {
    path: "/albums/:id/:artist/:title",
    name: "albums",
    component: () => import("@/views/FichaAlbums.vue"),
  },
];

const router = new VueRouter({
  base: process.env.VUE_APP_ROUTER_BASE,
  mode: "history",
  routes,
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash && document.querySelector(to.hash)) {
      return { selector: to.hash };
    }
    if (!savedPosition) {
      return {
        x: 0,
        y: 0,
      };
    }
    return false;
  },
});

export default router;
