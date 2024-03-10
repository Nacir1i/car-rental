<script setup lang="ts">
const toggleMenu = ref<{
  toggle: boolean;
  setToggle: (state: boolean) => void;
}>({
  toggle: false,
  setToggle(state: boolean) {
    this.toggle = state;
  },
});

const links = [
  {
    label: "A propos",
    to: "/",
  },
  {
    label: "Véhicules vendus",
    to: "/",
  },
  {
    label: "Blog",
    to: "/",
  },
  {
    label: "Contact",
    to: "/",
  },
];
</script>

<template>
  <nav
    class="h-20 sticky top-0 left-0 right-0 z-50 text-black font-medium bg-white"
  >
    <div class="h-full flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="w-full hidden md:flex items-center justify-between">
        <div class="flex items-center gap-16">
          <ULink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <NuxtImg src="/images/gl.png" class="h-8" alt="Logo" />
          </ULink>
          <ul class="flex gap-10">
            <li v-for="link in links">
              <ULink :to="link.to" class="">{{ link.label }}</ULink>
            </li>
          </ul>
        </div>
        <UButton
          icon="i-heroicons-plus"
          size="xl"
          label="Devis en ligne"
          color="red"
          variant="outline"
        />
      </div>
      <ULink
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse md:hidden"
      >
        <NuxtImg src="/images/gl.png" class="h-8" alt="Logo" />
      </ULink>
      <UIcon
        @click="toggleMenu.setToggle(true)"
        name="i-heroicons-bars-4"
        class="font-extrabold text-2xl cursor-pointer md:hidden"
      />
      <div
        v-if="toggleMenu.toggle"
        class="fixed top-0 left-0 right-0 bg-black/30 h-screen z-50 md:hidden"
      >
        <div class="bg-white h-screen w-4/5">
          <div class="w-full flex justify-between items-center bg-gray-100 p-4">
            <UButton
              icon="i-heroicons-plus"
              size="xl"
              label="Devis en ligne"
              color="red"
              variant="outline"
            />
            <UIcon
              @click="toggleMenu.setToggle(false)"
              name="i-heroicons-x-mark"
              class="font-extrabold text-2xl cursor-pointer text-red-600"
            />
          </div>
          <ul class="flex flex-col">
            <li
              v-for="link in links"
              class="h-14 border-b border-slate-300 pl-4 flex justify-start items-center"
            >
              <ULink :to="link.to" class="">{{ link.label }}</ULink>
            </li>
          </ul>
          <ul class="ml-4 mt-10 space-y-4">
            <li class="flex items-center justify-start gap-3">
              <UIcon
                name="i-heroicons-phone"
                class="font-extrabold text-2xl cursor-pointer text-red-600"
              />
              <p>+33656669396</p>
            </li>
            <li class="flex items-center justify-start gap-3">
              <UIcon
                name="i-heroicons-envelope"
                class="font-extrabold text-2xl cursor-pointer text-red-600"
              />
              <p>mgmt@gl-autos.fr</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
