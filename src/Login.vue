<template>
  <div id="login">
    <div class="row">
      <div class="col-md-5"></div>
      <div class="col-md-3 center">
        <h1>To Do List : Login</h1>
      </div>
      <div class="col-md-5"></div>
    </div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <inputbox inputbox boxname="Username" @textChange="handleUserChange" />
        <inputbox inputbox boxname="Password" @textChange="handlePasswordChange" />
        <buttonLogin class="buttonLogin" NameBT="Login"></buttonLogin>
        <router-link to="/Todo">
          <buttons class="buttonLogin" NameBT="Login"></buttons>
        </router-link>
        <router-link to="/Register">
          <buttons class="buttonLogin" NameBT="Register"></buttons>
        </router-link>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>


<script>
import inputbox from "./components/InputBox.vue";
import buttons from "./components/Buttons.vue";

export default {
  name: "App",
  props: ["Username", "password"],

  components: {
    inputbox,
    buttons
  },
  methods: {
    handleUserChange(Username) {
      this.Username = Username;
      alert(Username)
    },
    handlePasswordChange(password) {
      this.password = password;
    }
    // goBack() {
    //   window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    // }
  }
  // computed: {
  //   username() {
  //     // We will see what `params` is shortly
  //     return this.$route.params.username;
  //   }
  // }
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
.buttonLogin {
  margin-bottom: 10px;
}
</style>
