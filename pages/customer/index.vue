<template>
    <div>
        <EmptyManager :icon="CustomerEmptyImage" heading="No customer added yet" description="List of customers not added yet."/>
    </div>
</template>
<script setup>
import EmptyManager from "@/components/cards/EmptyManager.vue";
import CustomerEmptyImage from "@/assets/svg/customers_empty.svg"
</script>