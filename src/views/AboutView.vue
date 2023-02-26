<template>
  <div class="about">
    <BreadCrumbs :levelOne="levelOne" :levelTwo="levelTwo" />
    <AboutHeader />
    <div class="flex flex-col gap-16 py-20 px-[10%]">
      <div class="grid grid-cols-12 gap-16 text-start">
        <div class="col-span-6 capitalize text-primary-100 text-7xl font-bold">
          About us.
        </div>
        <div
          class="col-span-6 flex flex-col gap-8 text-2xl text-start leading-relaxed"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            perspiciatis nisi accusamus ut qui ipsum fugiat eveniet? Maxime
            tenetur suscipit quaerat sunt beatae optio, obcaecati illum facere,
            ullam adipisci inventore?
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. ut qui
            ipsum fugiat eveniet? Maxime tenetur suscipit quaerat sunt beatae
            optio, obcaecati illum facere, ullam adipisci inventore?
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur ipsum fugiat eveniet? Maxime
            tenetur suscipit quaerat sunt beatae optio, obcaecati illum facere,
            ullam adipisci inventore?
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-12 text-start items-center">
        <div class="col-span-6">
          <div class="flex flex-col gap-16">
            <div class="capitalize text-7xl font-bold text-black">
              Our inspiration
            </div>
            <div class="text-2xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla
              vel voluptates sint, aliquam, optio asperiores voluptate veritatis
              distinctio aperiam ipsa natus repellendus, enim blanditiis
              molestias. Labore consequuntur exercitationem vel Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Reprehenderit quam
              quia, consequatur modi nobis quisquam cupiditate magnam deserunt
              ipsum, voluptate maiores harum a quis delectus. Harum blanditiis
              facilis animi maiores.
            </div>
          </div>
        </div>
        <div class="col-span-6">
          <img src="@/assets/dummy.png" alt="bracelet" class="w-full h-full" />
        </div>
      </div>

      <div class="grid grid-cols-12 gap-12 text-start items-center">
        <div class="col-span-6">
          <img src="@/assets/dummy.png" alt="bracelet" class="w-full h-full" />
        </div>

        <div class="col-span-6">
          <div class="flex flex-col gap-16">
            <div class="capitalize text-7xl font-bold text-black">
              Our process
            </div>
            <div class="text-2xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla
              vel voluptates sint, aliquam, optio asperiores voluptate veritatis
              distinctio aperiam ipsa natus repellendus, enim blanditiis
              molestias. Labore consequuntur exercitationem vel Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Reprehenderit quam
              quia, consequatur modi nobis quisquam cupiditate magnam deserunt
              ipsum, voluptate maiores harum a quis delectus. Harum blanditiis
              facilis animi maiores.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutHeader from "@/components/AboutUs/Header.vue";
import BreadCrumbs from "@/components/global/BreadCrumbs.vue";

export default {
  name: "AboutView",
  data: function () {
    return {
      levelOne: {
        text: "",
        link: "/",
      },
      levelTwo: {
        text: "About",
        link: "/about",
      },
    };
  },
  components: {
    BreadCrumbs,
    AboutHeader,
  },
};
</script>
