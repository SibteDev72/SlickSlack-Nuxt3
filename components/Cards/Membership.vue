<template>
  <div
    class="flex gap-4 flex-col justify-center items-center relative py-[3rem] px-[2rem] w-full min-h-fit lg:min-h-[35vh] rounded-xl poster"
  >
    <div
      class="absolute w-full h-full rounded-xl top-0 left-0 bg-black bg-opacity-70"
    />
    <p
      class="z-10 w-full font-extrabold text-white text-center text-lg lg:text-xl xl:text-2xl"
    >
      Join our membership and get discount up to 50%
    </p>
    <button
      class="z-[10] bg-buttonPrimary rounded-full px-4 py-1 max-w-max font-bold text-sm"
    >
      Sign Up
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.poster {
  background-image: url("/new/images/foodPoster.jpg");
  background-size: cover;
}
</style>
