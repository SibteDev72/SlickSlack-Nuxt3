<template>
  <div class="min-h-fit w-full">
    <div class="capitalize flex flex-col gap-2">
      <div
        v-for="(item, index) in data"
        :key="index"
        :class="`font-semibold text-xl px-4 py-1 w-full flex flex-row justify-between rounded-lg cursor-pointer ${
          activeCat === item.title
            ? 'bg-buttonPrimary text-white'
            : 'bg-bgColorCard text-textPrimary'
        } md:text-lg`"
        @click="handleClick(item.title)"
      >
        <p>{{ item.title }}</p>
        <img class="w-[25px]" :src="`/new/images/icons/${item.icon}`" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { categoryInterface } from "~/types/Menu";
defineProps<{
  data: categoryInterface[];
}>();
const activeCat = ref<String>();
const category = useSelectedCategory();
const handleClick = (selectedCategory: string) => {
  activeCat.value = selectedCategory;
  category.value = selectedCategory;
};
onMounted(() => {
  activeCat.value = category.value;
});
</script>

<style scoped></style>
