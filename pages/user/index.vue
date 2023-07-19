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
          <div class="prof_form">
            <Profile />
          </div>
        </el-tab-pane>
        <el-tab-pane label="Address" name="address">
          <el-card>
            address
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="Reset password" name="password">
          <div class="prof_form">
            <!-- Step 1 -->
            <ResetPassword 
              v-if="resetPasswardVisibility"
              @getChildFormData="handleResetPasswordChildFormData($event)"
            />

            <!-- Step 2 -->
            <Otp 
            v-if="otpVisibility"
            @getChildFormData="handleOtpdChildFormData($event)"
            />

            <!-- Step 3 -->
           <NewPassword 
            v-if="newPasswordVisibility"
           />
           
          </div>

        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
  
<script setup>
import Profile from "@/pages/user/profile/index.vue"
import ResetPassword from "@/pages/user/reset-password/ResetPassword"
import Otp from "@/pages/user/reset-password/Otp"
import NewPassword from "@/pages/user/reset-password/NewPassword"
const activeName = ref("password");
var resetPasswardVisibility = ref(true);
var otpVisibility = ref(false);
var newPasswordVisibility = ref(false);

function handleResetPasswordChildFormData(data) {
  console.log(data)
  resetPasswardVisibility.value = false
  otpVisibility.value = true
}

function handleOtpdChildFormData(data) {
  console.log(data)
  resetPasswardVisibility.value = false
  otpVisibility.value = false
  newPasswordVisibility.value = true
}

definePageMeta({
  layout: "default",
});
</script>