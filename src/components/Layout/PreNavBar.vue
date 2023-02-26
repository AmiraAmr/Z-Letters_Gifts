<template>
  <div
    id="PreNavBar"
    class="flex justify-between items-center px-[15%] py-2 bg-black text-white"
  >
    <div class="flex gap-2" v-for="account in socialMedia" :key="account.name">
      <router-link :to="account.link"
        ><img
          :scr="account.icon"
          :alt="account.name"
          :key="account.name"
          class="w-4 h-4"
      /></router-link>
    </div>
    <div class="">
      <span class="text-secondary-100">Free</span> plane shipping over
      <span class="text-secondary-100">$250</span>
    </div>
    <div class="flex gap-8">
      <Dropdown :title="language" :options="languageOptions" />
      <Dropdown :title="currency" :options="currencyOptions" />
      <div>Account</div>
    </div>
  </div>
</template>

<script>
import Dropdown from "../global/Dropdown.vue";
const facebookIcon = require("../../assets/social-media/logo.png");
export default {
  name: "PreNavBar",
  data: function () {
    return {
      language: "English",
      currency: "US Dollars",
      languageOptions: ["English", "Arabic"],
      currencyOptions: ["US Dollars", "Kuwaiti Dinar"],
      socialMedia: [
        {
          name: "facebook",
          icon: facebookIcon,
          link: "https://www.facebook.com/",
        },
      ],
    };
  },
  components: {
    Dropdown,
  },
};
</script>
