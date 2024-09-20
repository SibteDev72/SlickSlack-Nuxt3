<template>
  <div
    class="px-[2rem] fixed z-[100] top-0 left-0 w-full h-[4rem] text-black bg-[#ffefd9] flex flex-row justify-between items-center"
  >
    <NuxtLink
      to="/#home"
      class="flex gap-2 flex-row justify-center items-center"
    >
      <p class="font-sans font-extrabold text-[15px]">WishEat</p>
      <img class="w-[25px] h-auto" src="/new/images/soup.png" />
    </NuxtLink>
    <div
      class="hidden capitalize font-sans font-semibold md:flex flex-row gap-[1.2rem] lg:gap-[1.5rem] xl:gap-[2rem] 2xl:gap-[2rem] 3xl:gap-[2rem]"
    >
      <div v-for="link in navLinks" :key="link.id" id="navLinks">
        <NuxtLink
          :to="{ path: '/', hash: link.hash }"
          :class="
            activeLink === link.title &&
            'inline border-b-4 border-[#FFAA33] pb-1'
          "
        >
          {{ link.title }}
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-row gap-3 justify-center items-center">
      <img
        class="w-[15px] h-auto"
        src="/new/images/icons/magnifying-glass-1294834.png"
      />

      <NuxtLink to="/CartPage" class="relative">
        <img
          class="w-[20px] h-auto"
          src="/new/images/icons/shopping-304640_1920.png"
        />
        <p
          class="absolute top-[-0.7rem] right-[-0.5rem] text-[12px] w-[15px] h-[15px] bg-buttonPrimary text-textPrimary rounded-full px-1 py-1 flex flex-col justify-center items-center"
        >
          {{ items.length }}
        </p>
      </NuxtLink>
      <div
        @click="
          () => {
            navStatus = !navStatus;
          }
        "
        class="z-[300] relative cursor-pointer md:hidden"
      >
        <div
          :class="`absolute left-0 top-[0px] bg-black w-[1.2rem] h-[0.15rem] transition-all duration-300 ease-in-out ${
            !!navStatus && 'rotate-[45deg]'
          }`"
        />
        <div
          :class="`absolute left-0 top-[0px] bg-black w-[1.2rem] h-[0.15rem] transition-all duration-300 ease-in-out ${
            !!navStatus && 'rotate-[-45deg]'
          }`"
        />
        <div
          :class="`absolute left-0 top-[-5px] bg-black w-[1.2rem] h-[0.15rem] ${
            !!navStatus && 'hidden'
          }`"
        />
        <div
          :class="`absolute left-0 top-[5px] bg-black w-[1.2rem] h-[0.15rem] ${
            !!navStatus && 'hidden'
          }`"
        />
      </div>
      <div
        :class="`capitalize py-12 flex flex-col gap-4 items-center absolute z-[200] right-0 top-0 w-[45vw] h-screen bg-white md:hidden transition-all duration-300 ease-in-out ${
          !!navStatus ? 'translate-x-0' : 'translate-x-[45vw]'
        }`"
      >
        <div v-for="link in navLinks" :key="link.id">
          <span
            @click="
              () => {
                navStatus = !navStatus;
              }
            "
          >
            <NuxtLink
              :to="{ path: '/', hash: link.hash }"
              :class="`text-lg ${
                activeLink === link.title &&
                'inline border-b-4 border-[#FFAA33] pb-1'
              }`"
            >
              {{ link.title }}
            </NuxtLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navLinks } from "~/constants/data";
import { useActiveLink } from "~/utility/helperFunction";
import { useCart } from "~/composables/Cart";

const { items } = useCart();
const { $gsap } = useNuxtApp();
const activeLink = ref<String>("");
const navStatus = ref<boolean>(false);

onMounted(() => {
  $gsap.fromTo(
    "#navLinks",
    { opacity: 0, y: -20 },
    {
      delay: 0.5,
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: "power2.out",
    }
  );
  activeLink.value = "home";
  const handleScroll = () => {
    activeLink.value = useActiveLink(navLinks, window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);
});
</script>

<style scoped></style>
