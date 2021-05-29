<template>
  <div class="row centered">
    <div class="col-12 col-sm-9 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
      <label class="form-label">Login</label>
      <input type="text" class="form-control" v-model="login" />
      <label class="form-label">Hasło</label>
      <input type="password" class="form-control" v-model="password" />
      <br />
      <button type="button" class="btn btn-info p-2" @click="logIn">Zaloguj</button>
      <br />
      <div class="alert alert-danger" role="alert" v-if="!passed">
        Nieprawidłowy login i/lub hasło
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: null,
      password: null,
      isLogged: null,
      passed: true,
    };
  },
  methods: {
    logIn() {
      if (this.$server.check(this.password) && this.login === this.$store.state.correctLogin) {
        this.$store.commit("setName", this.login);
        this.$router.push("/account");
        this.$store.state.isLogged = true;
        this.clear();
      } else {
        this.passed = false;
        this.password = null;
      }
    },
    clear() {
      (this.login = null), (this.password = null), (this.isLogged = null), (this.passed = true);
    },
  },
  mounted() {
    this.clear();
    this.$store.state.isLogged = false;
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
