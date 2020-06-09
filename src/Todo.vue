<template>
  <div id="todo">
      <div class="row head">
      <div class="col-md-5"></div>
      <div class="col-md-2"><h1>To do page</h1></div>
      <div class="col-md-5"></div>
    </div>
    <div class="row head">
      <div class="col-md-4"></div>
      <div class="col-md-4"><inputsubmit boxname="ToDo"></inputsubmit></div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import inputsubmit from "./components/InputSubmit.vue";
export default {
  components: {
    inputsubmit
  }
};
</script>

<style>
    .head{
        margin-top: 10px;
    }
</style>
