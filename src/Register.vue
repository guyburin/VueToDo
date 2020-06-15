<template>
  <div id="register">
    <h1>{{msg}}</h1>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <form>
          <div class="form-group">
            <inputbox boxname="Username" @textChange="handleUserChange"></inputbox>
          </div>
          <div class="form-group">
            <InputBoxPassword boxname="Password" @textChange="handlePassChange"></InputBoxPassword>
          </div>
          <div class="form-group">
            <InputBoxPassword boxname="CF_Password" @textChange="handleCfPassChange"></InputBoxPassword>
          </div>
          <div v-on:click="registerMember">
            <buttons NameBT="Register" click="registerMember"></buttons>
          </div>
        </form>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import inputbox from "./components/InputBox.vue";
import InputBoxPassword from "./components/InputBox_Password.vue";
import buttons from "./components/Buttons.vue";
import axios from "axios";

export default {
  name: "Register",
  props: ["Username", "Password", "CF_Password"],
  components: {
    inputbox,
    buttons,InputBoxPassword
  },
  data() {
    return {
      msg: "Register page",
      count: ""
    };
  },
  methods: {
    handleUserChange(Username) {
      this.Username = Username;
      // alert(Username);
    },
    handlePassChange(Password) {
      this.Password = Password;
      // alert(Username);
    },
    handleCfPassChange(CF_Password) {
      this.CF_Password = CF_Password;
      // alert(Username);
    },
    registerMember() {
      axios
        .post("http://localhost:3000/addMember", {
          Username: this.Username,
          Password: this.Password,
          CF_Password: this.CF_Password
        })
        .then(response => {
          switch (response.data.register) {
            case 1:alert("Register Success!!");
            this.$router.push({ path: "/Login" });
              break;
            case 2:alert("Have this username please change!!");
              break;
            default :alert("password not match!!");
              break;
          }
        });
    }
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
