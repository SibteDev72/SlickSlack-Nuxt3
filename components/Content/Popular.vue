<template>
  <div
    id="popular"
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
      class="px-[3rem] w-full grid grid-cols-1 gap-y-[2rem] gap-x-[2rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <CardsMenuItem
        v-for="(data, index) in cardData"
        :details="data"
        :key="index"
        id="MENUcard"
        @update-cart="handleCartUpdate"
      />
    </div>
    <NuxtLink
      to="/Menu"
      class="bg-buttonPrimary font-bold text-md rounded-full px-6 py-1"
      id="moreButton"
    >
      Menu
    </NuxtLink>
  </div>
  <Dialog v-if="!!isOpenDetails" @close-dialog="handleClose">
    <CardsCartDetails :data="cartData" @deleteItem="handleClose" />
  </Dialog>
</template>

<script setup lang="ts">
import type { MenuItemInterface } from "~/types/Menu";
import type { CartItems } from "~/types/Cart";
import { menuItems } from "~/constants/data";

const cardData = ref<MenuItemInterface[]>([]);
const { $gsap, $scrollTrigger } = useNuxtApp();
//@ts-ignore
const cartData = ref<CartItems>({});
const isOpenDetails = ref<boolean>(false);

const handleCartUpdate = (cartDetails: CartItems) => {
  cartData.value = cartDetails;
  isOpenDetails.value = true;
};
const handleClose = (value: boolean) => {
  isOpenDetails.value = value;
};

onMounted(() => {
  cardData.value = menuItems.sort(() => Math.random() - 0.5).slice(0, 4);
  const scrollTriggerInstanceMenu = $scrollTrigger.create({
    trigger: "#popular",
    start: "top+=18% bottom",
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
        delay: 1,
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
  });
  onBeforeUnmount(() => {
    scrollTriggerInstanceMenu.kill();
  });
});
</script>

<style scoped></style>
