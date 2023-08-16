<template>
    <div class="blank_box">
        <img :src="icon" alt="">
        <h4>{{ heading }}</h4>
        <p>{{ description }}</p>
        <button class="btn btn-primary" @click="doSomething">
            {{ button }}
        </button>
    </div>
</template>

<script setup>
const emit = defineEmits();
defineProps({
    heading: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    button: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
});
function doSomething() {
    emit("doSomething")
}
</script>

<style scoped></style>