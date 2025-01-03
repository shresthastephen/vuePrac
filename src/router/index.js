import { createRouter, createWebHistory } from "vue-router";

// Import your components
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";

const routes = [
  { path: "/", name: "Hero", component: Hero },
  { path: "/about", name: "HomeCards", component: HomeCards },
  {
    path: "/job/:id",
    name: "JobListings",
    component: JobListings,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
