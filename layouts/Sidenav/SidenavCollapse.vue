<template>
  <a :data-bs-toggle="collapse ? 'collapse' : ''" :href="collapse ? `#${collapseRef}` : collapseRef"
    :aria-controls="collapseRef" :aria-expanded="isExpanded" class="nav-link" v-bind="$attrs"
    @click="isExpanded = !isExpanded">
    <i class="ri-customer-service-line"></i>
    <span class="nav-link-text">{{ navText }}</span>
  </a>
  <div :class="isExpanded ? 'collapse show' : 'collapse'">
    <slot name="list"></slot>
  </div>
</template>
<script setup>
defineProps({
  collapseRef: {
    type: String,
    required: true,
  },
  navText: {
    type: String,
    required: true,
  },
  collapse: {
    type: Boolean,
    default: true,
  },
});

const isExpanded = ref(false);
</script>
