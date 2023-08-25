<template>
  <div>
    <el-upload
      :class="class"
      :show-file-list="true"
      :limit="1"
      :on-remove="handleRemove"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      @change="clearValidationError"
    >
      <img v-if="avtar" :src="avtar" :class="iconClass" class="avatar img-fluid" />
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
const avtar = ref(null);
const validationError = ref('');

const emit = defineEmits(['getImage']);

const handleAvatarSuccess = (response, uploadFile) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    const base64Image = event.target.result;
    avtar.value = base64Image;
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

// <!-- remove uploaded avtar -->

const handleRemove = () => {
  avtar.value = null;
  emit("getImage", avtar.value);
};
</script>
