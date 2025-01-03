<script setup>
import JobListing from "./JobListing.vue";
import jobData from "@/jobs.json"; // Import the JSON data
import { ref, defineProps } from "vue";

const jobs = ref(jobData.jobs);

defineProps({
  limit: {
    type: Number,
    required: true,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
});
// console.log(limit); // Use `ref` for reactive data
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:conatiner m-auto">
      <h2 class="text-3xl font-bold text-green-600 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <a
      href="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</a
    >
  </section>
</template>
