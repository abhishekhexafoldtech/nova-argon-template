<template>
    <div>
        <form class="form_inner">
              <div class="from_prof_header">
                <h3>Enter one-time password</h3>
                <p>Please enter the 6-digit one time password (OTP) sent to the phone</p>
              </div>
              <div class="fieldrow otp_input">
                <input type="text" class="form_input" maxlength="1" />
                <input type="text" class="form_input" maxlength="1" />
                <input type="text" class="form_input" maxlength="1" />
                <input type="text" class="form_input" maxlength="1" />
                <input type="text" class="form_input" maxlength="1" />
                <input type="text" class="form_input" maxlength="1" />
              </div>
              <small>Entered Otp is invalid</small>
              <p class="otp_resend">
                Don't receive OTP code?
                <b>Resend in 30s</b>
              </p>
              <div class="fieldrow">
                <button class="btn w-100 btn-primary" @click="handleFormSubmit">
                  Next
                </button>
              </div>
            </form>
    </div>
</template>

<script setup>

let emit = defineEmits()
const formData = reactive({
  otp: '123456',
})

function handleFormSubmit() {
  emit('getChildFormData', formData)
}


</script>