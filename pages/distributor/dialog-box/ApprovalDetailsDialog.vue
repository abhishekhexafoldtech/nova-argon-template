<template>
    <el-dialog 
        v-model="props.dialogVisible" 
        width="70%"
        :title="dialogTitle"
        @close="handleCloseDialog()"
    >
      <div class="pop_inner">
 
        <div class="pop_footer">
          <el-button type="" @click="handleMarkAsRead(props.dialogType)">Mark as Checked</el-button>
          <el-button type="primary" @click="handleFormSubmit">Edit Details</el-button>
        </div>
      </div>
    </el-dialog>
  </template>
  
  <script setup>
  
  let emit = defineEmits()
  
  let props = defineProps({
    dialogVisible: Boolean,
    dialogTitle: String,
    dialogType: String,
    formData: {
      name: String
    }
  })
  
  // close dialog 
  function handleCloseDialog() {
    emit('childClose')
  }

  function handleMarkAsRead(type) {
    console.log('one',type)
    emit('markAsRead',type)
  }
  
  // submit data 
  function handleFormSubmit() {
    emit('getChildFormData', props.formData)
  }
  </script>