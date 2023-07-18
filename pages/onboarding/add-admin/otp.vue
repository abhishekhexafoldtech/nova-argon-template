<template>
  <div class="container p-4 mt-3">
    <div class="row bg-white rounded-3 otp-page m-1">
      <div class="col col-md-5 ms-3 mt-3">
        <h5>OTP verification</h5>
        <div>
          <!-- Mobile OTP section -->
          <small>Please enter the 6-digit OTP sent to the phone number</small>
          <br />
          <el-input
            v-for="(value, index) in mobileOtp"
            :key="index"
            :ref="`mobileOtpInput${index}`"
            v-model="mobileOtp[index]"
            maxlength="1"
            @input="onMobileOtpInput(index)"
            @keydown="onMobileOtpKeyDown(index, $event)"
            style="width: 11%; margin: 10px 10px 0px 0px"
          ></el-input>
          <div>
            <!-- Resend OTP countdown -->
            <nuxt-link to="/">Didn't receive OTP code?</nuxt-link> Resend in
            {{ minutes }}:{{ seconds < 10 ? "0" + seconds : seconds }}
          </div>

          <br />
          <!-- Email OTP section -->
          <small>Please enter the 6-digit OTP sent to your email</small> <br />

          <el-input
            v-for="(value, index) in emailOtp"
            :key="index"
            :ref="`emailOtpInput${index}`"
            v-model="emailOtp[index]"
            maxlength="1"
            @input="onEmailOtpInput(index)"
            @keydown="onEmailOtpKeyDown(index, $event)"
            style="width: 11%; margin: 10px 10px 5px 0px"
          ></el-input>
          <br />
          <div>
            <!-- Resend OTP countdown -->
            <nuxt-link to="/">Didn't receive OTP code?</nuxt-link> Resend in
            {{ minutes }}:{{ seconds < 10 ? "0" + seconds : seconds }}
          </div>

          <nuxt-link class="text-danger" v-show="resendTimer === 0" to="/other"
            >Resend</nuxt-link
          >
          <br /><br />
          <div class="col col-md-6">
            <!-- Verify button -->
            <button
              :disabled="!isOtpComplete"
              class="btn btn-primary w-100"
              @click="handleVerifyData"
            >
              Verify & Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- Dialog box code -->
      <SuccessDialog
       :dialogVisible="centerDialogVisible"
        leftButtonName="Send email"
        rightButtonName="Continue onboarding"
        dialogTitle="Admin added successfully"
        :dialogImage="admin_mail"
        dialogText="Mail Yaw Graham has been added successfully. Do you want to send the temporary login credentials or do you want to continue with onboarding "
        @handleLeftButton="handleWithEmail"
        @handleRightButton="handleWithOnboarding"
        @dialogVisible="dialogVisible"
      />
    </div>
  </div>
</template>

<script setup>
import {ref,reactive,computed, onMounted, onBeforeUnmount, nextTick,} from "vue";
import admin_mail from "@/assets/svg/admin_mail.svg"
import { useRouter } from "vue-router";
import SuccessDialog from "../dialog-box/SuccessDialog.vue";
const router = useRouter();
const mobileOtp = reactive(["", "", "", "", "", ""]); // Array to hold mobile OTP values
const emailOtp = reactive(["", "", "", "", "", ""]); // Array to hold email OTP values
const resendTimer = ref(60); // Timer for OTP resend (initially set to 60 seconds)
const minutes = ref(0); // Remaining minutes
const seconds = ref(0); // Remaining seconds
let resendIntervalId = null; // Interval ID for the resend timer
const centerDialogVisible = ref(false);

const isOtpComplete = computed(() => {
  return (
    mobileOtp.every((value) => value !== "") &&
    emailOtp.every((value) => value !== "")
  );
});

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

const onMobileOtpInput = (index) => {
  if (mobileOtp[index] !== "") {
    if (index < 5) {
      const nextInputField = $refs[`mobileOtpInput${index + 1}`][0];
      nextTick(() => {
        nextInputField.focus();
      });
    }
  }
};

const onMobileOtpKeyDown = (index, event) => {
  if (event.key === "Backspace" && index >= 0) {
    if (index > 0 && mobileOtp[index] === "") {
      // Clear the previous OTP value
      mobileOtp[index - 1] = "";
      const previousInputField = $refs[`mobileOtpInput${index - 1}`][0];
      nextTick(() => {
        previousInputField.focus();
      });
    }
  }
};

const onEmailOtpInput = (index) => {
  if (emailOtp[index] !== "") {
    if (index < 5) {
      const nextInputField = $refs[`emailOtpInput${index + 1}`][0];
      nextTick(() => {
        nextInputField.focus();
      });
    }
  }
};

const onEmailOtpKeyDown = (index, event) => {
  if (event.key === "Backspace" && index >= 0) {
    if (index > 0 && emailOtp[index] === "") {
      // Clear the previous OTP value
      emailOtp[index - 1] = "";
      const previousInputField = $refs[`emailOtpInput${index - 1}`][0];
      nextTick(() => {
        previousInputField.focus();
      });
    }
  }
};

const handleVerifyData = () => {
  const mobileOtpValue = mobileOtp.join("");
  const emailOtpValue = emailOtp.join("");
  console.log("Mobile OTP:", mobileOtpValue);
  console.log("Email OTP:", emailOtpValue);
  centerDialogVisible.value = true;
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

</script>

<style>
.otp-page {
  height: 100vh;
}
</style>



