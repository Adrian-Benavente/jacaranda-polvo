import Vue from "vue";
import App from "./App.vue";
import "./utils/modernizr";
import router from "./router";
import store from "@/store/store";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
