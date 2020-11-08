<template>
  <div>
    <instructor-header title="Create your courses">
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <div class="flex justify-b items-center md:ml-10  ">
            <nuxt-link
              to="/instructor/course/create"
              class=" bg-teal-500 hover:bg-teal-700  text-center text-sm  px-2 py-1 rounded-xl font-semibold shadow-xl text-gray-800   mt-2  sm:ml-3 sm:mt-0"
            >
              New Course
            </nuxt-link>
            <nuxt-link
              to="/"
              class="ml-1 bg-red-500 hover:bg-red-700  text-center text-sm px-2 py-1 rounded-xl font-semibold shadow-xl text-gray-800   mt-2 sm:w-20 sm:ml-3 md:ml-6 sm:mt-0"
            >
              Student
            </nuxt-link>
          </div>
        </div>
      </template>
    </instructor-header>
    <div class="courses-page">
      <div class="container p-4">
        <h1 class="courses-page-title">Your Courses</h1>
        <div class=" sm:mx-10  flex flex-col justify-around  items-center ">
          <div
            v-for="course in courses"
            :key="course._id"
            class="max-w-sm flex  rounded overflow-hidden shadow-lg"
          >
            <div class="">
              <!-- Navigate to course manage page -->
              <nuxt-link :to="'#'" class=" box">
                <div class="tile-overlay">
                  <span class="tile-overlay-text"> Update Course </span>
                </div>
                <div class="flex flex-col">
                  <div class="column is-narrow">
                    <figure class="image is-4by2 is-128x128">
                      <img
                        :src="
                          'https://i.udemycdn.com/course/750x422/2381802_d90c_3.jpg'
                        "
                      />
                    </figure>
                  </div>
                  <div class=" flex flex-col justify-center  py-2 px-4">
                    <p class="font-bold text-xl py-2 ">
                      {{ course.title }}
                    </p>
                    <p class=" text-base px-2 mb-3">
                      {{ course.subtitle }}
                    </p>
                    <span class="font-semibold italic" :class="'text-teal-700'">
                      {{ course.status }}
                    </span>
                  </div>
                  <div class="column is-narrow flex-centered -mt-8 mb-5 mr-5">
                    <div class="price-title font-semibold italic">
                      {{ course.price || 0 }} $
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InstructorHeader from "@/components/shared/Header";
export default {
  layout: "instructor",

  components: {
    InstructorHeader
  },
  computed: {
    courses() {
      return this.$store.state.instructor.course.items;
    }
  },
  fetch({ store }) {
    return store.dispatch("instructor/course/fetchInstructorCourses");
  }
};
</script>
<style scoped lang="scss">
.tile-image {
  float: left;
}

.flex-centered {
  align-items: center;
  justify-content: flex-end;
  display: flex;
}
.tile-overlay-container {
  position: relative;
  &:hover {
    box-shadow: none;
  }
  &:hover > .tile-overlay {
    background-color: rgba(255, 255, 255, 0.9);
  }
  &:hover .tile-overlay-text {
    visibility: visible;
  }
  .tile-overlay {
    position: absolute;
    display: block;
    height: auto;
    bottom: 0;
    width: auto;
    right: 0;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    &-text {
      color: #58529f;
      visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 18px;
      white-space: pre-wrap;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      font-weight: 700;
      white-space: nowrap;
    }
  }
}
.courses-page {
  padding-top: 60px;
  &-title {
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 20px;
  }
}
</style>
