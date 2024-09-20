<template>
  <div
    class="w-full h-fit py-[3rem] bg-bgPrimary flex flex-col justify-center items-center rounded-xl"
  >
    Total Bill: $ {{ cartTotal }}
  </div>
</template>

<script setup lang="ts">
import { useCart } from "~/composables/Cart";
const { cartTotal } = useCart();
</script>

<style scoped></style>
