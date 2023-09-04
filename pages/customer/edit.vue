<template>
    <CustomerEditForm @handleUpdateCustomerDetails="handleUpdate" @handleCloseCustomerEditForm="handleClose"/>
</template>
<script setup>
import CustomerEditForm from "@/components/Customer/EditForm.vue";
function handleUpdate(data){
    console.log(data)
}
function handleClose(data){
    if(data){
        console.log("Cancel");
    }else {
        console.log("close")
    }
}
</script>