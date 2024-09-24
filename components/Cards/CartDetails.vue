<template>
  <div
    class="relative w-full h-fit rounded-xl text-textPrimary bg-bgPrimary flex flex-col justify-between gap-2 items-center px-2 py-8 md:w-[70vw] lg:w-[60vw]"
  >
    <div class="self-start w-full flex flex-row justify-between">
      <div class="flex flex-row gap-4">
        <img
          class="w-[25%] h-auto md:w-[20%]"
          :src="`/new/images/food/${data.imgSrc}`"
        />
        <div class="flex flex-col justify-center gap-1">
          <div
            class="flex flex-row justify-start items-center gap-4 text-sm font-bold md:text-lg lg:text-xl"
          >
            {{ data.title }}
            <img
              class="w-5 md:w-7"
              :src="`/new/images/icons/${data.category.icon}`"
            />
          </div>
          <div class="flex flex-row gap-2">
            <p
              class="text-xs md:sm"
              v-for="(ingrediant, index) in data.ingredients"
              :key="index"
            >
              {{ ingrediant }}
            </p>
          </div>
          <p class="font-bold text-sm md:text-lg lg:text-xl">
            {{ `$${data.price} x ${data.quantity}: $${data.totalAmount}` }}
          </p>
        </div>
      </div>
      <p class="text-textPrimary text-xl lg:text-2xl font-extrabold">
        {{ data.quantity }}
      </p>
    </div>
    <div class="flex flex-row gap-4">
      <img
        :id="`sadIcon${data.id}`"
        class="w-8 opacity-0"
        src="/new/images/SAD1.gif"
      />
      <button
        :disabled="data.quantity === 1"
        @click="handleQuantity('discard')"
        :class="`bg-buttonPrimary text-sm px-4 rounded-lg text-white ${
          data.quantity === 1 && 'opacity-50'
        }`"
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
        :id="`happyIcon${data.id}`"
        class="w-8 opacity-0"
        src="/new/images/YUMMY.gif"
      />
    </div>
    <div
      class="flex flex-col items-center absolute cursor-pointer bottom-3 right-3"
    >
      <img
        :id="`deleteIcon${data.id}`"
        class="w-8 opacity-0"
        src="/new/images/SAD2.gif"
      />
      <img
        src="/new/images/icons/trash.png"
        @click="handleDelete"
        class="w-6"
      />
    </div>
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
  $gsap.fromTo(
    `#deleteIcon${props.data.id}`,
    { opacity: 1, y: 10 },
    {
      opacity: 0,
      duration: 1.5,
      y: -10,
      ease: "power2.out",
    }
  );
  setTimeout(() => {
    removeItem(props.data.id);
    emit("deleteItem", false);
  }, 1200);
};
</script>

<style scoped></style>
