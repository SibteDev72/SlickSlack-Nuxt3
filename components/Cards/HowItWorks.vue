<template>
  <div
    class="font-sans h-[fit] w-full rounded-xl flex gap-3 flex-col justify-center items-center"
  >
    <img class="w-[50%]" :src="`/new/images/${details.imgSrc}`" />
    <p class="font-extrabold text-xl">{{ props.details.title }}</p>
    <p class="text-textSecondary font-bold text-center">
      {{ props.details.text }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { howItWorksCardInterface } from "~/types/HowItWorks";
const props = defineProps<{
  details: howItWorksCardInterface;
}>();
</script>

<style scoped></style>
