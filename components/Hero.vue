<template>
  <section class="relative mx-auto">
    <NuxtImg
      class="object-cover w-full h-[600px] md:h-[750px] skeleton"
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
      class="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center p-6 gap-7"
    >
      <div class="flex flex-col justify-center items-center gap-3">
        <div class="text-center">
          <div class="flex justify-center items-center gap-1">
            <template v-for="n in 5">
              <UIcon
                name="i-heroicons-star-solid"
                class="text-yellow-400 text-3xl lg:text-5xl"
              />
            </template>
          </div>
          <h1 class="text-4xl font-bold md:text-6xl lg:text-8xl">
            Trouvez votre
          </h1>
          <h2 class="text-4xl font-bold md:text-6xl lg:text-8xl">
            Voiture de rêve.
          </h2>
        </div>
        <p class="text-center text-gray-500 text-sm md:text-base lg:text-lg">
          Nous pouvons vous aider à trouver la meilleure voiture. Consultez nos
          avis, comparez les modèles et trouvez des voitures à vendre.
        </p>
      </div>
      <div class="flex flex-wrap justify-center items-center gap-4">
        <UButton
          icon="i-heroicons-magnifying-glass"
          label="Rechercher un véhicule"
          color="white"
          variant="solid"
          class="text-lg px-5 py-3"
        />
        <UButton
          icon="i-heroicons-check"
          label="Vendre votre véhicule"
          color="white"
          variant="solid"
          class="text-lg px-5 py-3"
        />
      </div>
    </div>
    <div
      class="bg-white h-16 w-16 absolute -bottom-8 left-0 right-0 m-auto rotate-45 sm:block hidden"
    ></div>
  </section>
</template>
