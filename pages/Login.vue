<template>
  <section class=" w-full ">
    <div class="w-11/12 max-w-xs mx-auto mt-10">
      <div class="text-center mb-2">
        <h2 class="font-bold text-xl leading-tight text-gray-700">Sign In</h2>
      </div>
      <form class="bg-gray-300 shadow-md rounded px-8 pt-6 pb-10 mb-4">
        <div class="mb-2 sm:mb-4">
          <label
            class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
            for="email"
          >
            Username
          </label>
          <input
            v-model="form.email"
            @blur="$v.form.email.$touch()"
            class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-500 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
            id="email"
            type="email"
            placeholder="your email"
            autofocus=""
            autocomplete="email"
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
        <div class="mb-2 sm:mb-4">
          <label
            class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            v-model="form.password"
            @blur="$v.form.password.$touch()"
            class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-500 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
            id="password"
            type="password"
            placeholder="******************"
          />
          <div
            v-if="$v.form.password.$error"
            class="ml-2 text-red-500 text-xs italic"
          >
            <span v-if="!$v.form.password.required">Password is required</span>
          </div>
        </div>
        <div class="flex items-center justify-between mt-8">
          <button
            @click.prevent="login"
            :disabled="$v.form.$invalid"
            :class="$v.form.$invalid ? 'cursor-not-allowed' : 'cursor-pointer'"
            class="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm sm:text-base border-4 text-white py-1 px-2 rounded "
          >
            Sign In
          </button>
          <p class="has-text-grey">
            <a href="../">Need Help?</a>
          </p>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  </section>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  middleware: "guest",
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    form: {
      email: {
        emailValidator: email,
        required
      },
      password: {
        required
      }
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.$invalid;
    }
  },

  methods: {
    login() {
      this.$v.form.$touch();

      if (this.isFormValid) {
        this.$store
          .dispatch("auth/login", this.form)
          .then(() => this.$router.push("/"))
          .catch(() =>
            this.$toasted.error("Wrong email or password", { duration: 3000 })
          );
      }
    }
  }
};
</script>

<style scoped></style>
