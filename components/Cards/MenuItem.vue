<template>
  <div
    class="cursor-pointer flex flex-col justify-between items-center w-full h-fit shadow-lg rounded-xl bg-bgColorCard"
  >
    <img
      class="w-[12rem] py-2 lg:w-[10rem] xl:w-[12rem]"
      :src="`/new/images/food/${details.imgSrc}`"
    />
    <div
      class="flex flex-col justify-between py-3 items-center bg-white w-full min-h-[14vh] sm:min-h-[22vh] md:min-h-[10vh] lg:min-h-[16vh] xl:min-h-[18vh]"
    >
      <p class="font-extrabold text-md lg:text-lg">{{ details.title }}</p>
      <div class="font-bold text-textSecondary flex flex-wrap flex-row gap-2">
        <p
          class="text-xs"
          v-for="(item, index) in details.ingredients"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
      <div class="w-full px-[2rem] flex flex-row justify-between items-center">
        <p class="font-extrabold text-md lg:text-lg">
          {{ `$${details.price}` }}
        </p>
        <button
          @click="handleClick"
          class="bg-buttonPrimary text-white px-5 py-1 text-xs rounded-full xl:text-sm"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuItemInterface } from "~/types/Menu";
import type { CartItems } from "~/types/Cart";
import { cartMapper } from "~/utility/helperFunction";
import { useCart } from "~/composables/Cart";
import { categories } from "~/constants/data";

const props = defineProps<{
  details: MenuItemInterface;
}>();
const emit = defineEmits(["update-cart"]);

const { items } = useCart();
const cartDetails = ref<CartItems>();
const selectedID = useSelectedID();
const category = useSelectedCategory();

const handleClick = (event: MouseEvent) => {
  event.stopPropagation();
  selectedID.value = props.details.id;
  //@ts-ignore
  category.value = categories.find(
    (item) => item.title === props.details.category
  );
  cartMapper(props.details);
  cartDetails.value = items.value.find(
    (item) => item.food_id === selectedID.value
  );
  emit("update-cart", cartDetails.value);
};
</script>

<style scoped></style>
