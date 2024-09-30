<template>
  <div class="min-h-fit w-full">
    <div class="capitalize flex flex-col gap-2">
      <div
        v-for="(item, index) in categories"
        :key="index"
        :class="`font-semibold text-xl px-4 py-1 w-full flex flex-row justify-between rounded-lg cursor-pointer ${
          activeCat === item.title
            ? 'bg-buttonPrimary text-white'
            : 'bg-bgColorCard text-textPrimary'
        } md:text-lg`"
        @click="handleClick(item)"
      >
        <p>{{ item.title }}</p>
        <img class="w-[25px]" :src="`/new/images/icons/${item.icon}`" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { categories } from "~/constants/data";
import type { categoryInterface } from "~/types/Menu";
const activeCat = ref<string>();
const category = useSelectedCategory();
const handleClick = (selectedCategory: categoryInterface) => {
  activeCat.value = selectedCategory.title;
  category.value = selectedCategory;
};
onMounted(() => {
  category.value = { id: 1, title: "pizza", icon: "pizza.png" };
  activeCat.value = category.value.title;
});
</script>

<style scoped></style>
