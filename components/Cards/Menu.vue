<template>
  <div
    ref="cardRef"
    @click="handleClick"
    class="cursor-pointer capitalize flex flex-col flex-wrap justify-between items-center w-[full] h-fit shadow-lg rounded-xl bg-bgColorCard"
  >
    <img
      class="w-[12rem] py-2 sm:w-[13rem] lg:w-[10rem] xl:w-[12rem]"
      :src="`/new/images/food/${details.imgSrc}`"
    />
    <div
      class="flex flex-col justify-between py-3 items-center bg-white w-full min-h-[14vh] rounded-b-xl rounded-tl-[40%] rounded-tr-[40%] sm:min-h-[12vh] md:min-h-[10vh] lg:min-h-[16vh] xl:min-h-[18vh]"
    >
      <p class="font-extrabold text-md">{{ details.title }}</p>
      <div class="font-bold text-textSecondary flex flex-row flex-wrap gap-2">
        <p
          class="text-xs"
          v-for="(item, index) in details.ingredients"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
      <div class="w-full px-[2rem] flex flex-row justify-between items-center">
        <p class="font-extrabold text-lg">${{ details.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { foodItemInterface } from "~/types/Menu";
import type { CartItems } from "~/types/CartItems";
import { categories } from "~/constants/data";
import { cartMapper } from "~/utility/helperFunction";
import { useCart } from "~/composables/Cart";
import VanillaTilt from "vanilla-tilt";

const props = defineProps<{
  details: foodItemInterface;
}>();
const emit = defineEmits(["update-cart"]);

const cardRef: any = ref<HTMLElement | null>(null);
const { items } = useCart();
const cartDetails = ref<CartItems>();
const selectedID = useSelectedID();
const selectedCategory = useSelectedCategory();

const handleClick = () => {
  selectedID.value = props.details.id;
  //@ts-ignore
  selectedCategory.value = categories.find(
    (itm) => itm.title === props.details.category
  );
  cartMapper(props.details);
  cartDetails.value = items.value.find((item) => item.id === selectedID.value);
  emit("update-cart", cartDetails.value);
};

onMounted(() => {
  VanillaTilt.init(cardRef.value, { max: 20, speed: 200 });
});
</script>

<style scoped></style>
