<template>
  <div
    id="menu"
    class="pt-[4rem] w-full min-h-[100vh] font-sans flex gap-[2rem] flex-col items-center"
  >
    <div class="w-[70%]">
      <p class="text-textColor3 font-bold text-md text-center md:text-lg">
        Our Menu
      </p>
      <p
        class="font-extrabold text-xl text-textPrimary text-center md:text-2xl"
      >
        Our Popular Menu
      </p>
      <p class="text-sm text-center text-textSecondary font-bold md:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit ut aliquam
      </p>
    </div>
    <div
      class="px-[3rem] w-full grid grid-cols-1 gap-y-[2rem] gap-x-[2rem] sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
    >
      <CardsMenu
        v-for="(data, index) in cardData"
        :details="data"
        :key="index"
        id="MENUcard"
      />
    </div>
    <NuxtLink
      to="/MenuPage"
      class="bg-buttonPrimary font-bold text-md rounded-full px-6 py-1 mt-4"
      id="moreButton"
    >
      More Menu
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { menuCardInterface } from "~/types/Menu";
import { menuCards } from "~/constants/data";
const cardData: menuCardInterface[] = menuCards;
const { $gsap, $scrollTrigger } = useNuxtApp();
onMounted(() => {
  $scrollTrigger.create({
    trigger: "#menu",
    start: "top+=26% bottom",
    onEnter: () => {
      $gsap.from("#MENUcard", {
        delay: 0.5,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      });
      $gsap.from("#moreButton", {
        delay: 1.1,
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
  });
});
</script>

<style scoped></style>
