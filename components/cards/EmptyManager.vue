<template>
    <el-card class="main-container d-flex justify-content-center">
        <div style="text-align: center;width:350px" class="mt-10">
            <img :src="icon" alt="">
            <h4 class="mt-2">{{ heading }}</h4>
            <small>{{ description }}</small>
            <br/>
            <el-button class="mt-4" type="primary" @click="doSomething">
                {{ button }}
            </el-button>
        </div>
    </el-card>
</template>

<script setup>
const emit = defineEmits();
defineProps({
    heading: {
        type: String,
        required:  true
    },
    description:{
        type: String,
        required: true
    },
    button:{
        type: String,
         required: true
    },
    icon:{
        type: String,
        required: true
    }
});
function doSomething(){
    emit("doSomething")
}
</script>

<style scoped>
.main-container {
    width: 98%;
    height:100vh;
    margin: 20px;
    background-color: #ffffff
}
</style>