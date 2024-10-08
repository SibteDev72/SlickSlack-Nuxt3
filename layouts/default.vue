<template>
  <div class="overflow-x-hidden w-full flex flex-col gap-8">
    <BarNavbar v-if="!showNavFooter" />
    <slot />
    <ContentContactUs v-if="!showNavFooter" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const showNavFooter = computed(() => {
  const path = route.path;
  return path === "/success";
});
</script>
