<template>
  <div
    class="w-full items-center fixed z-20 sm:px-10 py-1 px-5 sm:py-3 flex justify-around"
    :class="isVisible ? 'bg-[#003366]/70' : 'bg-transparent'"
  >
    <div
      class="bg-red-600 rounded-sm w-fit text-lg text-white font-bold truncate px-1 py-0.5"
    >
      NileVista 
    </div>
    <div>
      <button
        @click="isMenuOpened = !isMenuOpened"
        class="menu-btn w-10 flex flex-col gap-1.5 sm:hidden hover:opacity-75 transition-all"
      >
        <div class="bg-red-600 w-full h-1 rounded-full"></div>
        <div class="bg-red-600 w-full h-1 rounded-full"></div>
        <div
          class="bg-red-600 h-1 rounded-full transition-all sm:w-full"
          :class="isMenuOpened ? 'w-full' : 'w-1/3'"
        ></div>
      </button>

      <div
        class="flex flex-col justify-center absolute bg-[#003366] transition-all text-lg sm:text-md md:text-lg tracking-wider duration-300 text-white h-screen left-0 top-0 w-2/3 sm:w-full sm:h-auto sm:bg-transparent sm:translate-x-0 sm:flex-row sm:relative gap-5 items-center"
        :class="isMenuOpened ? 'translate-x-0 ' : '-translate-x-full'"
      >
        <button
          @click="isMenuOpened = !isMenuOpened"
          class="absolute right-5 top-5 w-8 aspect-square cursor-pointer hover:opacity-75 transition-all sm:hidden"
          :class="isMenuOpened ? 'rotate-90' : 'rotate-45'"
        >
          <div
            class="bg-red-600 h-1 absolute right-0 top-1/2 -translate-y-1/2 w-full rotate-45 rounded-full"
          ></div>
          <div
            class="bg-red-600 h-1 absolute right-0 top-1/2 -translate-y-1/2 w-full -rotate-45 rounded-full"
          ></div>
        </button>
        <div class="relative text-center">
          <strong
            class="cursor-pointer"
            @click="isDestinationsOpen = closeAll(isDestinationsOpen)"
            >Destinations</strong
          >
          <transition name="fade">
            <ul
              v-if="isDestinationsOpen"
              class="overflow-hidden text-center w-max transition-all duration-300 bg-white text-black absolute left-1/2 -translate-x-1/2 rounded"
            >
              <li
                v-for="item in destinations"
                :key="item"
                class="hover:bg-gray-100 tracking-wide text-sm cursor-pointer py-2 px-3 border-y"
              >
                {{ item }}
              </li>
            </ul>
          </transition>
        </div>
        <div class="relative text-center">
          <strong
            class="cursor-pointer"
            @click="isServicesOpen = closeAll(isServicesOpen)"
            >Services</strong
          >
          <transition name="fade">
            <ul
              v-if="isServicesOpen"
              class="overflow-hidden text-center w-max transition-all duration-300 bg-white text-black absolute left-1/2 -translate-x-1/2 rounded"
            >
              <li
                v-for="item in services"
                :key="item"
                class="hover:bg-gray-100 tracking-wide text-sm cursor-pointer py-2 px-3 border-y"
              >
                {{ item }}
              </li>
            </ul>
          </transition>
        </div>
        <div class="relative text-center">
          <strong
            class="cursor-pointer"
            @click="isnileVistaOpen = closeAll(isnileVistaOpen)"
            ><Nav></Nav>NileVista</strong
          >
          <transition name="fade">
            <ul
              v-if="isnileVistaOpen"
              class="overflow-hidden text-center w-max transition-all duration-300 bg-white text-black absolute left-1/2 -translate-x-1/2 rounded"
            >
              <li
                class="hover:bg-gray-100 tracking-wide text-sm cursor-pointer py-2 px-3 border-y"
                v-for="item in nileVista"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
          </transition>
        </div>
        <div class="font-semibold">
          <ul
            class="flex flex-col sm:flex-row text-center w-max transition-all duration-300 gap-4"
          >
            <li
              @click="closeAll()"
              class="hover:text-gray-300 cursor-pointer p-2"
            >
              Contact us
            </li>
            <li
              @click="closeAll()"
              class="hover:text-gray-300 cursor-pointer p-2"
            >
              Reviews
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const isVisible = ref(false);
const isMenuOpened = ref(false);

const isDestinationsOpen = ref(false);
const isServicesOpen = ref(false);
const isnileVistaOpen = ref(false);

const closeAll = function (value = true) {
  isDestinationsOpen.value = false;
  isServicesOpen.value = false;
  isnileVistaOpen.value = false;
  return !value;
};

const destinations = [
  "Aswan",
  "Cairo",
  "Hurghada",
  "Luxor",
  "Marsa Alam",
  "Mersa Matruh",
  "Sharm El Sheikh",
];

const services = [
  "Packages",
  "Hotels",
  "Day Trips & Excursions",
  "MICE",
  "Nile Cruises",
];

const nileVista = ["About NileVista", "our News", "our Offices"];

const toggleVisibility = () => {
  isVisible.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    toggleVisibility();
    closeAll();
  });
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
  height: 0;
}
</style>
