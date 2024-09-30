<template>
  <div class="flex flex-col w-full">
    <label class="px-2">{{ label }}</label>
    <input
      class="outline-buttonPrimary border-2 h-10 px-4"
      v-model="input"
      :type="type"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  type: { type: String, default: "" },
});
const emits = defineEmits(["update:modelValue"]);
const input = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
</script>
