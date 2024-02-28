<script setup lang="ts">
const route = useRoute();
const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Navigation",
    icon: "i-heroicons-square-3-stack-3d",
  },
  {
    label: "Breadcrumb",
    icon: "i-heroicons-link",
  },
];
</script>

<template>
  <div>
    <UBreadcrumb :links="links" />
    <h1 class="bg-gray-800 text-blue-300">Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
  </div>
</template>
