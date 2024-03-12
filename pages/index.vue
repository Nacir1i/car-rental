<script setup lang="ts">
import type { Brand, Car } from "~/types";

type Data = {
  icon: string;
  title: string;
  description: string;
};

type CarousalData = {
  img: string;
  title: string;
  buttonTitle: string;
};

const middleData: Data[] = [
  {
    icon: "i-fa6-solid-car",
    title: "Large gamme de marques",
    description:
      "Des véhicules de haute facture issus exclusivement de concessions officielles soumises à un processus de sélection draconien.",
  },
  {
    icon: "i-fa6-solid-handshake-angle",
    title: "Accompagnement Sur-Mesure",
    description:
      "De la recherche du véhicule idéal à l’immatriculation finale, profitez d’un accompagnement sur-mesure à chaque étape par nos experts automobiles.",
  },
  {
    icon: "i-fa6-solid-user-shield",
    title: "Transaction Transparente",
    description:
      "Contractualisation, facturation, garanties : chaque document est établi à votre nom directement auprès de la concession officielle.",
  },
];

const carouselData: CarousalData[] = [
  {
    img: "https://picsum.photos/1920/1080?random=1",
    title: "Estimez la valeur de votre voiture en deux clicks ",
    buttonTitle: "Rachat de vehicules",
  },
  {
    img: "https://picsum.photos/1920/1080?random=2",
    title: "Nos services pour une expérience automobile sans tracas",
    buttonTitle: "Nous services",
  },
];

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
    class="w-full flex flex-col justify-start items-center space-y-16 py-16 md:py-28"
  >
    <div class="w-full flex flex-wrap justify-center items-center gap-10 px-10">
      <div
        v-for="data in middleData"
        class="w-96 flex flex-col justify-center items-center gap-6 text-center"
      >
        <div
          class="rounded-full w-20 h-20 flex justify-center items-center bg-red-100"
        >
          <Icon :name="data.icon" class="text-4xl text-red-500" />
        </div>
        <p class="text-semibold text-2xl text-black">{{ data.title }}</p>
        <p class="text-base text-slate-500 max-w-80">{{ data.description }}</p>
      </div>
    </div>

    <div class="w-full px-2">
      <UCarousel
        :items="carouselData"
        :ui="{ item: 'basis-full' }"
        class="overflow-hidden"
        indicators
      >
        <template #default="{ item }">
          <div class="w-full h-[600px] relative">
            <NuxtImg :src="item.img" class="object-cover w-full h-full" />
            <div
              class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-white/70 from-10% via-30% to-90% flex flex-col justify-center items-start md:items-center"
            >
              <div class="w-full lg:w-7/12 flex flex-col justify-center items-start gap-10 p-5">
                <p class="max-w-60 font-bold text-4xl text-black">
                {{ item.title }}
                <UButton
                  :label="item.buttonTitle"
                  color="red"
                  size="xl"
                  class="text-lg"
                />
              </p>
              </div>
            </div>
          </div>
        </template>
      </UCarousel>
    </div>

    <div class="w-full flex flex-col lg:flex-row">
      <div class="flex-1 block">
        <NuxtImg
          class="object-cover h-full w-full"
          format="webp"
          fit="outside"
          src="/images/long-term.jpg"
        />
      </div>
      <div class="flex-1 flex items-center justify-center py-10">
        <div
          class="w-11/12 md:w-9/12 flex flex-col gap-7 items-start justify-center"
        >
          <h1 class="text-3xl md:text-4xl text-black font-bold">
            Notre histoire
          </h1>
          <p class="text-lg md:text-xl text-black max-w-[90%]">
            Rencontrez les fondateurs et découvrez notre philosophie
          </p>
          <p class="text-lg md:text-xl font-light text-black max-w-[90%]">
            GL Autos est née en 2019 de la rencontre entre deux passionnés
            d’automobile : Clément et Victor. Forts d’une solide expérience au
            sein du groupe Volkswagen, ils décident de se lancer un nouveau défi
            en créant leur propre structure dédiée à la recherche sur-mesure de
            véhicules d’occasion.
          </p>
          <ul class="text-black text-lg md:text-xl font-light space-y-3">
            <li class="flex justify-start items-center gap-3">
              <Icon name="i-fa6-solid-circle-check" />
              <p>Des voitures de qualité à des prix garantis</p>
            </li>
            <li class="flex justify-start items-center gap-3">
              <Icon name="i-fa6-solid-circle-check" />
              <p>Service de routine disponible</p>
            </li>
            <li class="flex justify-start items-center gap-3">
              <Icon name="i-fa6-solid-circle-check" />
              <p>Transformez votre voiture en argent</p>
            </li>
          </ul>
          <UButton
            label="En savoir plus"
            color="red"
            class="text-lg"
            size="xl"
          />
        </div>
      </div>
    </div>

    <div class="w-full flex justify-center items-center p-5">
      <div class="w-full"></div>
    </div>

    <div class="md:w-[65%] w-full">
      <div class="w-full flex flex-wrap justify-center items-center gap-14">
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
