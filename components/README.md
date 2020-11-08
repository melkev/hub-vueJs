# COMPONENTS

**This directory is not required, you can delete it if you don't want to use it.**

The components directory contains your Vue.js Components.

_Nuxt.js doesn't supercharge these components._
  <div class="full-page-takeover-header">
    <div class="full-page-takeover-header-logo">
      <p class="full-page-takeover-header-logo text-xl">Pearl Hub Admin</p>
    </div>
    <div class="full-page-takeover-header-divider"></div>
    <div class="hidden sm:block full-page-takeover-header-text  ">
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
      <div class="flex justify-around items-center mr-5 md:ml-16 lg:ml-24 " >

      <nuxt-link
        :to="exitLink"
          class=" bg-teal-500 hover:bg-teal-700  text-center text-base  px-2 py-1 rounded-xl font-semibold shadow-xl text-gray-800    sm:w-20 sm:ml-3 sm:mt-2"
      >
        Exit
      </nuxt-link>
      </div>
    </div>
  </div>