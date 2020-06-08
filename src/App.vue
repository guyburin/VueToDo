<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <inputbox inputbox />
        <inputbox inputbox />
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import inputbox from "./components/inputbox.vue";

export default {
  name: "App",
  components: {
    inputbox
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
