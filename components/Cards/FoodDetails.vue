<template>
  <div
    class="relative w-full px-2 py-6 overflow-y-auto h-[85vh] bg-bgPrimary flex flex-col justify-between gap-4 items-center rounded-xl md:w-[60vw]"
  >
    <p class="font-extrabold text-lg md:text-xl lg:text-2xl">
      {{ selectedItem.title }}
    </p>
    <img
      id="pizzaDiv"
      class="w-[28%] h-auto"
      :src="`/new/images/food/${selectedItem.imgSrc}`"
    />
    <button
      class="absolute top-2 right-2 bg-buttonPrimary text-white px-4 text-sm py-1 rounded-full"
      @click="handleClick"
    >
      Add
    </button>
    <div class="self-start px-2">
      <p class="font-bold text-lg md:text-xl lg:text-2xl">Ingrediants</p>
      <div class="flex flex-row gap-3">
        <p
          v-for="(item, index) in selectedItem.ingredients"
          :key="index"
          class="text-textPrimary text-xs md:text-sm font-medium"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-2 sm:grid-cols-4">
      <div
        @click="handleSelect(item)"
        v-for="(item, index) in foodData"
        :key="index"
        :class="`flex flex-col cursor-pointer gap-2 px-2 py-2 rounded-lg items-center ${
          item.title === selectedItem.title
            ? 'border-buttonPrimary border-2'
            : 'border-2 border-transparent'
        }`"
      >
        <img
          class="w-[15vw] md:w-[10vw] xl:w-[8vw] h-auto"
          :src="`/new/images/food/${item.imgSrc}`"
        />
        <p class="text-xs text-center font-bold md:text-sm">{{ item.title }}</p>
      </div>
    </div>
    <Dialog v-if="!!isOpenCart" @close-dialog="handleClose">
      <CardsCartDetails :data="cartDetails" @deleteItem="handleClose" />
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import type { foodItemInterface } from "~/types/Menu";
import type { CartItems } from "~/types/CartItems";
import { useFilteredItems, cartMapper } from "~/utility/helperFunction";
import { useCart } from "~/composables/Cart";

const { $gsap } = useNuxtApp();
const { items } = useCart();
const selectedItem = useSelectedItem();
const selectedID = useSelectedID();
const foodData = ref<foodItemInterface[]>([]);
// @ts-ignore
const cartDetails = ref<CartItems>({});
const isOpenCart = ref<boolean>(false);

const handleClose = (value: boolean) => {
  isOpenCart.value = value;
};

const handleClick = () => {
  selectedID.value = selectedItem.value.id;
  cartMapper(selectedItem.value);
  // @ts-ignore
  cartDetails.value = items.value.find((item) => item.id === selectedID.value);
  isOpenCart.value = true;
};

const handleSelect = (item: any) => {
  $gsap.fromTo(
    "#pizzaDiv",
    { opacity: 1, x: "0vw", rotate: "0deg" },
    {
      rotate: "180deg",
      opacity: 0,
      duration: 1,
      x: "30vw",
      ease: "power2.out",
    }
  );
  setTimeout(() => {
    selectedItem.value = item;
    $gsap.fromTo(
      "#pizzaDiv",
      { opacity: 0, x: "-30vw", rotate: "-180deg" },
      {
        opacity: 1,
        rotate: "0deg",
        duration: 1,
        x: "0vw",
        ease: "power2.out",
      }
    );
  }, 1000);
};

onMounted(() => {
  foodData.value = useFilteredItems(selectedItem.value.category);
});
</script>

<style scoped></style>
