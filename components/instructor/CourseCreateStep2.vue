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
            <select>
              <option value="default">Select category</option>
              <option v-for="category in categories" :key="category._id">
               {{ category.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.category.items;
    }
  },
 
};
</script>

<style lang="scss" scoped></style>
