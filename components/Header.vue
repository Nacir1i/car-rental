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
  <nav class="h-20 absolute top-0 left-0 right-0 z-50 border-b-2 text-black">
    <div
      class="max-w-screen-xl h-full flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <ULink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <NuxtImg
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Rental Logo"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >Rental</span
        >
      </ULink>
      <UIcon
        @click="toggleMenu.setToggle(true)"
        name="i-heroicons-bars-4"
        class="font-extrabold text-2xl cursor-pointer md:hidden"
      />
      <div class="w-auto hidden md:block">
        <ul class="flex gap-10">
          <li v-for="link in links">
            <ULink :to="link.to" class="">{{ link.label }}</ULink>
          </li>
        </ul>
      </div>
      <div
        v-if="toggleMenu.toggle"
        class="fixed top-0 left-0 right-0 bg-black/30 h-screen z-50 md:hidden"
      >
        <div class="bg-slate-600 h-screen w-4/5 p-4">
          <div class="w-full flex justify-end">
            <UIcon
              @click="toggleMenu.setToggle(false)"
              name="i-heroicons-x-mark"
              class="font-extrabold text-2xl cursor-pointer"
            />
          </div>
          <ul class="flex flex-col gap-10">
            <li v-for="link in links">
              <ULink :to="link.to" class="">{{ link.label }}</ULink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
