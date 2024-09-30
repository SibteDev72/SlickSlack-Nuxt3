<template>
  <div
    class="bg-bgColorCard min-w-[48.5vw] min-h-[12rem] xs:min-h-[8rem] sm:min-h-[10rem] rounded-lg flex p-3 gap-4 flex-col"
  >
    <div class="flex flex-row gap-2 items-center">
      <img
        class="w-[50px]"
        :src="`/new/images/avatars/${props.details.avatar}`"
      />
      <div class="flex flex-col">
        <p class="text-textPrimary font-extrabold">{{ props.details.name }}</p>
        <img class="w-[105px]" :src="`/new/images/${props.details.rating}`" />
      </div>
    </div>
    <p class="text-textSecondary font-bold text-sm sm:text-lg xl:text-xl">
      "{{ props.details.text }}""
    </p>
  </div>
</template>

<script setup lang="ts">
import type { reviewsInterface } from "~/types/Reviews";

const props = defineProps<{
  details: reviewsInterface;
}>();
</script>
