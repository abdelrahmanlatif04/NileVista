<!-- components/TourPackages.vue -->
<template>
  <section class="py-16 bg-white px-4">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-12">Popular Packages</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(pkg, index) in packages"
          :key="index"
          class="bg-papyrus rounded-xl overflow-hidden shadow-lg"
        >
          <img :src="pkg.image" class="w-full h-48 object-cover" />
          <div class="p-6 text-left">
            <h3 class="text-xl font-bold mb-2">{{ pkg.name }}</h3>
            <p class="text-sm text-gray-700 mb-2">{{ pkg.duration }}</p>
            <p class="text-gray-600 mb-4">{{ pkg.description }}</p>
            <button
              class="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const packages = [
  {
    name: "Mysteries of Upper Egypt",
    duration: "7 Days – $899",
    description: "Explore Luxor, Aswan, and the Nile in style.",
    image: "./nile-cruise.jpg",
  },
  {
    name: "Cairo to Alexandria",
    duration: "4 Days – $499",
    description: "A mix of culture, food, and coastal beauty.",
    image: "./alex.jpg",
  },
  {
    name: "Red Sea Escape",
    duration: "5 Days – $599",
    description: "Relax on the shores of Hurghada and dive into coral reefs.",
    image: "./hurghada-package.jpg",
  },
];
</script>
