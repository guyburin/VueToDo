<template>
        <button class="btn btn-outline-info" type="button">{{NameBT}}</button>
</template>

<script>
export default {
  name: "inputbox",
  props: {
    NameBT: String
  },
  data() {
    return {
      Textvalue: "",
      idkey:""
    };
  },
  methods: {
    onTextChange() {
      this.$emit("textChange", this.Textvalue);
    }
  }
};
</script>
