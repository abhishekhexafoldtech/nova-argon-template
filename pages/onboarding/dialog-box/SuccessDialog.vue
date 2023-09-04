<template>
  <div class="theme_modal">
    <!-- Dialog box code -->
    <el-dialog v-model="props.dialogVisible" @close="closeDialog" :title="dialogTitle" center>

      <img :src="dialogImage" alt="Mail" />
      <p>
        {{ dialogText }}
      </p>

      <template #footer>
        <button class="btn btn-default" @click="handleLeftButton">
          {{ leftButtonName }}
        </button>
        <button class="btn btn-primary" @click="handleRightButton">
          {{ rightButtonName }}
        </button>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
let emit = defineEmits();

let props = defineProps({
  dialogVisible: {
    type: Boolean,
  },
  leftButtonName: {
    type: String,
    required: true,
  },
  rightButtonName: {
    type: String,
    required: true,
  },
  dialogTitle: {
    type: String,
    required: true,
  },
  dialogImage: {
    type: String,
    required: true,
  },
  dialogText: {
    type: String,
    required: true,
  },
});
const handleLeftButton = () => {
  emit("handleLeftButton");
}
const handleRightButton = () => {
  emit("handleRightButton");
}

const closeDialog = () => {
  emit("dialogVisible");
};
</script>
<style scoped lang="scss">
  
</style>
