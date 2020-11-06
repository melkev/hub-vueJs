<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="px-6 pt-4 pb-2">
      <p class="mb-1 ml-2 text-2xl font-bold">Some Super Title</p>
      <p class="mb-2 text-xl font-bold"><i>Some Super Subtitle</i></p>

      <div class="text-gray-700 text-base">
        Some Description
        <br />
      </div>
    </div>
    <footer class=" ">
      <nuxt-link
        :to="'#'"
        class="inline-block bg-red-500 rounded px-3 py-1 text-sm font-semibold text-gray-900 ml-2 my-4"
        >Read More</nuxt-link
      >
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scooped></style>
