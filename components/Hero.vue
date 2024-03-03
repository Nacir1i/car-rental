<template>
  <div class="relative mx-auto">
    <NuxtImg
      width="1400"
      height="800"
      class="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px] skeleton"
      src="/images/bg.jpg"
      alt="Hero image"
      loading="eager"
      format="webp"
      fit="outside"
      sizes="sm:100vw lg:1400px"
      fetchpriority="high"
      preload
    />
    <div
      class="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center p-8"
    >
      <h1 class="text-3xl font-bold md:mb-4 md:text-4xl lg:text-6xl">
        Just landed.
      </h1>
      <h2 class="text-lg font-bold md:mb-4 lg:text-3xl">
        The New Year Collection
      </h2>
      <div class="max-w-sm mb-8 text-md font-light lg:max-w-md text-balance">
        <p>
          Our latest collection is here. Discover the latest trends and styles
          for the new year.
        </p>
      </div>
    </div>
    <div
      class="bg-white h-16 w-16 absolute -bottom-8 left-0 right-0 m-auto rotate-45 sm:block hidden"
    ></div>
  </div>
</template>
