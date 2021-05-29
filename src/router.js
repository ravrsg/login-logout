import Vue from "vue";
import Router from "vue-router";
import login from "./components/login.vue";
import account from "./components/account.vue";
import logout from "./components/logout.vue";
Vue.use(Router);

const RouterVue = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: login,
    },
    {
      path: "/account",
      name: "account",
      component: account,
    },
    {
      path: "/logout",
      name: "logout",
      component: logout,
    },
  ],
});

export default RouterVue;
