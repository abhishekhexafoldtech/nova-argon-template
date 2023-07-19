<template>
    <div>
      <!-- Dialog box code -->
      <el-dialog
        v-model="props.dialogVisible"
        @close="closeDialog"
        :title="dialogTitle"
        center
        class="rounded-3 shadow fw-bold w-75 w-md-30 text-danger"
        :style="`max-width:${width == 'md' ? '396' : ''}px;`"
      >
        <div class="d-flex justify-content-center" :style="width ? 'padding-bottom: 30px;' : ''">
          <img :src="dialogImage" alt="Mail" />
        </div>
        <div style="text-align: center;"> 
          {{ dialogText }}
        </div>
  
        <template #footer>
          <span class="dialog-footer d-flex">
            <div class="col-6">
              <button
                class="btn border border-primary w-75"
                @click="handleLeftButton"
              >
                {{ leftButtonName }}
              </button>
            </div>
            <div class="col-6">
              <button class="btn btn-primary w-100" @click="handleRightButton">
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
    width:{
        type:String
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
  });



  const handleLeftButton=()=> {
    emit("handleLeftButton");
  }
  const handleRightButton=()=> {
    emit("handleRightButton");
  }
  
  const closeDialog = () => {
    emit("dialogVisible");
  };
  </script>
  <style>
  
  </style>
  