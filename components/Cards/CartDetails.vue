<template>
  <div
    class="relative w-full h-fit rounded-xl text-textPrimary bg-bgPrimary flex flex-col justify-between gap-2 items-center px-2 py-8 md:w-[70vw] lg:w-[60vw]"
  >
    <div class="self-start w-full flex flex-row justify-between">
      <div class="flex flex-row gap-4">
        <img
          class="w-[25%] h-auto md:w-[20%]"
          :src="`/new/images/food/${props.data.imgSrc}`"
        />
        <div class="flex flex-col justify-center gap-1">
          <p class="text-sm font-bold md:text-lg lg:text-xl">
            {{ props.data.title }}
          </p>
          <div class="flex flex-row gap-2">
            <p
              class="text-xs md:sm"
              v-for="(ingrediant, index) in props.data.ingredients"
              :key="index"
            >
              {{ ingrediant }}
            </p>
          </div>
          <p class="font-bold text-sm md:text-lg lg:text-xl">
            {{
              `$${props.data.price} x ${props.data.quantity}: $${props.data.totalAmount}`
            }}
          </p>
        </div>
      </div>
      <p class="text-textPrimary text-xl lg:text-2xl font-extrabold">
        {{ props.data.quantity }}
      </p>
    </div>
    <div class="flex flex-row gap-4">
      <img
        :id="`sadIcon${props.data.id}`"
        class="w-6 h-6 opacity-0 sm:w-8 sm:h-8"
        src="public/new/images/sad.gif"
      />
      <button
        :disabled="props.data.quantity === 1"
        @click="handleQuantity('discard')"
        class="bg-buttonPrimary text-sm px-4 rounded-lg text-white"
      >
        Discard
      </button>
      <button
        @click="handleQuantity('add')"
        class="bg-buttonPrimary text-sm px-4 rounded-lg text-white"
      >
        Add
      </button>
      <img
        :id="`happyIcon${props.data.id}`"
        class="w-6 opacity-0 sm:w-8 sm:h-8"
        src="public/new/images/YUMMY.gif"
      />
    </div>
    <button @click="handleDelete" class="absolute bottom-3 right-3">
      Delete
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCart } from "~/composables/Cart";
import type { CartItems } from "~/types/CartItems";
const { $gsap } = useNuxtApp();
const { updateQuantityItem, removeItem } = useCart();

const props = defineProps<{
  data: CartItems;
}>();
const emit = defineEmits(["deleteItem"]);

const handleQuantity = (type: string) => {
  updateQuantityItem(props.data.id, type);
  type === "discard"
    ? $gsap.fromTo(
        `#sadIcon${props.data.id}`,
        { opacity: 1, x: 40 },
        {
          opacity: 0,
          duration: 2.5,
          x: -40,
          ease: "power2.out",
        }
      )
    : $gsap.fromTo(
        `#happyIcon${props.data.id}`,
        { opacity: 1, x: -40 },
        {
          opacity: 0,
          duration: 2.5,
          x: 40,
          ease: "power2.out",
        }
      );
};

const handleDelete = () => {
  removeItem(props.data.id);
  emit("deleteItem", false);
};
</script>

<style scoped></style>
