<template>
    <div class="active_btn"><span v-if="isActive" class="dot"></span>Active</div>
</template>
<script setup>
let props = defineProps({
    isActive: {
        type: String,
        default: false
    }
})
</script>
<style scoped>
.active_btn {
    background-color: var(--white);
    color: var(--black);
    font-size: 14px;
    font-weight: 400;
    padding: 6px 20px;
    border-radius: 50px;
}

span {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #67c23a;
    border-radius: 50%;
    margin-right: 8px;
}
</style>
