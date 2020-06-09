<template>
  <div id="register">
    <h1>{{msg}}</h1>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <form>
          <div class="form-group">
            <inputbox boxname="Username"></inputbox>
          </div>
          <div class="form-group">
            <inputbox boxname="Password"></inputbox>
          </div>
          <div class="form-group">
            <inputbox boxname="confirm-Password"></inputbox>
          </div>
          <buttons NameBT="Register"></buttons>
        </form>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import inputbox from "./components/InputBox.vue";
import buttons from "./components/Buttons.vue";

export default {
  name: "Register",
  components: {
    inputbox,
    buttons
  },
  data() {
    return {
      msg: "Register page"
    };
  }
};
</script>

<style>
#register {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
