<template>
  <div
    id="about"
    class="pt-[4.2rem] w-full min-h-[calc(100vh-4rem)] flex flex-col gap-[2rem] font-sans px-[1rem] sm:px-[3rem]"
  >
    <div
      class="gap-10 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:gap-0"
    >
      <div class="shadow-2xl grid grid-cols-1 gap-y-[10px]">
        <img
          class="w-[300px] h-[145px] rounded-t-xl xs:w-[350px] xs:h-[170px] sm:w-[400px] sm:h-[195px] lg:w-[350px] lg:h-[170px] xl:w-[400px] xl:h-[195px]"
          src="/new/images/foodPortrait.jpg"
        />
        <div class="flex flex-row gap-[10px] items-center">
          <img
            class="w-[145px] h-[145px] rounded-bl-xl xs:w-[170px] xs:h-[170px] sm:w-[195px] sm:h-[195px] lg:w-[170px] lg:h-[170px] xl:w-[195px] xl:h-[195px]"
            src="/new/images/foodSqaure1.jpg"
          />
          <img
            class="w-[145px] h-[145px] rounded-br-xl xs:w-[170px] xs:h-[170px] sm:w-[195px] sm:h-[195px] lg:w-[170px] lg:h-[170px] xl:w-[195px] xl:h-[195px]"
            src="/new/images/foodSqaure2.jpg"
          />
        </div>
      </div>
      <div
        class="w-full flex flex-col gap-4 lg:mt-[2rem] lg:w-[52vw] xl:w-[56vw]"
      >
        <div class="self-center text-center lg:self-start lg:text-left">
          <p
            class="text-textColor3 font-bold text-md sm:text-lg lg:text-xl xl:text-2xl"
          >
            What they say
          </p>
          <p
            class="font-extrabold text-lg text-textPrimary sm:text-xl lg:text-2xl xl:text-3xl"
          >
            What Our Customers Say About Us
          </p>
        </div>
        <div class="w-full">
          <SliderReviewSlider :value="currentPos">
            <CardsReview
              v-for="(data, index) in reviewData"
              :details="data"
              :key="index"
            />
          </SliderReviewSlider>
          <div class="self-center mt-4 flex flex-row gap-2 justify-center">
            <div
              @click="dotClicked(value.id)"
              v-for="value in reviewData"
              :class="
                currentPos === value.id
                  ? 'bg-buttonPrimary w-[15px] h-[15px] rounded-full cursor-pointer'
                  : 'bg-bgColorCard w-[15px] h-[15px] rounded-full cursor-pointer'
              "
            />
          </div>
        </div>
      </div>
    </div>
    <CardsMembership />
  </div>
</template>

<script setup lang="ts">
import type { reviewsInterface } from "~/types/Reviews";
import { reviews } from "~/constants/data";
const reviewData: reviewsInterface[] = reviews;
const currentPos = ref<number>(1);
const dotClicked = (number: number) => {
  currentPos.value = number;
};
</script>
