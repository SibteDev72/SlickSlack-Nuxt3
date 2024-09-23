<template>
  <div
    class="cursor-pointer flex flex-col justify-between items-center w-full h-fit shadow-lg rounded-xl bg-bgColorCard"
  >
    <img
      class="w-[12rem] py-2 lg:w-[10rem] xl:w-[12rem]"
      :src="`/new/images/food/${props.details.imgSrc}`"
    />
    <div
      class="flex flex-col justify-between py-3 items-center bg-white w-full min-h-[14vh] sm:min-h-[22vh] md:min-h-[10vh] lg:min-h-[16vh] xl:min-h-[18vh]"
    >
      <p class="font-extrabold text-md lg:text-lg">{{ props.details.title }}</p>
      <div class="font-bold text-textSecondary flex flex-row gap-2">
        <p
          class="text-xs lg:text-sm"
          v-for="(item, index) in props.details.ingredients"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
      <div class="w-full px-[2rem] flex flex-row justify-between items-center">
        <p class="font-extrabold text-md lg:text-lg">
          {{ `$${props.details.price}` }}
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
import type { foodItemInterface } from "~/types/Menu";
import type { CartItems } from "~/types/CartItems";
import { cartMapper } from "~/utility/helperFunction";
import { useCart } from "~/composables/Cart";

const props = defineProps<{
  details: foodItemInterface;
}>();
const emit = defineEmits(["update-cart"]);

const { items } = useCart();
const cartDetails = ref<CartItems>();
const selectedID = useSelectedID();

const handleClick = (event: MouseEvent) => {
  event.stopPropagation();
  selectedID.value = props.details.id;
  cartMapper(props.details);
  cartDetails.value = items.value.find((item) => item.id === selectedID.value);
  emit("update-cart", cartDetails.value);
};
</script>

<style scoped></style>
