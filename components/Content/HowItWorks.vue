<template>
  <div
    id="howItWorks"
    class="pt-[4rem] w-full min-h-[100vh] font-sans flex gap-[1.5rem] flex-col items-center justify-center"
  >
    <div class="w-[70%]">
      <p class="text-textColor3 font-bold text-md text-center md:text-lg">
        How it works
      </p>
      <p
        class="font-extrabold text-xl text-textPrimary text-center md:text-2xl"
      >
        What We Serve
      </p>
      <p class="text-sm text-center text-textSecondary font-bold md:text-xl">
        Product Quality Is Our Priority, And Always Guarantees Freshness And
        Safety Until It is In Your Hands.
      </p>
    </div>
    <div
      class="w-[full] px-[3rem] flex flex-col gap-[3rem] md:flex-row lg:flex-row xl:flex-row"
    >
      <CardsHowItWorks
        id="HITcard"
        v-for="(data, index) in cardData"
        :key="index"
        :details="data"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { howItWorksCardInterface } from "~/types/HowItWorks";
import { howItWorksCards } from "~/constants/data";
const cardData: howItWorksCardInterface[] = howItWorksCards;
const { $gsap, $scrollTrigger } = useNuxtApp();
onMounted(() => {
  const scrollTriggerInstanceHIW = $scrollTrigger.create({
    trigger: "#howItWorks",
    start: "top+=28% bottom",
    onEnter: () => {
      $gsap.from("#HITcard", {
        delay: 0.5,
        opacity: 0,
        x: -80,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      });
    },
  });
  onBeforeUnmount(() => {
    scrollTriggerInstanceHIW.kill();
  });
});
</script>
<style scoped></style>
