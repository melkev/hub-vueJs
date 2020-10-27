<template>
  <div>
    <!-- Hero sectino -->
    <hero />
    <!-- Hero sectino -->
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Courses</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <!-- CARD-ITEM -->
            <course-card />
            <!-- CARD-ITEM-END -->
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <!-- CARD-ITEM -->
            <blog-card />
            <!-- CARD-ITEM-END -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//
import { CourseCard } from "~/components/shared/CourseCard";
import { BlogCard } from "~/components/shared/BlogCard";
import { Hero } from "~/components/shared/Hero";
//
export default {
  components: {
    CourseCard,
    BlogCard,
    Hero
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
.is-black {
  background-color: black;
}
.title {
  font-weight: bold;
  font-size: 43px;
}
.subtitle {
  /*font-weight: bold;*/
  font-size: 25px;
}
.author-name {
  font-size: 20px;
  font-weight: bold;
}
// hero
.links {
  padding-top: 15px;
}
// Home page
.links {
  padding-top: 15px;
}
</style>
