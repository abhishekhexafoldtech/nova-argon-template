<template>
    <div>
      <el-upload 
        :class="class" 
        :show-file-list="false" 
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
          <img v-if="reactivePropertyName" :src="reactivePropertyName" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
      </el-upload>
    </div>
  </template>
  <script setup>
  import { ElMessage } from 'element-plus'
  import { Plus } from '@element-plus/icons-vue'
  
  const props = defineProps({
    class: {
      type: String,
    },
    reactivePropertyName: {
      type: [String, null]
    },
    value: {
      type: [String, null]
    },
  })
  
  //image processing
  const emit = defineEmits(["getImage"])
  const handleAvatarSuccess = (response, uploadFile) => {
    let image = URL.createObjectURL(uploadFile.raw)
    emit('getImage', image)
  }
  
  const beforeAvatarUpload = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
      ElMessage.error('Avatar picture must be JPG format!')
      return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
      ElMessage.error('Avatar picture size can not exceed 2MB!')
      return false
    }
    return true
  }
  
  </script>
  <style scoped>
  .avatar-uploader .avatar {
    width: 320px;
    height: 320px;
    display: block;
    border: none;
  }
  </style>
  
  <style>
  .avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }
  
  .avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
  }
  
  .el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 320px;
    height: 320px;
    text-align: center;
    border: 1px solid rgb(249, 247, 247);
    border-radius: 12px;
  }
  </style>