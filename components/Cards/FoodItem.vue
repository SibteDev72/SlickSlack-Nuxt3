<template>
  <div
    class="relative cursor-pointer flex flex-col justify-start items-center w-full min-h-[45vh] shadow-lg rounded-xl bg-bgColorCard"
  >
    <img
      class="mt-4 w-[230px] lg:w-[300px]"
      :src="`/new/images/food/${props.details.imgSrc}`"
    />
    <div
      class="absolute flex flex-col justify-evenly py-1 items-center bg-white w-full h-[22vh] left-0 bottom-0 rounded-b-xl"
    >
      <p class="font-extrabold text-md lg:text-lg">{{ props.details.title }}</p>
      <div class="font-bold text-textSecondary flex flex-row flex-wrap gap-2">
        <p
          class="text-sm lg:text-lg"
          v-for="(item, index) in props.details.ingredients"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
      <div class="w-full px-[2rem] flex flex-row justify-between items-center">
        <p class="font-extrabold text-lg">
          {{ `$${props.details.price}` }}
        </p>
        <button
          @click="handleClick"
          class="bg-buttonPrimary text-white px-5 py-1 rounded-full"
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
