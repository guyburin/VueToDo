<template>
  <div class="hello">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button class="btn btn-outline-info" type="button" id="button-addon1" disabled>{{boxname}}</button>
      </div>
      <input
        id="inbox1"
        type="text"
        class="form-control"
        placeholder
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
        v-model="Textvalue"
        @change="onTextChange"
      />
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
      this.$emit("textChange", this.Textvalue);
    }
  }
};
</script>
