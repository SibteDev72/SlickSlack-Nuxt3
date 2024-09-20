<template>
  <div
    ref="cardRef"
    class="relative capitalize flex flex-col justify-start items-center w-[full] min-h-[35vh] shadow-lg rounded-xl bg-bgColorCard lg:min-h-[45vh]"
  >
    <img
      class="mt-1 w-[10rem] py-2 xs:py-1 sm:w-[16rem] lg:w-[14rem] xl:w-[16rem]"
      :src="`/new/images/food/${props.details.imgSrc}`"
    />
    <div
      class="absolute flex flex-col justify-between py-4 items-center bg-white w-full h-[18vh] left-0 bottom-0 rounded-b-xl rounded-tl-[40%] rounded-tr-[40%]"
    >
      <p class="font-extrabold text-md">{{ props.details.title }}</p>
      <p class="font-bold text-sm text-textSecondary">
        {{ props.details.text }}
      </p>
      <div class="w-full px-[2rem] flex flex-row justify-between items-center">
        <p class="font-extrabold text-lg">{{ props.details.price }}</p>
        <!-- <img class="w-[20px]" src="public\assets\favorite.png" /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VanillaTilt from "vanilla-tilt";
const cardRef: any = ref<HTMLElement | null>(null);
import type { menuCardInterface } from "~/types/Menu";
const props = defineProps<{
  details: menuCardInterface;
}>();
onMounted(() => {
  VanillaTilt.init(cardRef.value, { max: 20, speed: 200 });
});
</script>

<style scoped></style>
