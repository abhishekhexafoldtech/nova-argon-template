<template>
    <div class="pt-5">
        <h1>Distributor</h1>
        <el-button type="primary" @click="handleCreate()">Add</el-button>
    </div>
</template>

<script setup>
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