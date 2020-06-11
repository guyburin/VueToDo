<template>
 <ul id="example-2">
            <li v-for="item in posts" :key="item">
              {{ item.username }}+{{ item.password }}
              <button class="buttondel btn btn-outline-info" @click="DeleteTodo">del</button>
            </li>
          </ul>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get('http://localhost:3000/member')
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>