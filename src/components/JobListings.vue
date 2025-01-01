<script setup>
import jobData from "@/jobs.json"; // Import the JSON data
import { ref } from "vue";

const jobs = ref(jobData.jobs); // Use `ref` for reactive data
</script>

<template>
  <div>
    <div v-for="job in jobs" :key="job.id" class="job-card">
      {{ job.title }}
    </div>
  </div>
</template>
