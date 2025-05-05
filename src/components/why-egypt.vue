<!-- components/WhyEgypt.vue -->
<template>
  <section class="py-16 bg-papyrus text-nile px-4">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-12">Why Egypt?</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(item, index) in reasons"
          :key="index"
          class="flex flex-col items-center"
        >
          <img :src="item.icon" class="text-4xl w-14 text-gold mb-4" />
          <p class="text-lg font-medium">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { SunIcon, ShipIcon, LandmarkIcon, MountainIcon } from "lucide-vue-next";

const reasons = [
  { title: "Year-round Sunshine", icon: "./sun.png" },
  { title: "7000+ Years of History", icon: "./history.png" },
  { title: "Authentic Desert Adventures", icon: "./desert.png" },
  { title: "Luxurious Nile Cruises", icon: "./ship.png" },
];
</script>

<style scoped>
.bg-papyrus {
  background-color: #faf8f1;
}
.text-nile {
  color: #003366;
}
.text-gold {
  color: #cba135;
}
</style>
