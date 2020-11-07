<template>
  <div class="full-page-takeover-header">
    <div class="full-page-takeover-header-logo">
      <p class="full-page-takeover-header-logo-title ">Pearl Hub Admin</p>
    </div>
    <div class="full-page-takeover-header-divider"></div>
    <div class="full-page-takeover-header-text">
      {{ title }}
    </div>
    <div class="hidden lg:flex items-center justify-center ">
            <figure class="w-6 sm:w-8">
              <img class=" hidden lg:block rounded-2xl" :src="user.avatar" />
            </figure>
            <div class=" px-2 py-1 text-white font-semibold rounded text-xl ">
              Welcome {{ user.username }}
            </div>
          </div>
    <slot name="actionMenu"></slot>
    <div v-if="exitLink" class="full-page-takeover-header-button">
      <div class="flex justify-around items-center md:ml-16 lg:ml-24 " >

      <nuxt-link
        :to="exitLink"
          class=" bg-teal-500 hover:bg-teal-700  text-center text-sm px-2 py-1 rounded-xl font-semibold shadow-xl text-gray-800   mt-4 sm:w-20 sm:ml-3 sm:mt-0"
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
