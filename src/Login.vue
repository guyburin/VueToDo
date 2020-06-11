<template>
  <div id="login">
    <b-container class="bv-example-row headmargin">
      <b-row align-h="center">
        <b-col cols="4">
          <h1>To Do List : Login</h1>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="8">
          <inputbox inputbox boxname="Username" @textChange="handleUserChange" />
          <inputbox inputbox boxname="Password" @textChange="handlePasswordChange" />
          <buttonLogin class="buttonLogin" NameBT="Login"></buttonLogin>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="4">
          <!-- <router-link to="/Todo"> -->
          <div v-on:click="getdata">
            <buttons class="buttonLogin" NameBT="Login"></buttons>
          </div>
          <!-- </router-link> -->
          <router-link to="/Register">
            <buttons class="buttonLogin" NameBT="Register"></buttons>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import inputbox from "./components/InputBox.vue";
import buttons from "./components/Buttons.vue";
import axios from "axios";

export default {
  name: "App",
  props: ["Username", "Password"],
  data() {
    return {
      userdata: [],
      errors: []
    };
  },
  components: {
    inputbox,
    buttons
  },
  methods: {
    handleUserChange(Username) {
      this.Username = Username;
    },
    handlePasswordChange(password) {
      this.Password = password;
    },
    getdata() {
      var User = this.Username;
      var Pass = this.Password;
      axios
        .get("http://localhost:3000/member/" + User)
        .then(response => {
          // JSON responses are automatically parsed.
          this.userdata = response.data;
          this.userdata.forEach(item => {
            if (User == item.username && Pass == item.password) {
              this.$router.push({
                path: "/Todo",
                query: {  id: item.member_id }
              });
            } else {
              alert("Username or Password incorrect!!");
            }
          });
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>



<style>
#login {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* background-image: url("/assets/wp.jpg"); */
  /* background-color: aqua; */
}
.buttonLogin {
  margin-bottom: 10px;
}
.headmargin {
  margin-top: 250px;
}
</style>
