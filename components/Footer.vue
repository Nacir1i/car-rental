<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <ULink href="https://flowbite.com/" class="flex items-center">
            <NuxtImg
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 me-3"
              alt="FlowBite Logo"
            />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >Rental</span
            >
          </ULink>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Resources
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <ULink href="https://flowbite.com/" class="hover:underline"
                  >Rental</ULink
                >
              </li>
              <li>
                <ULink href="https://tailwindcss.com/" class="hover:underline"
                  >Tailwind CSS</ULink
                >
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Follow us
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <ULink
                  href="https://github.com/themesberg/flowbite"
                  class="hover:underline"
                  >Github</ULink
                >
              </li>
              <li>
                <ULink
                  href="https://discord.gg/4eeurUVvTy"
                  class="hover:underline"
                  >Discord</ULink
                >
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Legal
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <ULink href="#" class="hover:underline">Privacy Policy</ULink>
              </li>
              <li>
                <ULink href="#" class="hover:underline"
                  >Terms &amp; Conditions</ULink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2023
          <ULink href="https://flowbite.com/" class="hover:underline"
            >Rental™</ULink
          >. All Rights Reserved.
        </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
          <ULink to="/">
            <UIcon class="text-xl" name="i-heroicons-hand-thumb-up" />
          </ULink>
          <ULink to="/">
            <UIcon class="text-xl" name="i-heroicons-rocket-launch" />
          </ULink>
          <ULink to="/">
            <UIcon class="text-xl" name="i-heroicons-sparkles" />
          </ULink>
          <ULink to="/">
            <UIcon class="text-xl" name="i-heroicons-swatch" />
          </ULink>
        </div>
      </div>
    </div>
  </footer>
</template>
