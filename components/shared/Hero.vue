<template>
  <section class=" bg-black w-full ">
    <div class="hero-body  ">
      <div
        class=" hero-img"
        :style="{
          background: `url(https://cdn.pixabay.com/photo/2017/10/10/21/49/youtuber-2838945_1280.jpg) no-repeat center center`
        }"
      ></div>
      <div class="container  z-10 flex-col pb-8 ml-6 sm:ml-20">
        <h1
          class="  pt-16 sm:pt-20 text-2xl sm:text-4xl font-bold text-white"
        >
          Super Amazing Promo
        </h1>
        <h2
          class=" mb-8 pt-2 sm:pt-4 text-xl sm:text-2xl font-bold text-white"
        >
          Super Amazing Promo Subtitle
        </h2>
        <a
          target="_"
          :href="'#'"
          class="mt-8  bg-orange-500 text-black font-bold py-2 px-2 rounded"
          >Learn More!</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.hero-body {
  position: relative;
  z-index: 1;
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
  z-index: -1;
}
.user-avatar {
  display: inline-block;
}

.title {
  font-weight: bold;
  font-size: 45px;
}
.subtitle {
  /*font-weight: bold;*/
  font-size: 25px;
}
.author-name {
  font-size: 20px;
  font-weight: bold;
}
</style>
