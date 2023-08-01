<template>
  <div>
    <form class="form_inner">
      <div class="from_prof_header">
        <h3>Enter one-time password</h3>
        <p>
          Please enter the 6-digit one time password (OTP) sent to the phone
        </p>
      </div>
      <div class="fieldrow otp_input">
        <el-input
          v-for="(value, index) in mobileOtp"
          :key="index"
          ref="mobileOtpInput"
          v-model="mobileOtp[index]"
          maxlength="1"
          @input="onMobileOtpInput(index)"
          @keydown="onMobileOtpKeyDown(index, $event)"
        ></el-input>
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
import {
  ref,
  reactive,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const mobileOtp = reactive(["", "", "", "", "", ""]); // Array to hold mobile OTP values
const emailOtp = reactive(["", "", "", "", "", ""]); // Array to hold email OTP values
const resendTimer = ref(60); // Timer for OTP resend (initially set to 60 seconds)
const minutes = ref(0); // Remaining minutes
const seconds = ref(0); // Remaining seconds
let resendIntervalId = null; // Interval ID for the resend timer
const mobileOtpInput = ref();

const onMobileOtpInput = (index) => {
  if (mobileOtp[index] !== "") {
    if (index < 5) {
      nextTick(() => {
        mobileOtpInput.value[index + 1].input.focus();
      });
    }
  }
};

const onMobileOtpKeyDown = (index, event) => {
  if (event.key === "Backspace" && index >= 0) {
    if (index > 0 && mobileOtp[index] === "") {
      // Clear the previous OTP value
      mobileOtp[index - 1] = "";
      nextTick(() => {
        mobileOtpInput.value[index - 1].input.focus();
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

let emit = defineEmits();
const formData = reactive({
  otp: "123456",
});

function handleFormSubmit() {
  emit("getChildFormData", formData);
}
</script>