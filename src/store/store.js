import Vue from "vue";

const store = Vue.observable({
  state: {
    sound: true,
  },
});

Vue.prototype.$store = store;

export default store;
