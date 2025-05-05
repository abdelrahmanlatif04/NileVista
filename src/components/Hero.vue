<!-- components/HeroSection.vue -->
<template>
  <section class="relative h-screen">
    <video
      class="absolute w-full h-full object-cover"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="/hero-vid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full bg-black/20 text-white text-center px-4"
    >
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        Explore the Beauty of Egypt
      </h1>
      <p class="text-lg md:text-xl mb-6">
        From the wonders of Giza to the hidden gems of Aswan
      </p>
      <div class="space-x-4">
        <button
          class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
        >
          Plan Your Trip
        </button>
      </div>
    </div>
  </section>
</template>
