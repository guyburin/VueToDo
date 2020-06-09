<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <inputbox inputbox texts="Username" @textChange="handleUserChange"/>
        <inputbox inputbox texts="Password" @textChange="handlePasswordChange"/>
        <!-- <p>{{Username}}</p> -->
        <!-- <p>{{password}}</p> -->
        <buttonLogin class="buttonLogin" NameBT="Login" ></buttonLogin>
        <buttonLogin class="buttonLogin" NameBT="Register" ></buttonLogin>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import inputbox from "./components/inputbox.vue";
import buttonLogin from "./components/buttonLogin.vue"

export default {
  name: "App",
  props: ['Username','password'],
  
  components: {
    inputbox,
    buttonLogin
  },
  methods :{
    handleUserChange (Username){
      this.Username = Username
      // alert(payload)
    },
    handlePasswordChange (password){
      this.password= password
    }
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
.buttonLogin {
  margin-bottom: 10px;
}
</style>
