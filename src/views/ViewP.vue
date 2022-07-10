<template>
  <div id="container">
    This is Component ViewP<br />
    <button @click="routerLink('ViewA')">ViewA</button><br />
    <button @click="routerLink('ViewB')">ViewB</button><br />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "ViewP",
  components: {},
  methods: {
    routerLink: function (viewName) {
      this.$router.push({ name: viewName });
    },
  },
};
</script>

<style scoped></style>
