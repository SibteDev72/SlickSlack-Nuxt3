<template>
  <div
    class="pt-[6rem] px-4 w-full min-h-[calc(100vh-4rem)] font-sans grid gap-y-6 grid-cols-[100%] md:grid-cols-[74%_26%] lg:grid-cols-[64%_36%]"
  >
    <div class="h-fit flex flex-col gap-4 px-4">
      <InputsInput
        v-model="form.firstName"
        :label="'First Name'"
        :type="'text'"
        :placeholder="'Enter First Name...'"
      />
      <InputsInput
        v-model="form.lastName"
        :label="'Last Name'"
        :type="'text'"
        :placeholder="'Enter Last Name...'"
      />
      <InputsInput
        v-model="form.address"
        :label="'Address'"
        :type="'text'"
        :placeholder="'Enter Your Address...'"
      />
      <InputsInput
        v-model="form.email"
        :label="'Email Address'"
        :type="'email'"
        :placeholder="'Enter Your Email Address...'"
      />
    </div>
    <div class="h-fit flex flex-col gap-4 px-4">
      <div v-for="(cartItem, index) in items" :key="index">
        <p class="text-lg">{{ cartItem.title }}</p>
        <p class="text-sm font-extrabold">
          {{ cartItem.quantity }} x ${{ cartItem.price }}: ${{
            cartItem.totalAmount
          }}
        </p>
      </div>
      <p class="text-lg">Subtotal: ${{ cartTotal }}</p>
      <button
        @click="handleClick"
        class="bg-buttonPrimary rounded-full w-full py-1"
      >
        Place Order
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { formData } from "~/types/Form";
import { useCart } from "~/composables/Cart";
import { orderMapper } from "~/utility/helperFunction";

const router = useRouter();
const { items, cartTotal, clearCart } = useCart();
const form = ref<formData>({
  firstName: "",
  lastName: "",
  email: "",
  address: "",
});

const handleClick = () => {
  orderMapper(items.value, form.value);
  clearCart();
  router.push("/");
};
</script>
