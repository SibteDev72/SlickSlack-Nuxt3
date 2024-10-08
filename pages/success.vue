<template>
  <div class="w-full h-[100vh] flex flex-col justify-center gap-2 items-center">
    <img class="w-[15rem]" src="/new/images/gifs/orderConfirm.gif" />
    <p class="text-2xl font-extrabold">Order Confirm</p>
    <button
      class="bg-buttonPrimary px-4 py-1 rounded-full font-bold"
      @click="
        () => {
          router.push('/');
        }
      "
    >
      Go to Home
    </button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>
