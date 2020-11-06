<template>
  <div class="w-11/12 sm:w-full max-w-2xl mx-auto mt-5">
    <form class="bg-gray-300 shadow-md rounded px-8 pt-6 pb-20 mb-4">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            username
          </label>
          <input
            v-model="form.username"
            @blur="$v.form.username.$touch()"
            class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-500 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <div
            v-if="$v.form.username.$error"
            class="ml-2 text-red-500 text-xs italic"
          >
            <span v-if="!$v.form.username.required" class="  "
              >Username is required</span
            >
            <span v-if="!$v.form.username.minLength" class=" "
              >Username minlenght is 6 caracters</span
            >
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Name
          </label>
          <input
            v-model="form.name"
            @blur="$v.form.name.$touch()"
            class="appearance-none block w-full bg-gray-200 text-gray-800 border mb-2 border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
          <div
            v-if="$v.form.name.$error"
            class="ml-2 text-red-500 text-xs italic"
          >
            <span v-if="!$v.form.name.required">Name is required</span>
            <span v-if="!$v.form.name.minLength" class=""
              >name minimum length is 6 characters</span
            >
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            email
          </label>
          <input
            v-model="form.email"
            @blur="$v.form.email.$touch()"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            placeholder="example@gmail.com"
          />
          <div
            v-if="$v.form.email.$error"
            class="ml-2 text-red-500 text-xs italic"
          >
            <span v-if="!$v.form.email.required">Email is required</span>
            <span v-if="!$v.form.email.emailValidator"
              >Email address is not valid</span
            >
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="avatar"
          >
            avatar
          </label>
          <input
            v-model="form.avatar"
            @blur="$v.form.avatar.$touch()"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="avatar"
            type="text"
            placeholder="Avatar"
            autocomplete=""
          />
          <div
            v-if="$v.form.avatar.$error"
            class="ml-2 text-red-500 text-xs italic"
          >
            <span v-if="!$v.form.avatar.url" class=""
              >Url format is not valid!</span
            >
            <span v-if="!$v.form.avatar.supportedFiledType" class=""
              >Selected file type is not valid!</span
            >
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="password"
          >
            password
          </label>
          <input
            v-model="form.password"
            @blur="$v.form.password.$touch()"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
            id="password"
            type="password"
            autocomplete="new-password"
            placeholder="*********"
          />
          <div
            v-if="$v.form.password.$error"
            class="ml-2 text-red-500 text-xs italic"
          >
            <span v-if="!$v.form.password.required" class=""
              >Password is required</span
            >
            <span v-if="!$v.form.password.minLength" class=""
              >Password minimum length is 6 letters</span
            >
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="confirmpasword"
          >
            confirm Password
          </label>
          <input
            v-model="form.passwordConfirmation"
            @blur="$v.form.passwordConfirmation.$touch()"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="confirmpasword"
            type="password"
            placeholder="********"
            autocomplete="off"
          />
          <div
            v-if="$v.form.passwordConfirmation.$error"
            class="ml-2 text-red-500 text-xs italic"
          >
            <span v-if="!$v.form.passwordConfirmation.required" class=""
              >Password is required</span
            >
            <span v-if="!$v.form.passwordConfirmation.sameAsPassword" class=""
              >Password confirmation should be the same as password</span
            >
          </div>
        </div>
      </div>
      <button
        @click.prevent="register"
        :disabled="$v.form.$invalid"
        type="submit"
        class="float-right bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
      >
        Register
      </button>
    </form>
    <p class="mb-4 text-center text-blue-500">
      <nuxt-link to="/login">Login</nuxt-link> &nbsp;·&nbsp;
      <a class="mx-4">Sign Up With Google</a> &nbsp;·&nbsp;
      <a href="../">Need Help?</a>
    </p>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  url,
  sameAs,
} from "vuelidate/lib/validators";
import { supportedFiledType } from "@/helpers/validators";
export default {
  middleware: "guest",
  data() {
    return {
      form: {
        username: null,
        name: null,
        avatar: null,
        password: null,
        passwordConfirmation: null,
      },
    };
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(6),
      },
      name: {
        required,
        minLength: minLength(6),
      },
      email: {
        required,
        emailValidator: email,
      },
      avatar: {
        url,
        supportedFiledType,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      passwordConfirmation: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  computed: {
    isFormValid() {
      return !this.$v.form.$invalid;
    },
  },
  methods: {
    /**
     *  if form is valid push data and push user in login page
     */
    register() {
      this.$v.form.$touch();
      if (this.isFormValid) {
        this.$store
          .dispatch("auth/register", this.form)
          .then(() => this.$router.push("/login"))
          .catch((err) =>
            this.$toasted.error(
              " Uuuups , unexpected issue please try to regiter again",
              { duration: 3000 }
            )
          );
      }
    },
  },
};
</script>

<style scoped>
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
</style>
