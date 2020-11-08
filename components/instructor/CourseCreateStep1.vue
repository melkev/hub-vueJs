<template>
  <div class="w-full flex-col justify-center items-center">
    <div class="w-full flex-col justify-center items-center mt-8 px-6">
      <h1 class="font-bold text-gray-700 text-xl text-center ">
        Please choose title of your Course.
      </h1>
      <h2 class="font-bold text-gray-600 text-xl mt-4 px-2 text-center">
        No worries, you can change title later.
      </h2>
    </div>
    <form class="bg-gray-300 shadow-md rounded px-8 pt-6 pb-2 my-4 sm:w-4/12 mx-10 sm:mx-auto flex items-center justify-center">
      <div class="mb-2 sm:mb-4">
        <label
            class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
            for="title"
          >
            Title
          </label>
        <input
          @input="emitFormData"
          @blur="$v.form.title.$touch()"
          v-model="form.title"
          :maxLength="50"
          type="text"
          id="title"
          placeholder="e.g. Amazing Course in Flutter!"
          class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-500 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
        />
        <div v-if="$v.form.title.$error"    class="ml-2 text-red-500 text-xs italic">
          <span v-if="!$v.form.title.required" class="help is-danger"
            >Title is required</span
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        title: ""
      }
    };
  },
  validations: {
    form: {
      title: {
        required
      }
    }
  },
  computed: {
    isValid() {
      return !this.$v.$invalid;
    }
  },
  methods: {
    emitFormData() {
      this.$emit("stepUpdated", { data: this.form, isValid: this.isValid });
    }
  }
};
</script>

<style lang="scss" scoped></style>
