<template>
  <div>
    <form class="form_inner" @submit.prevent="handleFormSubmit">
      <div class="from_prof_header">
        <h3>Reset password</h3>
        <p>Please enter you phone number to receive a verification code</p>
      </div>
      <div class="fieldrow">
        <input
          type="number"
          class="form_input"
          :class="formData.phone ? 'has_value' : ''"
          v-model="formData.phone"
        />
        <label class="form_label">Phone Number</label>
      </div>
      <div class="fieldrow">
        <button class="btn w-100 btn-primary" @click="handleFormSubmit">Next</button>
      </div>
    </form>
  </div>
</template>

<script setup>
let emit = defineEmits()
const formData = reactive({
  phone: '',
})

function handleFormSubmit() {
  emit('getChildFormData', formData)
}
</script>