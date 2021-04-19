import Vue from "vue";
import App from "./App.vue";
import "./utils/modernizr";
import router from "./router";
import store from "@/store/store";
import VueI18n from "vue-i18n";
import i18n from "./i18n";

document.documentElement.lang = localStorage.getItem("lang") || "es";

Vue.use(VueI18n);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
