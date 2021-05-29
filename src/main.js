import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router.js";
import "es6-promise/auto";
import Vuex from "vuex";
import store from "./store.js";
import server from "./services/server.js";
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.prototype.$server = server;
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
