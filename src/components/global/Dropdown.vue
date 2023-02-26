<template>
  <div id="dropdown" class="antialiased flex flex-col h-auto">
    <div class="flex justify-center items-center flex-1">
      <AppDropdown :title="title">
        <template>
          <button
            class="relative flex items-center focus:outline-none pl-5 pr-3 py-2 rounded-lg font-semibold text-white cursor-pointer hover:opacity-70"
          >
            {{ title }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="ml-1 h-5 w-5 fill-[#fff] text-white"
            >
              <path
                d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
              ></path>
            </svg>
          </button>
        </template>
        <AppDropdownContent>
          <div v-for="option in options" :key="option.index">
            <AppDropdownItem>{{ option }}</AppDropdownItem>
          </div>
        </AppDropdownContent>
      </AppDropdown>
    </div>
  </div>
</template>

<script>
import AppDropdown from "./drop-down-components/AppDropdown.vue";
import AppDropdownContent from "./drop-down-components/AppDropdownContent.vue";
import AppDropdownItem from "./drop-down-components/AppDropdownItem.vue";

export default {
  name: "DropDown",
  data() {
    return {
      active: false,
    };
  },
  props: ["title", "options"],
  components: {
    AppDropdown,
    AppDropdownContent,
    AppDropdownItem,
  },
};
</script>
