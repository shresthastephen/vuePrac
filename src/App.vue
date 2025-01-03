<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import HomeCards from "./components/HomeCards.vue";
import JobListings from "./components/JobListings.vue";
import { RouterView } from "vue-router";

// import router from "./router";

import { RouterLink } from "vue-router";
</script>

<template>
  <Navbar />
  <Hero />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
  <RouterLink to="/aba">Go to About</RouterLink>
  <RouterView></RouterView>
</template>
