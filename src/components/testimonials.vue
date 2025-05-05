<!-- components/Testimonials.vue -->
<template>
  <section class="py-16 bg-papyrus text-nile px-4">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-12">What Our Travelers Say</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white p-6 rounded-xl shadow"
        >
          <p class="italic mb-4">“{{ testimonial.comment }}”</p>
          <div class="flex items-center gap-4">
            <img :src="testimonial.avatar" class="w-12 h-12 rounded-full" />
            <div class="text-left">
              <p class="font-semibold">{{ testimonial.name }}</p>
              <p class="text-sm text-gray-600">{{ testimonial.country }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  { name: 'Anna', country: 'Germany', comment: 'Unforgettable experience!', avatar: "./user.png" },
  { name: 'James', country: 'USA', comment: 'The temples blew my mind.', avatar: "./user.png" },
  { name: 'Sara', country: 'Italy', comment: 'Nile cruise was the highlight.', avatar: "./user.png" },
]
</script>
