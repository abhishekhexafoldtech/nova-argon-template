<template>
  <NuxtLink class="nav-link" :to="to">
    <i class="ri-dashboard-line"></i>
    <span class="sidenav-normal"> {{ text }} </span>
  </NuxtLink>
</template>
<script setup>
defineProps({
  to: {
    type: [Object, String],
    required: true,
  },
  miniIcon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
