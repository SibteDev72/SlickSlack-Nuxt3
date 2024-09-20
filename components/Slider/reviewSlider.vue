<template>
  <div class="relative overflow-hidden">
    <div ref="slider" class="flex gap-[1vw] transition-transform ease-in-out">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: number;
}>();

const slider = ref<HTMLElement | null>(null);

onUpdated(() => {
  const scrollStep = 49.5;
  const currentPosition: number = (props.value - 1) * scrollStep;
  if (slider.value) {
    slider.value.style.transform = `translateX(${"-" + currentPosition}vw)`;
  }
});
</script>

<style scoped></style>
