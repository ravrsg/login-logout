import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: null,
    correctLogin: "admin",
    isLogged: false,
  },
  mutations: {
    setName(state, name) {
      state.login = name;
    },
  },
});
