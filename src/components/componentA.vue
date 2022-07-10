<template>
  <div id="container">
    <div>
      {{ name }}
      {{ message }}
    </div>
    <button class="btn btn-primary" @click="change">点击</button>
    <button class="btn btn-primary" @click="sendMes">发送信息到父组件</button>
  </div>
</template>

<script>
export default {
  name: "componentA",
  props: {
    name: String,
  },
  data() {
    return {
      message: "Hello, This is component A",
    };
  },
  methods: {
    change: function () {
      this.message = "You have clicked the component A";
    },
    sendMes: function () {
      this.$emit("receiveMes", "这是A组件发送到父组件的信息");
    },
  },
};
</script>

<style scoped>
#container {
  width: 800px;
  margin: 10px auto;
}
</style>
