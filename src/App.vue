<template>
  <div class="relative h-[200vh] mx-auto transition-all gap-2">
    <nav-bar />
    <hero />
    <why-egypt />
    <slider />
    <testimonials />
    <packages />
    <cta />
    <scroll-up />
    <main-footer />
  </div>
</template>

<script>
import Cta from "./components/cta.vue";
import MainFooter from "./components/footer.vue";
import Hero from "./components/Hero.vue";
import NavBar from "./components/nav-bar.vue";
import Packages from "./components/packages.vue";
import ScrollUp from "./components/Scroll-up.vue";
import Slider from "./components/Slider.vue";
import Testimonials from "./components/testimonials.vue";
import WhyEgypt from "./components/why-egypt.vue";
export default {
  components: {
    Hero,
    Slider,
    ScrollUp,
    NavBar,
    WhyEgypt,
    Testimonials,
    Packages,
    Cta,
    MainFooter,
  },
};
</script>

<style></style>
