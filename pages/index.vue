<script setup lang="ts">
import type { Brand, Car } from "~/types";

const brands: { brand: Brand }[] = [
  {
    brand: "BMW",
  },
  {
    brand: "Mercedes",
  },
  {
    brand: "Nissan",
  },
  {
    brand: "Volkswagen",
  },
  {
    brand: "Opel",
  },
];

const data = ref<Car[]>([
  {
    name: "CAR1",
    price: 420,
    travelDistance: 10_000,
    fuel: "GAS",
    brand: "BMW",
  },
  {
    name: "CAR2",
    price: 420,
    travelDistance: 10_000,
    fuel: "GAS",
    brand: "BMW",
  },
  {
    name: "CAR3",
    price: 420,
    travelDistance: 10_000,
    fuel: "GAS",
    brand: "BMW",
  },
]);
</script>

<template>
  <Hero />
  <div
    class="w-full flex flex-col justify-start items-center space-y-28 py-16 md:py-28"
  >
    <div class="md:w-[65%] w-full">
      <div
        class="w-full flex flex-wrap justify-center items-center gap-14 relative z-50"
      >
        <Brands v-for="brand in brands" :brand="brand.brand" />
      </div>
    </div>

    <div class="w-full">
      <div class="w-full flex">
        <div class="flex-1 hidden lg:block">
          <NuxtImg
            class="object-cover h-full w-full"
            src="/images/family-car.jpg"
            format="webp"
            fit="outside"
          />
        </div>
        <div
          class="flex-1 flex flex-col space-y-14 items-center bg-gray-100 py-16"
        >
          <div class="text-center space-y-3">
            <h1 class="text-3xl text-black font-bold">One-way Car Rental</h1>
            <p class="text-base text-gray-400">Luxury Rental Services</p>
          </div>
          <div class="flex flex-wrap justify-center gap-6 px-4">
            <Display v-for="index in 2" :key="index" :car="data[index - 1]" />
          </div>
        </div>
      </div>
      <div class="w-full flex">
        <div
          class="flex-1 flex flex-col space-y-14 items-center bg-gray-100 py-16"
        >
          <div class="text-center space-y-3">
            <h1 class="text-3xl text-black font-bold">One-way Car Rental</h1>
            <p class="text-base text-gray-400">Luxury Rental Services</p>
          </div>
          <div class="flex flex-wrap justify-center gap-6 px-4">
            <Display v-for="index in 2" :key="index" :car="data[index - 1]" />
          </div>
        </div>
        <div class="flex-1 hidden lg:block">
          <NuxtImg
            class="object-cover h-full w-full"
            format="webp"
            fit="outside"
            src="/images/long-term.jpg"
          />
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col justify-around items-center">
      <div class="text-center space-y-3">
        <h1 class="text-3xl text-black font-bold">Enterprise Deals</h1>
        <p class="text-base text-gray-400">Luxury Rental Services</p>
      </div>
      <div class="w-full flex flex-wrap justify-center items-center gap-6">
        <Display v-for="(car, index) in data" :key="index" :car="car" />
      </div>
      <UButton
        icon="i-heroicons-arrow-right-circle"
        class="rounded-none bg-red-700 text-white px-6 py-4 mt-10"
        target="_blank"
        color="red"
        >View More Offers</UButton
      >
    </div>
  </div>
</template>
