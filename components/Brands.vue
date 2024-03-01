<script setup lang="ts">
import type { Brand } from "~/types";

defineProps<{
  brand: Brand;
}>();
</script>

<template>
  <div
    class="h-40 w-full md:w-40 border border-gray-200 shadow-lg flex justify-center items-center"
  >
    <NuxtImg
      :src="`/images/${brand.toLocaleLowerCase()}.png`"
      width="90"
      alt="Brand"
    />
  </div>
</template>
