<template>
  <nav
    class="flex flex-row gap-6 items-center justify-between px-[15%] py-4 shadow-md"
  >
    <div class="logo">
      <combined-logo />
    </div>
    <div class="flex flex-row gap-6">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/about" exact>About</router-link>
    </div>
    <div class="flex gap-3">icons</div>
  </nav>
</template>

<script>
import CombinedLogo from "@/components/global/logo.vue";
export default {
  name: "NavBar",
  components: {
    CombinedLogo,
  },
};
</script>
