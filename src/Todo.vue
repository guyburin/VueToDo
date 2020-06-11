<template>
  <div id="todo">
    <div class="col align-self-center">
      <div class="row head">
        <div class="col"></div>
        <div class="col-md-2">
          <h1>To do page</h1>
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
              {{ item.todo_message }}
              <button
                class="buttondel btn btn-outline-info"
                @click="DeleteTodo"
              >del</button>
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
import axios from "axios";

export default {
  name: "Todo",
  props: ["Todoactivity", "message"],
  components: {
    inputsubmit
  },
  data: function() {
    return {
      items: [],
      numberid: "",
      dataUser: []
    };
  },
  methods: {
    handleTodaChange(Todoactivity) {
      this.Todoactivity = Todoactivity;
      this.items.push(Todoactivity);
      axios
        .post(
          "http://localhost:3000/addTodo/" +
            this.$route.query.id +
            "/" +
            this.Todoactivity +
            "/" +
            1
        )
        .then(response => {
          if (response.data.affectedRows > 0) {
            axios
              .get("http://localhost:3000/Todo/" + this.$route.query.id)
              .then(res => {
                this.items = res.data;
              });
          }
        });
    },
    DeleteTodo() {
      alert("delete");
    },
    getTodo() {
      axios
        .get("http://localhost:3000/Todo/" + this.$route.query.id)
        .then(res => {
          this.items = res.data;
        });
    }
  },
  beforeMount(){
    this.getTodo()
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
</style>
