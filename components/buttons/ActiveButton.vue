<template>
    <div>
        <div  class="active-button px-4" type=""> <span v-if="isActive"  class="dot"></span>Active</div>
    </div>
</template>
<script setup>
let props=defineProps({
    isActive:{
        type:String,
        default:false
    }
})
</script>
<style scoped>
/* active button */
.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #67c23a; /* Green color */
  border-radius: 50%; /* Make it a circle */
  margin-right: 8px; /* Adjust spacing between dot and text */
}
.active-button {
 background-color: white;
 border-radius: 18px;
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
}
</style>
