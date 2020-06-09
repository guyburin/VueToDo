<template>
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active">To do activity</a>
    <a href="#" class="list-group-item list-group-item-action">{{TodoData}}</a>
  </div>
</template>

<script>
export default {
  name:"todo",
  props: {
    TodoData: String
  },
}
</script>