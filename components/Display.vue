<script setup lang="ts">
import type { Car } from "../types";

defineProps<{ car: Car }>();
</script>
<template>
  <div class="bg-white px-7 py-5 text-center space-y-5">
    <NuxtImg src="/images/dacia.png" width="200" />
    <h1 class="text-lg text-black">{{ car.name }}</h1>
    <h1 class="text-sm text-red-500 font-semibold">{{ car.price }} MAD/Day</h1>
    <UButton
      class="rounded-none"
      to="https://volta.net"
      target="_blank"
      color="white"
      >More details</UButton
    >
  </div>
</template>
