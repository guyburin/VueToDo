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
            <inputbox boxname="Password" @textChange="handlePassChange"></inputbox>
          </div>
          <div class="form-group">
            <inputbox boxname="CF_Password" @textChange="handleCfPassChange"></inputbox>
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
import buttons from "./components/Buttons.vue";
import axios from "axios";

export default {
  name: "Register",
  props: ["Username", "Password", "CF_Password"],
  components: {
    inputbox,
    buttons
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
      if (this.Password == this.CF_Password) {
        var Username = this.Username;
        var Password = this.Password;
        axios.get("http://localhost:3000/member/" + Username).then(response => {
          // JSON responses are automatically parsed.
          this.count = response.data.length;
          if (this.count == 0) {
            axios
              .post(
                "http://localhost:3000/addMember/" +
                  Username +
                  "/" +
                  Password +
                  ""
              )
              .then(response => {
                if (response.data.affectedRows > 0) {
                  alert("Register Success!!");
                  this.$router.push({ path: "/Login" });
                }
              });
          } else {
            alert("Have this username please change!!");
          }
        });
      } else {
        alert("password not match!!");
      }
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
