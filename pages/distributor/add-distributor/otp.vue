<template>
  <section class="edit_mang_wrap">
    <div class="mang_inner">
      <div class="mang_title">
        <h3>OTP Verification</h3>
      </div>
      <div class="otp_wrap">
        <p class="form_text">Please enter the 6-digit OTP sent to the phone number</p>
        <div class="fieldrow">
          <el-input v-for="(value, index) in mobileOtp" :key="index" ref="mobileOtpInput" v-model="mobileOtp[index]"
            maxlength="1" @input="onMobileOtpInput(index)" @keydown="onMobileOtpKeyDown(index, $event)"></el-input>
        </div>
        <small class="text-warning" v-if="phone_otp_error">Error! Incorrect mobile OTP entered.</small>

        <p class="form_text mb-5">
          <nuxt-link to="/">Didn't receive OTP code?</nuxt-link> Resend in
          {{ minutes }}:{{ seconds < 10 ? "0" + seconds : seconds }}</p>

            <p class="form_text">Please enter the 6-digit OTP sent to your email</p>

            <div class="fieldrow">
              <el-input v-for="(value, index) in emailOtp" :key="index" ref="emailOtpInput" v-model="emailOtp[index]"
                maxlength="1" @input="onEmailOtpInput(index)" @keydown="onEmailOtpKeyDown(index, $event)"></el-input>
            </div>
            <small class="text-warning" v-if="email_otp_error">Error! Incorrect mobile OTP entered.</small>

            <p class="form_text">
              <nuxt-link to="/">Didn't receive OTP code?</nuxt-link> Resend in
              {{ minutes }}:{{ seconds < 10 ? "0" + seconds : seconds }} <nuxt-link class="text-danger"
                v-show="resendTimer === 0" to="/other">Resend</nuxt-link>
            </p>
      </div>
      <div class="otp_footer">
        <el-button :disabled="!isOtpComplete" type="primary" @click="handleSubmitOtp">
          Verify & Proceed
        </el-button>
      </div>
    </div>
  </section>
  <DialogStatus :dialogVisible="successDialog.status" :dialogTitle="successDialog.title" :dialogImage="successDialog.image" :dialogText="successDialog.discription" :dialogTextSize="successDialog.discriptionSize" :dialogTitleSize="successDialog.titleSize"  :leftButtonName="successDialog.leftButtonName" :rightButtonName="successDialog.rightButtonName" @handleLeftButton="handleSendEMail" @handleRightButton="handleContinueOnboarding" @dialogVisible="handleCloseDialog"/>
</template>

<script setup>
import { flashNotification } from "@/composables/useNotification.js"
import admin_mail from "@/assets/svg/admin_mail.svg"
import { useRouter } from "vue-router";
var router = useRouter();
const mobileOtp = reactive(["", "", "", "", "", ""]); // Array to hold mobile OTP values
const emailOtp = reactive(["", "", "", "", "", ""]); // Array to hold email OTP values
const resendTimer = ref(60); // Timer for OTP resend (initially set to 60 seconds)
const minutes = ref(0); // Remaining minutes
const seconds = ref(0); // Remaining seconds
var resendIntervalId = null; // Interval ID for the resend timer
const mobileOtpInput = ref()
const emailOtpInput = ref();
const phone_otp_error = ref(false);
const email_otp_error = ref(false)
const successDialog = reactive({
  status: false,
  title: "Distributor added successfully",
  image: admin_mail,
  discription: "Yaw graham has added successfully. Do you want to send the temporary login credentials or do you want to continue with onboarding",
  discriptionSize:17,
  titleSize:22,
  leftButtonName: "Send Email",
  rightButtonName: "Continue with onboarding"
})
const isOtpComplete = computed(() => {
  return (
    mobileOtp.every((value) => value !== "") &&
    emailOtp.every((value) => value !== "")
  );
});
const onMobileOtpInput = (index) => {
  if (mobileOtp[index] !== "") {
    if (index < 5) {
      // const nextInputField = $refs[`mobileOtpInput${index + 1}`][0];
      nextTick(() => {
        // nextInputField.focus();
        mobileOtpInput.value[index + 1].input.focus()
      });
    }
  }
};
const onMobileOtpKeyDown = (index, event) => {
  if (event.key === "Backspace" && index >= 0) {
    if (index > 0 && mobileOtp[index] === "") {
      // Clear the previous OTP value
      mobileOtp[index - 1] = "";
      // const previousInputField = $refs[`mobileOtpInput${index - 1}`][0];
      nextTick(() => {
        // previousInputField.focus();
        mobileOtpInput.value[index - 1].input.focus()

      });
    }
  }
};
const onEmailOtpInput = (index) => {
  if (emailOtp[index] !== "") {
    if (index < 5) {
      // const nextInputField = $refs[`emailOtpInput${index + 1}`][0];
      nextTick(() => {
        // nextInputField.focus();
        emailOtpInput.value[index + 1].input.focus()
      });
    }
  }
};
const onEmailOtpKeyDown = (index, event) => {
  if (event.key === "Backspace" && index >= 0) {
    if (index > 0 && emailOtp[index] === "") {
      // Clear the previous OTP value
      emailOtp[index - 1] = "";
      // const previousInputField = $refs[`emailOtpInput${index - 1}`][0];
      nextTick(() => {
        // previousInputField.focus();
        emailOtpInput.value[index - 1].input.focus()
      });
    }
  }
};
const startResendTimer = () => {
  resendTimer.value = 60;
  minutes.value = Math.floor(resendTimer.value / 60);
  seconds.value = resendTimer.value % 60;
  resendIntervalId = setInterval(() => {
    resendTimer.value--;
    minutes.value = Math.floor(resendTimer.value / 60);
    seconds.value = resendTimer.value % 60;
    if (resendTimer.value === 0) {
      clearInterval(resendIntervalId);
    }
  }, 1000);
};
onMounted(() => {
  startResendTimer();
});
onBeforeUnmount(() => {
  clearInterval(resendIntervalId);
});
// emit functions
function handleSubmitOtp() {
  const mobileOtpValue = mobileOtp.join("");
  const emailOtpValue = emailOtp.join("");
  console.log("Mobile OTP:", mobileOtpValue);
  console.log("Email OTP:", emailOtpValue);
  successDialog.status = true;
};
function handleSendEMail(){
  console.log("sending email.");
  flashNotification("success","Email sended.")
  successDialog.status = false
}
function handleContinueOnboarding(){
  console.log("Continuing with onboarding!");
  router.push("/distributor/add-distributor/phase-two")
  successDialog.status = false;
};
function handleCloseDialog(){
  successDialog.status = false
}
</script>