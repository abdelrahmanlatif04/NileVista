<template>
  <section class="py-16 bg-white px-4">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-12">Top Destinations</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(destination, index) in destinations"
          :key="index"
          class="relative shadow-xl group overflow-hidden rounded-2xl cursor-pointer"
        >
          <img
            :src="`/${destination}.jpg`"
            :alt="destination"
            class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
          />
          <div
            class="absolute bottom-0 w-full bg-black/50 text-white text-lg font-semibold py-3 text-center"
          >
            {{ destination }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const destinations = [
  "Aswan",
  "Cairo",
  "Hurghada",
  "Luxor",
  "Marsa Alam",
  "Mersa Matruh",
  "Sharm El Sheikh",
];
</script>
