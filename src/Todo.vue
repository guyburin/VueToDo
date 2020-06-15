<template>
  <div id="todo">
    <div class="col align-self-center">
      <div class="row head">
        <div class="col"></div>
        <div class="col-md-4">
          <h1>To do page</h1>
          <button class="buttondel btn btn-outline-info" @click="logout">Logout</button>
        </div>
        <div class="col"></div>
      </div>
      <div class="row head">
        <div class="col"></div>
        <div class="col-md-4">
          <inputsubmit boxname="ToDo" @addArray="handleTodaChange"></inputsubmit>
        </div>
        <div class="col"></div>
      </div>
      <div class="row head">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <ul id="example-2">
            <li v-for="item in items" :key="item.todo_id">
              <div class="row margin">
                <div class="col">{{ item.todo_message }}</div>
                <div class="col-md-3">
                  <button
                    class="buttondel btn btn-outline-info"
                    @click="DeleteTodo(item.todo_id)"
                  >del</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import inputsubmit from "./components/InputSubmit.vue";
// import buttondel from "./components/ButtonDel.vue";
import axios from "axios";
const secretKey = "GBP";

export default {
  name: "Todo",
  props: ["Todoactivity", "message"],
  components: {
    inputsubmit
    // buttondel
  },
  data: function() {
    return {
      items: [],
      numberid: "",
      dataUser: [],
      todo_id: ""
    };
  },
  methods: {
    handleTodaChange(Todoactivity) {
      let token = localStorage.getItem("token");
      const payload_data = this.$jwt.decode(token, secretKey);
      this.Todoactivity = Todoactivity;
      this.items.push(Todoactivity);
      axios
        .post(
          "http://localhost:3000/addTodo",{
            MemberId : payload_data.id,
            Todo : this.Todoactivity,
            Status : 1
          } 
        )
        .then(response => {
          if (response.data.affectedRows > 0) {
            this.getTodo();
          }
        });
    },
    DeleteTodo(_id) {
      axios.post("http://localhost:3000/delTodo",{Todo_id:_id}).then(response => {
        if (response.data.changedRows > 0) {
          this.getTodo();
        }
      });
    },
    getTodo() {
      let token = localStorage.getItem("token");
      const payload_data = this.$jwt.decode(token, secretKey);
      axios.get("http://localhost:3000/Todo/",{MemberId :  payload_data.id}).then(res => {
        this.items = res.data;
      });
    },
    logout(){
      localStorage.clear();
       this.$router.push({
                path: "/Login",
              });
    }
  },
  beforeMount() {
    this.getTodo();
  }
};
</script>

<style>
.head {
  margin-top: 10px;
}
.buttondel {
  margin-left: 10px;
}
.margin {
  margin-top: 10px;
}
</style>
