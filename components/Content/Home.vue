<template>
  <div
    id="home"
    class="pt-[4rem] px-[1rem] w-full min-h-[100vh] font-sans text-textPrimary bg-bgPrimary flex flex-col-reverse gap-2 justify-evenly md:flex-row md:items-center"
  >
    <div class="flex flex-col gap-2 w-[20rem]">
      <div ref="titleContainerRef" class="overflow-hidden w-[600px]">
        <div
          v-for="(line, index) in titleLines"
          :key="index"
          class="font-extrabold text-[16px] xs:text-[24px] md:text-[20px] lg:text-[22px]"
          id="titleLine"
        >
          {{ line }}
        </div>
      </div>
      <div ref="textContainerRef" class="overflow-hidden w-[600px]">
        <div
          v-for="(line, index) in textLines"
          :key="index"
          class="font-medium text-[15px] xs:text-[22px] md:text-[18px] lg:text-[20px]"
          id="textLine"
        >
          {{ line }}
        </div>
      </div>
      <NuxtLink
        to="/Menu"
        id="button"
        class="bg-buttonPrimary rounded-full px-4 py-1 max-w-max font-bold text-sm"
      >
        Get Started
      </NuxtLink>
    </div>
    <div class="flex flex-col items-center md:w-[50%]">
      <img
        id="food"
        class="w-[40vw] h-auto xm:w-[35vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw]"
        src="/new/images/food/alfredoPasta.png"
      />
      <div class="flex flex-row gap-2">
        <img
          id="food"
          class="w-[35vw] h-auto xs:w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw]"
          src="/new/images/food/creamePizza.png"
        />
        <img
          id="food"
          class="w-[35vw] h-auto xs:w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw]"
          src="/new/images/food/mexicanPasta.png"
        />
      </div>
    </div>
  </div>
  <div class="hidden lg:flex flex-col gap-2 absolute bottom-[4rem] left-0">
    <img id="waves" class="w-[120px] h-auto" src="/new/images/wavy-lines.png" />
    <img id="waves" class="w-[120px] h-auto" src="/new/images/wavy-lines.png" />
  </div>
</template>

<script setup lang="ts">
import { useTextSlpitter } from "~/utility/helperFunction";
const { $gsap } = useNuxtApp();

const data = {
  titleData: "Be the Fastest In Delivery Your Food",
  textData:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus qui.",
};

const titleContainerRef = ref<HTMLElement | null>(null);
const titleLines = ref<string[]>([]);
const textContainerRef = ref<HTMLElement | null>(null);
const textLines = ref<string[]>([]);

onMounted(async () => {
  const titleContainer: any = titleContainerRef.value;
  const textContainer: any = textContainerRef.value;
  titleLines.value = useTextSlpitter(titleContainer, data.titleData, 25);
  textLines.value = useTextSlpitter(textContainer, data.textData, 14);

  await nextTick();

  $gsap.from("#titleLine", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.2,
    duration: 0.5,
    ease: "power2.out",
  });
  $gsap.from("#textLine", {
    delay: 0.5,
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 0.5,
    ease: "power2.out",
  });
  $gsap.from("#dot", {
    delay: 0.7,
    opacity: 0,
    scale: 0,
    stagger: 0.2,
    duration: 0.5,
    ease: "power2.out",
  });
  $gsap.from("#food", {
    delay: 1,
    opacity: 0,
    scale: 0,
    stagger: 0.2,
    duration: 0.5,
    ease: "power2.out",
  });
  $gsap.from("#button", {
    delay: 0.7,
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: "power2.out",
  });
  $gsap.from("#waves", {
    delay: 1.5,
    x: "-120px",
    stagger: 0.6,
    duration: 2,
    ease: "power2.out",
  });
});
</script>

<style scoped></style>

<!-- <div
        id="dot"
        class="absolute top-[1rem] left-[1rem] w-[40px] h-[40px] rounded-full bg-buttonPrimary"
      />
      <div
        id="dot"
        class="absolute top-[10rem] left-[2rem] w-[20px] h-[20px] rounded-full bg-buttonPrimary"
      />
      <div
        id="dot"
        class="absolute bottom-[1rem] w-[30px] h-[30px] rounded-full bg-buttonPrimary"
      />
      <div
        id="dot"
        class="absolute top-[10rem] right-0 w-[50px] h-[50px] rounded-full bg-buttonPrimary"
      /> -->
