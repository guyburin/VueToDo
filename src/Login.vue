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
          <InputBoxPassword
            inputbox
            types="password"
            boxname="Password"
            @textChange="handlePasswordChange"
          />
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
import InputBoxPassword from "./components/InputBox_Password.vue";
import buttons from "./components/Buttons.vue";
import axios from "axios";
const secretKey ="GBP";


export default {
  name: "App",
  props: ["Username", "Password"],
  data() {
    return {
      userdata: [],
      errors: [],
    };
  },
  components: {
    inputbox,
    buttons,
    InputBoxPassword
  },
  // localStorage: {
  //   token : String
  // },

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
      // alert(User+" "+Pass)
      axios
        .post("http://localhost:3000/Login", {
          Username: User,
          Password: Pass
        })
        .then(response => {
          this.userdata = response.data;
          // alert(this.userdata.accessToken)
          localStorage.setItem("token", this.userdata.accessToken);
          let token =localStorage.getItem("token")
          // let payload = token.split(".")[1]
          const payload_data = this.$jwt.decode(token, secretKey)
          // alert(payload_data.login)
          if(payload_data.login){
             this.$router.push({
                path: "/Todo",
              });
          }else{
            alert("Username or password incorrect")
          }
          
          //---------------
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
