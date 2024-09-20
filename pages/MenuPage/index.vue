<template>
  <div
    class="mt-[4rem] w-full min-h-[calc(100vh-4rem)] font-sans flex flex-col md:flex-row"
  >
    <div
      class="border-b-2 py-1 border-black flex flex-col justify-center items-center md:hidden"
    >
      <div @click="handleDropdown" class="flex flex-row gap-3 items-center">
        <p class="text-md font-extrabold">Categories</p>
        <img
          id="dropArrow"
          :class="`w-4 h-auto transition-all duration-300 ease-in-out ${
            !!isOpenDropdown && 'rotate-[180deg]'
          }`"
          src="/new/images/icons/down-arrow.png"
        />
      </div>
      <div ref="dropdownMenu" class="overflow-hidden mt-3 w-full">
        <SideNavCategoryNav v-if="!!isOpenDropdown" :data="categoryData" />
      </div>
    </div>
    <div class="hidden md:flex w-[20%] pl-2 flex-col gap-2 mt-[2rem]">
      <p class="text-xl font-extrabold">Categories</p>
      <SideNavCategoryNav :data="categoryData" />
    </div>
    <div class="flex flex-col justify-center items-center mt-[2rem] md:w-[80%]">
      <p :class="`font-bold text-xl ${foodData.length !== 0 && 'hidden'}`">
        Food Unavailable
      </p>
      <div
        class="w-full px-[3rem] grid grid-cols-1 gap-x-[2rem] gap-y-[2rem] sm:grid-cols-2 md:px-[2rem]"
      >
        <CardsFoodItem
          id="foodCardRef"
          v-for="(item, index) in foodData"
          :key="index"
          :details="item"
          @update-cart="handleCartUpdate"
          @click="handleSelect(item)"
        />
      </div>
    </div>
  </div>
  <Dialog v-if="!!isOpenDetails" @close-dialog="handleClose">
    <CardsFoodDetails v-if="typeModel === 'foodDetails'" />
    <CardsCartDetails
      v-if="typeModel === 'cartDetails'"
      :data="cartData"
      @deleteItem="handleClose"
    />
  </Dialog>
</template>

<script setup lang="ts">
import type { foodItemInterface, categoryInterface } from "~/types/Menu";
import type { CartItems } from "~/types/CartItems";
import { categories } from "~/constants/data";
import { useFilteredItems } from "~/utility/helperFunction";

const { $gsap } = useNuxtApp();
const category = useSelectedCategory();
const selectedItem = useSelectedItem();
const categoryData: categoryInterface[] = categories;
const foodData = ref<foodItemInterface[]>([]);
const cartData = ref<CartItems>({
  id: 0,
  title: "",
  imgSrc: "",
  category: "",
  ingredients: [],
  price: 0,
  quantity: 0,
  totalAmount: 0,
});
const isOpenDetails = ref<boolean>(false);
const isOpenDropdown = ref<boolean>(false);
const dropdownMenu = ref<HTMLElement | null>(null);
const typeModel = ref<string>("foodDetails");
const handleDropdown = () => {
  isOpenDropdown.value = !isOpenDropdown.value;
  if (isOpenDropdown.value) {
    $gsap.fromTo(
      dropdownMenu.value,
      { height: 0 },
      { height: "auto", duration: 0.3, ease: "power2.out" }
    );
  } else {
    $gsap.fromTo(
      dropdownMenu.value,
      { height: dropdownMenu.value?.offsetHeight },
      { height: 0, duration: 0.3, ease: "power2.in" }
    );
  }
};
const handleSelect = (item: foodItemInterface) => {
  typeModel.value = "foodDetails";
  selectedItem.value = item;
  isOpenDetails.value = true;
};
const handleCartUpdate = (cartDetails: CartItems) => {
  typeModel.value = "cartDetails";
  cartData.value = cartDetails;
  isOpenDetails.value = true;
};
const handleClose = (value: boolean) => {
  isOpenDetails.value = value;
};
watch(
  () => category.value,
  (newValue) => {
    if (newValue) {
      foodData.value = useFilteredItems(newValue);
    }
  }
);
onUpdated(() => {
  $gsap.fromTo(
    "#foodCardRef",
    { y: -100, opacity: 0 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      ease: "power2.out",
    }
  );
});
onMounted(() => {
  foodData.value = useFilteredItems(category.value);
});
</script>

<style scoped></style>
