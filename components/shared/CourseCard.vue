<template>
  <div class=" w-11/12 sm:w-6/12 md:w-4/12 m-auto rounded-md overflow-hidden shadow-xl sm:shadow-2xl">
    <div class="card-image">
      <figure class="bg-auto bg-no-repeat">
        <img :src="course.image" alt="Placeholder image" />
      </figure>
    </div>
    <div class="font-bold">
      <div class="p-2">
        <p class=" text-2xl  text-gray-900">{{ course.title | shortenText(45) }}</p>
        <p class="subtitle text-xl p-2 text-gray-800">
          <i> {{ course.author.name }} </i>
        </p>
      </div>
      <div class="text-xl p-2">
        {{ course.subtitle | shortenText(45) }}
        <br />
      </div>
      <div class="price-box p-2 mb-4">
        <span class="price"> {{ course.price }} </span>
        <span class="disc-price"> {{ course.disccountedPrice }} $ </span>
      </div>
    </div>
    <footer class=" flex justify-between">
      <nuxt-link :to="''" class="p-2 px-4 ml-4 mb-4 rounded  bg-blue-600 hover:bg-blue-700 text-white">Learn More</nuxt-link>
      <a target="_" :href="course.productLink" class="p-2 px-4 mr-4 mb-4 rounded  bg-blue-600 hover:bg-blue-700 text-white"
        >Enroll</a
      >
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card-image:hover {
  cursor: pointer;
  opacity: 0.9;
}
.price-box {
  text-align: right;
  .price {
    color: gray;
    font-size: 16px;
    text-decoration: line-through;
  }
  .disc-price {
    font-size: 21px;
    font-weight: bold;
  }
}
</style>
