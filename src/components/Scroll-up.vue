<template>
  <transition name="fade">
    <button
      v-show="isVisible"
      class="rounded-full w-10 aspect-square flex justify-center items-center fixed right-2 bottom-2 border-black p-2 border-2"
      @click="scrollToTop"
    >
      <img src="/arrow.png" class="-rotate-90" />
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = window.scrollY > 150;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", toggleVisibility);
});

onUnmounted(() => {
  window.removeEventListener("scroll", toggleVisibility);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
