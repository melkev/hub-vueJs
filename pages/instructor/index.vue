<template>
  <div class="instructor-page ">
    <head-er title="choose your admin page" exitLink="/" />
    <div class="centered mt-10 sm:mt-32">
      <div class="flex flex-col sm:flex-row w-full p-5 justify-center items-center">
        <!-- Go to /instructor/courses -->
        <div class="w-full  flex items-center justify-center bg-gray-200 hover:bg-purple-700 h-48 mb-4 sm:mx-10  text-gray-700 hover:text-gray-400 rounded shadow-xl cursor-pointer" @click="() => $router.push('/instructor/courses')">
          <div class="text-xl font-bold  ">
            Courses
          </div>
        </div>
        <!-- Go to /instructor/blogs -->
        <div class="w-full flex items-center justify-center bg-gray-200 hover:bg-purple-700  h-48 mb-4 sm:mx-10 text-gray-700 hover:text-gray-400 rounded shadow-xl cursor-pointer" @click="() => {}">
          <div class="text-xl font-bold  ">
            Blogs
          </div>
        </div>
        <!-- Go to /instructor/heroes -->
        <div class="w-full flex items-center justify-center bg-gray-200 hover:bg-purple-700 h-48 mb-4 sm:mx-10 text-gray-700 hover:text-gray-400 rounded shadow-xl cursor-pointer" @click="() => {}">
          <div class="text-xl font-bold  ">
            Heroes
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/shared/Header";
export default {
  layout: "instructor",
  components: {
    "head-er": Header
  }
};
</script>
<style scoped lang="scss">
.instructor-page {
  .centered {
   
    display: flex;
    flex-direction: row; /* make main axis horizontal (default setting) */
    justify-content: center; /* center items horizontally, in this case */
    align-items: center; /* center items vertically, in this case */
  }
}

</style>
