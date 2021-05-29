<template>
  <div class="row centered">
    <div class="col-12 col-sm-9 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
      <label class="form-label">Witaj {{ login }}</label>
      <br />
      <button type="button" class="btn btn-info" @click="logOut">Wyloguj</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    login() {
      return this.$store.state.login;
    },
  },
  methods: {
    logOut() {
      this.$router.push("/logout");
      this.$store.state.isLogged = false;
    },
  },
};
</script>

<style></style>
