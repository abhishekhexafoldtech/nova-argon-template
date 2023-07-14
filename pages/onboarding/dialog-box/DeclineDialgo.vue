<template>
  <div>
    <el-dialog v-model="props.dialogVisible" title="Decline admin onboarding request">
      <el-form label-position="top">
        <el-form-item label="Type a reason for decline admin onboarding request">
          <el-input type="textarea" v-model="formData.name"  autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <button class="btn btn-default" @click="handleCloseDialog">Cancel</button>
          <button class="btn btn-primary" @click="handleFormSubmit">Send </button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>

let emit = defineEmits()

let props = defineProps({
    dialogVisible: Boolean,
    formData: {
        name: String
    }
})

// close dialog 
function handleCloseDialog() {
    emit('childClose')
}

// submit data 
function handleFormSubmit() {
    emit('getChildFormData', props.formData)
}
</script>

<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>