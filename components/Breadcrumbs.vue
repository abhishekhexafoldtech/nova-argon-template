<template>
  <nav aria-label="breadcrumb" class="ms-2">
    <h6
      class="text-dark"
    >
      {{ currentRouteName || currentPage }}
    </h6>
  </nav>
</template>

<script setup>
import { useNavStore } from "@/stores/NavStore";
const navStore = useNavStore();
defineProps({
  currentPage: {
    type: String,
    default: "Default",
  },
  currentDirectory: {
    type: String,
    default: "Dashboard",
  },
  isRTL: {
    type: Boolean,
    default: false,
  },
});

const currentRouteName = computed(() => {
  const route = useRoute();

  const file = route.path.split("/").slice(-1)[0];
  const name = file.split("-");
  const fulllRouteName = name[0].charAt(0).toUpperCase()+name[0].slice(1)
  return fulllRouteName;
});

const currentRouteDirectory = computed(() => {
  const route = useRoute();
  const dir = route.path.split("/")[1];
  return dir.charAt(0).toUpperCase() + dir.slice(1);
});
</script>
