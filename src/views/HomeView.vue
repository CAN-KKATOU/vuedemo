<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      {{ message }}
      <component
        v-bind:is="comp"
        name="Jim"
        @receiveMes="changeMes"
      ></component>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import componentA from "@/components/componentA";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    componentA,
  },
  data() {
    return {
      message: null,
      comp: null,
    };
  },
  created() {
    this.comp = componentA;
  },
  methods: {
    changeMes: function (mes) {
      this.message = mes;
    },
  },
};
</script>
