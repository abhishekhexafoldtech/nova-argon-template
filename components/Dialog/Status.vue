<template>
  <div>
    <!-- Dialog box code -->
    <el-dialog v-model="props.dialogVisible" @close="closeDialog" center
      class="rounded-3 shadow fw-bold w-75 w-md-30 text-danger" :style="`max-width:${width == 'md' ? '396' : ''}px;`">
      <header style="font-weight:bold;width:100%;text-align: center;margin-bottom: 20px;"
        :style="`font-size:${dialogTitleSize}px`">{{ dialogTitle }}</header>
      <div class="d-flex justify-content-center" :style="width ? 'padding-bottom: 30px;' : ''">
        <img :src="dialogImage" alt="Image" />
      </div>
      <div style="text-align: center;"
        :style="`font-size:${dialogTextSize}px;width:${dialogTextWidth}%;margin-left:auto;margin-right:auto`"
        class="dialogtext">
        {{ dialogText }}
      </div>

      <template #footer>
        <span class="dialog-footer d-flex">
          <div class="col-6">
            <button class="btn border border-primary w-75" @click="handleLeftButton" v-if="props.leftButtonName">
              {{ leftButtonName }}
            </button>
          </div>
          <div class="col-6">
            <button class="btn btn-primary w-80" @click="handleRightButton" v-if="props.rightButtonName">
              {{ rightButtonName }}
            </button>
          </div>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
let emit = defineEmits();

let props = defineProps({
  width: {
    type: String
  },
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
  dialogTextSize: {
    type: Number,
    required: false
  },
  dialogTextWidth: {
    type: Number,
    required: false
  },
  dialogTitleSize: {
    type: Number,
    required: false
  }
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
<style>
.dialogtext {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0em;
}
</style>
  