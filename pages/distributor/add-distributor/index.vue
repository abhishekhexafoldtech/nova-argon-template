<template>
    <div class="pt-5">
        <h1>Distributor add form</h1>
        <el-button class="btn btn-primary" @click="handleSubmit">save form data</el-button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function handleSubmit() {
      router.push("/distributor/add-distributor/otp");
};

definePageMeta({
  layout: "default",
});
</script>