<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";

const navigation = inject<Ref<NavItem[]>>("navigation", ref([]));

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Collection",
    to: "/",
  },
  {
    label: "Contact us",
    to: "/",
  },
];
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <img src="~/public/favicon.ico" class="w-auto h-6" />
    </template>

    <template #right>
      <UColorModeButton />

      <UButton
        to="https://github.com/nuxt/ui"
        target="_blank"
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
      />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
