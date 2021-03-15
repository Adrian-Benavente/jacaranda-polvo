import Vue from "vue";

const store = Vue.observable({
  state: {
    loading: true,
    percentageLoading: 0,
    sound: true,
  },
});

Vue.prototype.$store = store;

export default store;
