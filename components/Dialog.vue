<template>
  <div
    class="fixed px-4 top-0 left-0 z-[200] w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center"
  >
    <article>
      <slot />
    </article>
    <button
      @click="closeDialog"
      class="px-4 py-2 mt-3 text-white rounded-full bg-buttonPrimary"
    >
      Close
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["close-dialog"]);

const closeDialog = () => {
  emit("close-dialog", false);
};
</script>

<style scoped></style>
