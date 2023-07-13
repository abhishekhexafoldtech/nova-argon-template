<template>
  <div class="container-area">
    <h4 class="page_heading">Profile</h4>

    <div class="prof_card">
      <figure>
        <img src="@/assets/img/blank_profile.png" alt="">
        <el-button class="edit_prof">
          <i class="fa fa-pencil"></i>
        </el-button>
      </figure>
      <div class="prof_con">
        <h4>Yaw graham</h4>
        <p>Admin</p>
      </div>
    </div>

    <div class="table_header">

      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Profile Details" name="profile">
          <el-card>
            profile
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="Address" name="address">
          <el-card>
            address
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="Reset password" name="password">
          <div class="prof_form">
            <!-- Step 1 -->
            <form class="form_inner">
              <div class="from_prof_header">
                <h3>Reset password</h3>
                <p>Please enter you phone number to receive a verification code</p>
              </div>
              <div class="fieldrow">
                <input type="number" class="form_input" :class="form.phone ? 'has_value' : ''" v-model="form.phone" />
                <label class="form_label">Phone Number</label>
              </div>
              <div class="fieldrow">
                <button class="btn w-100 btn-primary">
                  Next
                </button>
              </div>
            </form>

            <!-- Step 2 -->
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
                <button class="btn w-100 btn-primary">
                  Next
                </button>
              </div>
            </form>

            <!-- Step 3 -->
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
                <button class="btn w-100 btn-primary">
                  Continue
                </button>
              </div>
            </form>
          </div>

        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
  
<script setup>
import IconsEye from "@/components/icons/Eye.vue";
const eyeOldPassword = ref("false");
const eyeNewPassword = ref("false");
const eyeConfirmPassword = ref("false");

const activeName = ref("profile");

const form = reactive({
  phone: null,
  oldPassword: null,
  newPassword: null,
  confirmPassword: null,
})


definePageMeta({
  layout: "default",
});
</script>