<template>
    <div class="main-container">
        <div style="text-align: center;width:350px" >
            <img :src="icon" alt="">
            <h4 class="mt-2">{{ heading }}</h4>
            <small>{{ description }}</small>
            <br/>
            <el-button class="mt-4" type="primary" @click="doSomething">
                {{ button }}
            </el-button>
        </div>
    </div>
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
    top: 118px;
    margin-left: auto;
    margin-right: auto;
    margin: 20px;
    padding: 278.3203125px 623px 306px 609px;
    background-color: #ffffff
}
</style>