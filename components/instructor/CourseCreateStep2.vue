<template>
  <div class="course-create-wrapper">
    <div class="course-create-headerText">
      What category best fits the knowledge you'll share?
    </div>
    <h2 class="course-create-subtitle">
      If you're not sure about the right category, you can change it later.
    </h2>
    <form class="course-create-form">
      <div class="course-create-form-group">
        <div class="course-create-form-field">
          <div class="select is-medium">
            <select
              v-model="form.category"
              @change="emitFormData"
              @blur="$v.form.category.$touch()"
            >
              <!--  -->
              <option value="default">Select category</option>
              <option
                v-for="category in categories"
                :key="category._id"
                :value="category._id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <div v-if="$v.form.category.$dirty && !isValid" class="form-error">
            <span class="help is-danger">category is required</span>
          </div>
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
        category: "default"
      }
    };
  },
  validations: {
    form: {
      category: { required }
    }
  },
  computed: {
    isValid() {
      return !this.$v.$invalid && this.form.category !== "default";
    },

    categories() {
      return this.$store.state.category.items;
    }
  },
  methods: {
    emitFormData() {
      this.$emit("stepUpdated", { data: this.form, isValid: this.isValid });
    }
  }
};
</script>

<style lang="scss" scoped>
.help.is-danger {
  text-align: left;
}
</style>
