<template>
    <div class="blank_box" :style="`min-height:${height}px;padding-top:${padding_top}px`" ref="empty_items">
        <img :src="icon" alt="" width="150">
        <h4 class="mt-3">{{ heading }}</h4>
        <p style="width:300px;margin-left: auto;margin-right: auto;">{{ description }}</p>
        <button class="btn btn-primary" @click="doSomething" v-if="button">
            {{ button }}
        </button>
    </div>
</template>

<script setup>
const height = ref(0);
const padding_top = ref(100);
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
    },

});
function doSomething() {
    emit("doSomething")
};
// this function manages the height of component
function heightManage(){
        height.value = window.innerHeight - 110; // height based on window heighgt
        padding_top.value = (height.value - 120 * 2) * 0.5;
        // an on Chnage event listener for resizes window
        window.addEventListener("resize",()=>{
            height.value = window.innerHeight - 110;
            padding_top.value = (height.value - 120 * 2) * 0.5;
        })
}
onMounted(()=>{
    heightManage()
})
</script>

<style scoped>
.blank_box {
    width:96%;
    margin-top: 50px;
    margin-left: 30px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding: 50px 50px 50px;
    background-color: rgba(255, 255, 255, 1);
}
</style>