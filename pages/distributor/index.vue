<template>
  <empty-manager heading="No distributor added yet"
    description="You haven't added any distributor. Start by adding first distributor" button="+ Add distributor"
    :icon="emptySection" @doSomething="handleCreate" />
</template>

<script setup>
import emptySection from "@/assets/svg/empty-section.svg"
import EmptyManager from "~/components/cards/EmptyManager.vue";
import { useRouter } from "vue-router";
const router = useRouter();
// add 
function handleCreate() {
  let r = "add-distributor";
  router.push(`distributor/${r}`);
}


definePageMeta({
  layout: "default",
});
</script>