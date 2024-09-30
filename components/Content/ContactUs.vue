<template>
  <div
    id="contact"
    class="w-full py-[4rem] min-h-[100vh] bg-bgPrimary flex gap-[5rem] flex-col justify-center items-center font-sans"
  >
    <div
      class="w-[calc(100%-3rem)] grid gap-[3rem] grid-cols-2 place-items-start border-b-2 border-black pb-[4rem] md:grid-cols-3 lg:grid-cols-4"
    >
      <div class="flex flex-col gap-3">
        <p class="font-extrabold text-xl flex gap-2">
          Slick Slice
          <img class="w-[30px]" src="/new/images/soup.png" />
        </p>
        <p class="font-bold text-textSecondary w-[10rem]">
          Township Block 2 Sector C1, 27, LHR
        </p>
        <div class="flex flex-row gap-3">
          <div
            class="w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center"
          >
            <img class="w-[20px]" src="/new/images/icons/instagram.png" />
          </div>
          <div
            class="w-[45px] h-[45px] bg-buttonPrimary rounded-full flex justify-center items-center"
          >
            <img class="w-[20px]" src="/new/images/icons/facebook.png" />
          </div>
          <div
            class="w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center"
          >
            <img class="w-[20px]" src="/new/images/icons/twitter.png" />
          </div>
        </div>
      </div>
      <div class="relative flex flex-col gap-4">
        <div
          id="dotFooter"
          class="absolute top-[-1rem] left-[-1rem] w-[40px] h-[40px] rounded-full bg-buttonPrimary"
        />
        <p class="z-[1] flex flex-col font-extrabold text-xl">Company</p>
        <div>
          <p class="text-textSecondary font-bold text-lg">About Us</p>
          <p class="text-textSecondary font-bold text-lg">Career</p>
          <p class="text-textSecondary font-bold text-lg">How It Works</p>
        </div>
      </div>
      <div class="relative flex flex-col gap-4">
        <p class="flex flex-col font-extrabold text-xl">Policy</p>
        <div
          id="dotFooter"
          class="absolute bottom-[-0.4rem] left-[-2rem] w-[60px] h-[60px] rounded-full bg-buttonPrimary"
        />
        <div class="z-[100]">
          <p class="text-textSecondary font-bold text-lg">FAQ</p>
          <p class="text-textSecondary font-bold text-lg">Privacy</p>
          <p class="text-textSecondary font-bold text-lg">Shipping</p>
        </div>
      </div>
      <div class="relative flex flex-col gap-4">
        <p class="flex flex-col font-extrabold text-xl z-[1]">Get In Touch</p>
        <div
          id="dotFooter"
          class="absolute top-[-2rem] right-[-1rem] w-[65px] h-[65px] rounded-full bg-buttonPrimary"
        />
        <div>
          <p class="text-textSecondary font-bold text-lg">+92 111 222 333</p>
          <p class="text-textSecondary font-bold text-lg">devX@tech.com</p>
        </div>
      </div>
    </div>
    <p class="font-bold text-textPrimary text-sm">
      2024 WishEat. ALL RIGHT RESERVED.
    </p>
  </div>
</template>

<script setup lang="ts">
const { $gsap, $scrollTrigger } = useNuxtApp();
onMounted(() => {
  const scrollTriggerInstanceCU = $scrollTrigger.create({
    trigger: "#contact",
    start: "top+=20% bottom",
    onEnter: () => {
      $gsap.from("#dotFooter", {
        delay: 0.5,
        opacity: 0,
        scale: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: "power2.out",
      });
    },
  });
  onBeforeUnmount(() => {
    scrollTriggerInstanceCU.kill();
  });
});
</script>
