# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).
<section class="container ">
    <div class="flex items-center justify-center mt-4 ">
      <div
        class="w-10/12 sm:w-7/12 md:w-4/12 rounded overflow-hidden shadow-lg"
      >
        <div class=" px-4 py-2 ">
          <h3 class="font-bold text-xl sm:text-2xl mb-1 text-center mr-40">Register</h3>
          <p class=" text-lg sm:text-xl mb-2  text-center mr-8">Please register to proceed.</p>
          <figure class="">
              <img
                class=" rounded-full h-32 mx-auto p-1 border-2 border-red-100"
                src="https://via.placeholder.com/300"
              />
            </figure>
            <div class="  -mt-16">
          <div class=" sm:w-10/12 md:w-auto rounded  shadow-lg">
            
              <form class="flex flex-col items-center justify-center pt-16 ">
                <div class="   ">
                  <div class=" m-4  ">
                    <input
                      v-model="form.username"
                      @blur="$v.form.username.$touch()"
                      class=" font-bold rounded-md shadow-lg p-1"
                      type="text"
                      placeholder=" Username"
                    />
                    <div v-if="$v.form.username.$error" class=" m-2  font-normal">
                      <span v-if="!$v.form.username.required" class="  "
                        >Username is required</span
                      >
                      <span v-if="!$v.form.username.minLength" class=" "
                        >Username minlenght is 6 caracters</span
                      >
                    </div>
                  </div>
                </div>
                <div class=" ">
                  <div class="m-4 ">
                    <input
                      v-model="form.name"
                      @blur="$v.form.name.$touch()"
                      class=" font-bold rounded-md shadow-lg p-1 "
                      type="text"
                      placeholder="Name"
                    />
                    <div v-if="$v.form.name.$error" class=" ">
                      <span v-if="!$v.form.name.required" class=""
                        >Name is required</span
                      >
                      <span v-if="!$v.form.name.minLength" class=""
                        >name minimum length is 6 characters</span
                      >
                    </div>
                  </div>
                </div>
                <div class="">
                  <div class="m-4">
                    <input
                      v-model="form.email"
                      @blur="$v.form.email.$touch()"
                      class=" font-bold rounded-md shadow-lg p-1"
                      type="email"
                      placeholder="Your Email"
                    />
                    <div v-if="$v.form.email.$error" class="">
                      <span v-if="!$v.form.email.required" class=""
                        >Email is required</span
                      >
                      <span v-if="!$v.form.email.emailValidator" class=""
                        >Email address is not valid</span
                      >
                    </div>
                  </div>
                </div>
                <div class="">
                  <div class="m-4">
                    <input
                      v-model="form.avatar"
                      @blur="$v.form.avatar.$touch()"
                      class=" font-bold rounded-md shadow-lg p-1"
                      type="text"
                      placeholder="Avatar"
                      autocomplete=""
                    />
                    <div v-if="$v.form.avatar.$error" class="">
                      <span v-if="!$v.form.avatar.url" class=""
                        >Url format is not valid!</span
                      >
                      <span v-if="!$v.form.avatar.supportedFiledType" class=""
                        >Selected file type is not valid!</span
                      >
                    </div>
                  </div>
                </div>
                <div class="">
                  <div class="m-4">
                    <input
                      v-model="form.password"
                      @blur="$v.form.password.$touch()"
                      class=" font-bold rounded-md shadow-lg p-1"
                      type="password"
                      placeholder="Your Password"
                      autocomplete="new-password"
                    />
                    <div v-if="$v.form.password.$error" class="">
                      <span v-if="!$v.form.password.required" class=""
                        >Password is required</span
                      >
                      <span v-if="!$v.form.password.minLength" class=""
                        >Password minimum length is 6 letters</span
                      >
                    </div>
                  </div>
                </div>
                <div class="">
                  <div class="m-4">
                    <input
                      v-model="form.passwordConfirmation"
                      @blur="$v.form.passwordConfirmation.$touch()"
                      class=" font-bold rounded-md shadow-lg p-1"
                      type="password"
                      placeholder="Password Confirmation"
                      autocomplete="off"
                    />
                    <div v-if="$v.form.passwordConfirmation.$error" class="">
                      <span
                        v-if="!$v.form.passwordConfirmation.required"
                        class=""
                        >Password is required</span
                      >
                      <span
                        v-if="!$v.form.passwordConfirmation.sameAsPassword"
                        class=""
                        >Password confirmation should be the same as
                        password</span
                      >
                    </div>
                  </div>
                </div>
                <button
                  @click.prevent="register"
                  :disabled="$v.form.$invalid"
                  type="submit"
                  class=""
                >
                  Register
                </button>
              </form>
            </div>
          </div>
          <p class="">
            <nuxt-link to="/login">Login</nuxt-link> &nbsp;·&nbsp;
            <a>Sign Up With Google</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>