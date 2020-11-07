<template>
  <div>
    <hero />

    <section class="container p-5">
      <h1 class="text-2xl sm:text-4xl font-bold pb-6 ml-4 sm:ml-12">Featured Courses</h1>
      <div class="columns">
        <!-- iterate columns with v-for and d'ont forget :key -->

        <div
          v-for="course in courses"
          :key="course._id"
          class="column is-one-quarter"
        >
          <!--  pass a course as a prop to courese card -->
          <course-card :course="course" />
        </div>
      </div>
    </section>
    <section class="container p-5">
      <h1 class="title">Featured Articles</h1>
      <div class="flex">
        <div class="container">
          <!-- CARD-ITEM -->
          <blog-card />
          <!-- CARD-ITEM-END -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//
import CourseCard from "~/components/shared/CourseCard";
import BlogCard from "~/components/shared/BlogCard";
import Hero from "~/components/shared/Hero";
import { mapState } from "vuex";
//
export default {
  components: {
    "course-card": CourseCard,
    "blog-card": BlogCard,
    hero: Hero
  },
  computed: {
    ...mapState({
      courses: state => state.course.items
    })
  },
  async fetch({ store }) {
    await store.dispatch("course/fetchCourse");
  }
};
</script>

<style scoped lang="scss">
// card item

// card item end

// hero
.hero-body {
  position: relative;
}
.hero-img {
  opacity: 0.8;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.user-avatar {
  display: inline-block;
}

.subtitle {
  /*font-weight: bold;*/
  font-size: 25px;
}

// hero
.links {
  padding-top: 15px;
}
</style>
