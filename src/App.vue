<template>
  <pre-nav-bar></pre-nav-bar>
  <nav-bar></nav-bar>
  <router-view />
</template>

<style lang="scss">
@import "@/styles/main.css";

#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import PreNavBar from "@/components/Layout/PreNavBar.vue";
import NavBar from "@/components/Layout/NavBar.vue";

export default {
  name: "app",
  components: {
    PreNavBar,
    NavBar,
  },
};
</script>
