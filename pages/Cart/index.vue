<template>
  <div
    class="pt-[6rem] px-4 w-full min-h-[calc(100vh-4rem)] font-sans grid gap-y-6 grid-cols-[100%] md:grid-cols-[74%_26%] lg:grid-cols-[64%_36%]"
  >
    <div class="h-[50vh] overflow-y-auto sm:h-[70vh]">
      <div
        :class="`${
          items.length !== 0 && 'hidden'
        } w-full text-2xl font-extrabold h-full flex flex-col justify-center items-center`"
      >
        No Items in Cart
      </div>
      <div class="grid grid-cols-1 gap-y-4">
        <CardsCartDetails
          v-for="(item, index) in items"
          :data="item"
          :key="index"
        />
      </div>
    </div>
    <CardsBilling />
  </div>
</template>

<script setup lang="ts">
import { useCart } from "~/composables/Cart";
const { items } = useCart();
</script>
