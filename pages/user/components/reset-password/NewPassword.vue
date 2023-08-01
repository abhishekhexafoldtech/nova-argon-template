<template>
    <div>
        <form class="form_inner">
              <div class="from_prof_header">
                <h3>Create a new password</h3>
                <p>Your new password must be different from previous password.</p>
              </div>
              <div class="fieldrow">
                <input :type="eyeOldPassword == 'true' ? 'text' : 'password'" class="form_input password"
                  :class="form.oldPassword ? 'has_value' : ''" v-model="form.oldPassword" />
                <label class="form_label">Old Password</label>
                <IconsEye class="view_pass" :eye="eyeOldPassword"
                  @click="eyeOldPassword == 'true' ? eyeOldPassword = 'false' : eyeOldPassword = 'true'" />
              </div>
              <div class="fieldrow">
                <input :type="eyeNewPassword == 'true' ? 'text' : 'password'" class="form_input password"
                  :class="form.newPassword ? 'has_value' : ''" v-model="form.newPassword" />
                <label class="form_label">New Password</label>
                <IconsEye class="view_pass" :eye="eyeNewPassword"
                  @click="eyeNewPassword == 'true' ? eyeNewPassword = 'false' : eyeNewPassword = 'true'" />
              </div>
              <small>Must be at least 8 characters and contain both number and special character</small>
              <div class="fieldrow">
                <input :type="eyeConfirmPassword == 'true' ? 'text' : 'password'" class="form_input password"
                  :class="form.confirmPassword ? 'has_value' : ''" v-model="form.confirmPassword" />
                <label class="form_label">Confirm Password</label>
                <IconsEye class="view_pass" :eye="eyeConfirmPassword"
                  @click="eyeConfirmPassword == 'true' ? eyeConfirmPassword = 'false' : eyeConfirmPassword = 'true'" />
              </div>
              <div class="fieldrow">
                <button class="btn w-100 btn-primary" @click="handleSubmit">
                  Continue
                </button>
              </div>
            </form>
    </div>
</template>

<script setup>
import { flashNotification } from "@/composables/useNotification.js"

import IconsEye from "@/components/icons/Eye.vue";
const eyeOldPassword = ref("false");
const eyeNewPassword = ref("false");
const eyeConfirmPassword = ref("false");

const form = reactive({
  oldPassword: null,
  newPassword: null,
  confirmPassword: null,
})


function handleSubmit() {
  flashNotification('success', 'Passward updated successfully')
}


</script>