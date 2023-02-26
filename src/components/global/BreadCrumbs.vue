<template>
  <nav
    class="flex px-[10%] py-10 text-grey-200 text-xl"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <a
          :href="levelOne.link"
          class="inline-flex items-center text-xl font-medium text-grey-200 hover:opacity-75"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6 mb-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            ></path>
          </svg>
          {{ levelOne.text }}
        </a>
      </li>
      <li>
        <div class="flex items-center">
          /
          <a
            :href="levelTwo.link"
            class="ml-1 text-xl font-medium text-grey-200 hover:opacity-75 md:ml-2"
          >
            {{ levelTwo.text }}
          </a>
        </div>
      </li>
      <li aria-current="page">
        <div v-if="levelThree" class="flex items-center">
          <svg
            aria-hidden="true"
            class="w-6 h-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span
            class="ml-1 text-xl font-medium text-gray-500 md:ml-2 dark:text-gray-400"
          >
            {{ levelThree.text }}</span
          >
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props: ["levelOne", "levelTwo", "levelThree"],
};
</script>
