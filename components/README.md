# COMPONENTS

**This directory is not required, you can delete it if you don't want to use it.**

The components directory contains your Vue.js Components.

_Nuxt.js doesn't supercharge these components._

<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6" role="navigation" aria-label="main navigation">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <nuxt-link class="navbar-item" to="/">
       <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <h1 class="brand-title">Pearl-hub</h1>
      </nuxt-link>
      <!-- Adds click to open -->
      <!-- Adds active class -->
      <a
        @click="() => {}"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <!-- Adds active class -->
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Home
        </nuxt-link>
        <nuxt-link to="#" class="navbar-item">
          Courses
        </nuxt-link>
        <nuxt-link to="#" class="navbar-item">
          Blogs
        </nuxt-link>
        <nuxt-link to="#" class="navbar-item">
          About
        </nuxt-link>
        <nuxt-link to="#" class="navbar-item">
          Cv
        </nuxt-link>
        
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- If Authenticated -->
            <template v-if="isAuth">
              <figure class="image avatar is-32x32 m-r-sm">
                <img class="is-rounded" :src="user.avatar" />
              </figure>
              <div class="m-r-sm m-b-sm">Welcome {{ user.username }}</div>
              <!-- If Admin -->
              <button
                v-if="isAdmin"
                class="button is-link is-outlined"
                @click="() => $router.push('/instructor')"
              >
                Instructor
              </button>
              <a class="button is-primary" @click="logout">
                Logout
              </a>
            </template>
            <template v-else>
              <nuxt-link to="/register" class="button is-primary">
                Sign up
              </nuxt-link>
              <nuxt-link to="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                Log in
              </nuxt-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>