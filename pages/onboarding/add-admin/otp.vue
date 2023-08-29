<template>
  <div>
    <EmailAndPhoneOtp @emailAndPhoneOtp="emailAndPhoneOtp" :isOtpNotCurrected="isOtpNotCurrected"/>
  <div class="row">
    <SuccessDialog :dialogVisible="centerDialogVisible" leftButtonName="Send email" rightButtonName="Continue onboarding"
      dialogTitle="Admin added successfully" :dialogImage="admin_mail"
      dialogText="Mail Yaw Graham has been added successfully. Do you want to send the temporary login credentials or do you want to continue with onboarding "
      @handleLeftButton="handleWithEmail" @handleRightButton="handleWithOnboarding" @dialogVisible="dialogVisible" />
  </div>
</div>

</template>

<script setup>
import { ref} from "vue";
import admin_mail from "@/assets/svg/admin_mail.svg"
import { useRouter } from "vue-router";
import SuccessDialog from "../dialog-box/SuccessDialog.vue";
const router = useRouter();
import EmailAndPhoneOtp from '~/components/otp/EmailAndPhoneOtp.vue';
const centerDialogVisible = ref(false);
const isOtpNotCurrected=ref(false) //if otp not currect in that case we can show their error message

const handleWithOnboarding = () => {
  centerDialogVisible.value = false;
  router.push("/onboarding/complete-onboarding");
};

const handleWithEmail = () => {
  centerDialogVisible.value = false;
  router.push("/onboarding");
};

//dialogVisible called
const dialogVisible = () => {
  centerDialogVisible.value = false;
};

//get otp data
function emailAndPhoneOtp(mobile,email){
    console.log("Mobile OTP:",mobile)
    console.log("Email OTP:",email)
    centerDialogVisible.value = true;
    // isOtpNotCurrected.value=true  //incase otp is wrong we set value true and show error their
}

function resendOtp(){  //call here resend otp api
    console.log("Resend OTP:",)
}

provide('resendOtp',resendOtp) //provide child component function from the parent component

</script>

<style>
.otp-page {
  height: 100vh;
}
</style>


