<template>
  <div id="todo">
    <div class="row head">
      <div class="col-md-5"></div>
      <div class="col-md-2">
        <h1>To do page</h1>
      </div>
      <div class="col-md-5"></div>
    </div>
    <div class="row head">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <inputsubmit boxname="ToDo" @addArray="handleTodaChange"></inputsubmit>
      </div>
      <div class="col-md-4"></div>
    </div>
    <div class="row head">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <ul id="example-2">
          <li v-for="item in items" :key="item">
            {{ item }}
            <button class="buttondel btn btn-outline-info" @click="DeleteTodo">del</button>
          </li>
        </ul>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import inputsubmit from "./components/InputSubmit.vue";
// import ListTodo from "./components/ListTodo.vue";

export default {
  name: "Todo",
  props: ["Todoactivity"],
  components: {
    inputsubmit
    // ListTodo
  },
  data: function() {
    // parentMessage: 0,
    return {
      items: []
    };
  },
  methods: {
    handleTodaChange(Todoactivity) {
      this.Todoactivity = Todoactivity;
      this.items.push(Todoactivity);
      // alert(Todoactivity);
    },
    DeleteTodo(){
      alert("delete")
    }
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
