<template>
  <div>
    <el-upload
      :class="class"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      @change="clearValidationError"
    >
      <img v-if="pre_img" :src="pre_img" :class="iconClass" class="avatar img-fluid" />
      <el-icon v-else class="avatar-uploader-icon" :class="iconClass">
        <Plus />
      </el-icon>
    </el-upload>
    <p v-if="validationError"><span class="error-message">{{ validationError }}</span></p>
  </div>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue';
import { ref } from 'vue';

const props = defineProps({
  class: String,
  iconClass: String,
  reactivePropertyName: [String, null],
  value: [String, null]
});
const pre_img = ref("");
const validationError = ref('');

const emit = defineEmits(['getImage']);

const handleAvatarSuccess = (response, uploadFile) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    const base64Image = event.target.result;
    pre_img.value = base64Image;
    emit('getImage', base64Image);
  };
  reader.readAsDataURL(uploadFile.raw);
};

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    validationError.value = 'Avatar picture must be in JPG format.';
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    validationError.value = 'Avatar picture size cannot exceed 2MB.';
    return false;
  }
  validationError.value = '';
  return true;
};

const clearValidationError = () => {
  validationError.value = '';
};
</script>

<style scoped>
.avatar-uploader .avatar {
  /* width: 320px;
  height: 320px; */
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
  text-align: center;
  border: 1px solid rgb(249, 247, 247);
  border-radius: 12px;
}
</style>

