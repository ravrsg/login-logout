<template>
  <div class="row centered">
    <div class="col-12 col-sm-9 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
      <div class="alert alert-info" role="info">
        Wylogowano
      </div>
      <br />
      <button type="button" class="btn btn-info" @click="backToLogIn">Zaloguj ponownie</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backToLogIn() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
