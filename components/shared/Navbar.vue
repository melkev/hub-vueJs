<template>
  <header
    class="bg-gray-100 md:flex md:justify-between md:items-center md:px-4 md:py-3 md:h-16 "
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <nuxt-link class="text-gray-800 font-semibold rounded " to="/">
        <h1
          class="mt-1 block px-2 text-xl sm:text-2xl  sm:mt-0 sm:ml-2 "
        >
          Pearl-hub
        </h1>
      </nuxt-link>
      <div class="md:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-800 hover:text-gray-800 focus:text-gray-800 focus:outline-none sm:mr-8"
        >
          <svg class="h-6 w-6 sm:h-16 sm:w-10 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 md:flex md:p-0"
    >
      <nuxt-link
        to="/"
        class="block px-2 py-1 text-gray-800 font-semibold rounded hover:bg-gray-500"
      >
        Home
      </nuxt-link>
      <nuxt-link
        to="#"
        class="block px-2 py-1 text-gray-800 font-semibold rounded hover:bg-gray-500"
      >
        Courses
      </nuxt-link>
      <nuxt-link
        to="#"
        class="block px-2 py-1 text-gray-800 font-semibold rounded hover:bg-gray-500"
      >
        Blogs
      </nuxt-link>
      <nuxt-link
        to="#"
        class="block px-2 py-1 text-gray-800 font-semibold rounded hover:bg-gray-500"
      >
        About
      </nuxt-link>
      <nuxt-link
        to="#"
        class="block px-2 py-1 text-gray-800 font-semibold rounded hover:bg-gray-500"
      >
        Cv
      </nuxt-link>

      <!--  -->
      <div class="flex justify-around items-center md:ml-16 lg:ml-24 ">
        <template v-if="isAuth">
          <div class="hidden lg:flex items-center justify-center lg:mr-4">
            <figure class="w-6">
              <img class=" hidden lg:block rounded-2xl" :src="user.avatar" />
            </figure>
            <div class=" px-2 py-1 text-gray-800 font-semibold rounded ">
              Welcome {{ user.username }}
            </div>
          </div>
          <!-- If Admin -->
          <button
            v-if="isAdmin"
            class="w-1/3 text-center text-sm px-2 py-1 rounded-xl font-semibold text-gray-800 hover:bg-gray-500  mt-4 sm:w-20 sm:ml-3 sm:mt-0"
            @click="() => $router.push('/instructor')"
          >
            Instructor
          </button>
          <a
            class="w-1/3 text-center text-sm px-2 py-1 rounded-xl font-semibold text-gray-800 hover:bg-gray-500  mt-4 sm:w-20 sm:ml-3 sm:mt-0"
            @click="logout"
          >
            Logout
          </a>
        </template>

        <!--  -->
        <template v-else>
          <nuxt-link
            to="/register"
            class="w-1/3 text-center text-sm px-2 py-1 rounded-xl font-semibold text-gray-800 hover:bg-gray-500 mt-4 sm:w-20 sm:ml-3 sm:mt-0 "
          >
            Sign up
          </nuxt-link>
          <nuxt-link
            to="/login"
            class="w-1/3 text-center text-sm px-2 py-1 rounded-xl font-semibold text-gray-800 hover:bg-gray-500  mt-4 sm:w-20 sm:ml-3 sm:mt-0 "
          >
            Log in
          </nuxt-link>
        </template>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    ...mapGetters({
      user: "auth/authUser",
      isAuth: "auth/isAuthenticated",
      isAdmin: "auth/isAdmin"
    })
  },
  methods: {
    logout() {
      this.$store
        .dispatch("auth/logout")
        .then(() => this.$router.push("/login"));
    }
  }
};
</script>

<style lang="scss" scoped>
.brand-title {
  font-size: 35px;
  font-weight: bold;
}
.navbar-brand {
  padding-right: 30px;
}
.avatar {
  margin-right: 5px;
}
</style>
