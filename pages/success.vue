<template>
  <div class="px-[20rem] py-4 relative w-full min-h-[100vh] flex flex-col">
    <button
      class="absolute top-7 left-7 bg-buttonPrimary px-4 py-1 rounded-full font-bold"
      @click="
        () => {
          router.push('/');
        }
      "
    >
      Go to Home
    </button>
    <button
      class="absolute top-7 right-7 bg-buttonPrimary px-4 py-1 rounded-full font-bold"
      @click="
        () => {
          router.push('/Menu');
        }
      "
    >
      Taste more
    </button>
    <img
      class="w-[15rem] self-center"
      src="/new/images/gifs/orderConfirm.gif"
    />
    <p class="self-center text-2xl font-extrabold">
      Order #{{ orderDetails?.id }}
    </p>
    <div :class="`mt-6 grid gap-x-4 grid-cols-2 place-items-center`">
      <div
        v-for="(item, index) in orderDetails?.cartItem"
        :key="index"
        class="w-full min-h-[8rem] bg-bgPrimary flex flex-col justify-center px-8 rounded-xl"
      >
        <p class="text-lg font-extrabold">{{ item.title }}</p>
        <p class="text-sm">Price: {{ item.price }}$</p>
        <p class="text-sm">Quantity: {{ item.quantity }}</p>
        <p class="self-end text-md font-bold">Total: {{ item.totalAmount }}$</p>
      </div>
    </div>
    <div
      class="self-end mt-4 bg-bgPrimary w-full min-h-[10rem] rounded-xl flex flex-col justify-center px-8"
    >
      <p class="text-lg font-extrabold">
        {{ orderDetails?.firstName }} {{ orderDetails?.lastName }}
      </p>
      <p class="text-sm">{{ orderDetails?.email }}</p>
      <p class="text-sm">{{ orderDetails?.address }}</p>
      <p class="self-end text-md font-bold">
        Paid Amount: {{ orderDetails?.orderTotal }}$
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { OrderItemInterface } from "~/types/Order";
import { useFirestore } from "~/composables/Firestore";
const router = useRouter();
const { getOrder } = useFirestore();
const orderDetails = ref<OrderItemInterface | null>();

onMounted(async () => {
  orderDetails.value = await getOrder();
});
</script>
