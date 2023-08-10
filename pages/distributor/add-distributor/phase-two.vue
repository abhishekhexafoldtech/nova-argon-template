<template>
    <div class="pt-5">
        <h1>phase two</h1>
        <el-button @click="handleSubmit">submit</el-button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function handleSubmit() {
    let r = "phase-three";
    router.push(`${r}`);
}

definePageMeta({
  layout: "default",
});
</script>