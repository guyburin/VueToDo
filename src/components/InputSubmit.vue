<template>
  <div class="hello">
    <div class="input-group mb-3">
      <input
        id="inbox1"
        type="text"
        class="form-control"
        placeholder
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
        v-model="Textvalue"
        @keyup.enter="onTextChange"
      />
      <div class="input-group-prepend">
        <button class="btn btn-outline-info" type="button" id="button-addon1" disabled>{{boxname}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inputbox",
  props: {
    boxname: String
  },
  data() {
    return {
      Textvalue: ""
    };
  },
  methods: {
    onTextChange() {
      this.$emit("addArray", this.Textvalue);
      // alert(this.Textvalue);
    },
  }
};
</script>
