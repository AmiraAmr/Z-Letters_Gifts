<template>
  <div class="product">
    Product data
    <div class="grid grid-cols-12 gap-5">
      <div class="imagesContainer col-span-6 grid grid-cols-12">
        <div
          class="col-span-6 flex gap-5"
          v-for="image in images"
          :key="image.alt"
        >
          <div class="w-6 h-6">
            <img class="w-full h-full" :src="image.url" :alt="image.alt" />
          </div>
        </div>
      </div>

      <div class="col-span-6 data">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        animi maiores harum, nemo quod eligendi omnis sed asperiores fugiat
        laborum blanditiis reprehenderit delectus porro minima autem, nihil
        iure, dolore consequuntur.
      </div>
    </div>
  </div>
</template>

<!-- <style scoped lang="scss">

</style> -->

<script>
// @ is an alias to /src
const image_1 = require("../assets/screen-1.jpg");
const image_2 = require("../assets/screen-5.webp");

export default {
  name: "ProductView",
  data: function () {
    return {
      images: [
        {
          text: "text 1",
          url: image_1,
          alt: "image 1",
        },
        {
          text: "text 2",
          url: image_2,
          alt: "image 2",
        },
      ],
      // selectedImage: this.images[0],
      sth: "data",
    };
  },
};
</script>
