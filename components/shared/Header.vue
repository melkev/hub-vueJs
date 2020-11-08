<template>
  <div
    class="w-full bg-purple-700 flex justify-between items-center md:px-4 md:py-3 md:h-16"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0 ">
      <h1
        class="text-white px-2 py-3 sm:p-0 mt-1 block  text-xl sm:text-2xl  sm:mt-0 sm:ml-2"
      >
        Pearl Admin
      </h1>
    </div>

    <div class="hidden w-1/3 lg:flex   items-center  justify-center ">
      <figure class="w-6 sm:w-8 ">
        <img class=" rounded-full  " :src="user.avatar" />
      </figure>
      <div class=" px-2 py-1 text-white font-semibold rounded text-xl ">
        Welcome {{ user.username }}
      </div>
    </div>
    <slot name="actionMenu"></slot>
    <div v-if="exitLink" class="">
      <div class="flex justify-around items-center mr-5 md:ml-16 lg:ml-24 ">
        <nuxt-link
          :to="exitLink"
          class=" bg-teal-500 hover:bg-teal-700  text-center text-base  px-2 py-1 rounded-xl font-semibold shadow-xl text-gray-800    sm:w-20 sm:ml-3 sm:mt-2"
        >
          Exit
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    exitLink: {
      required: false,
      type: String,
      default: null
    }
  },
  computed: {
    user() {
      return this.$store.getters["auth/authUser"] || {};
    }
  }
};
</script>
<style scoped>
.user-box {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-right: 10px;
  font-size: 17px;
  font-weight: bold;
}
.avatar {
  margin-right: 5px;
}

</style>
