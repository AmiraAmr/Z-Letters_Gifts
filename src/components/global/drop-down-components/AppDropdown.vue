<template>
  <div
    @click="toggle"
    v-click-away="onClickAway"
    class="relative cursor-pointer"
  >
    <slot name="toggler"> {{ title }} </slot>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppDropdown",
  provide() {
    return {
      sharedState: this.sharedState,
    };
  },
  data() {
    return {
      sharedState: {
        active: false,
      },
    };
  },
  props: ["title"],
  methods: {
    toggle() {
      console.log("toggled");
      this.sharedState.active = !this.sharedState.active;
    },
    onClickAway() {
      this.sharedState.active = false;
    },
  },
};
</script>
