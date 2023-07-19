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

        <p class="form_text mb-5">
          <nuxt-link to="/">Didn't receive OTP code?</nuxt-link> Resend in
          {{ minutes }}:{{ seconds < 10 ? "0" + seconds : seconds }}</p>

            <p class="form_text">Please enter the 6-digit OTP sent to your email</p>

            <div class="fieldrow">
              <el-input v-for="(value, index) in emailOtp" :key="index" ref="emailOtpInput" v-model="emailOtp[index]"
                maxlength="1" @input="onEmailOtpInput(index)" @keydown="onEmailOtpKeyDown(index, $event)"></el-input>
            </div>

            <p class="form_text">
              <nuxt-link to="/">Didn't receive OTP code?</nuxt-link> Resend in
              {{ minutes }}:{{ seconds < 10 ? "0" + seconds : seconds }} <nuxt-link class="text-danger"
                v-show="resendTimer === 0" to="/other">Resend</nuxt-link>
            </p>
      </div>
      <div class="otp_footer">
        <button :disabled="!isOtpComplete" class="btn btn-primary" @click="handleVerifyData">
          Verify & Proceed
        </button>
      </div>
    </div>
  </section>

  <div class="row">
    <SuccessDialog :dialogVisible="centerDialogVisible" leftButtonName="Send email" rightButtonName="Continue onboarding"
      dialogTitle="Admin added successfully" :dialogImage="admin_mail"
      dialogText="Mail Yaw Graham has been added successfully. Do you want to send the temporary login credentials or do you want to continue with onboarding "
      @handleLeftButton="handleWithEmail" @handleRightButton="handleWithOnboarding" @dialogVisible="dialogVisible" />
  </div>

  <!-- <div class="container p-4 mt-3">
    <div class="row bg-white rounded-3 otp-page m-1">
      <div class="col col-md-5 ms-3 mt-3">
        <h5>OTP verification</h5>
        <div>
          <small>Please enter the 6-digit OTP sent to the phone number</small>
          <br />
          <el-input
            v-for="(value, index) in mobileOtp"
            :key="index"
            ref="mobileOtpInput"
            v-model="mobileOtp[index]"
            maxlength="1"
            @input="onMobileOtpInput(index)"
            @keydown="onMobileOtpKeyDown(index, $event)"
            style="width: 11%; margin: 10px 10px 0px 0px"
          ></el-input>
          <div>
            <nuxt-link to="/">Didn't receive OTP code?</nuxt-link> Resend in
            {{ minutes }}:{{ seconds < 10 ? "0" + seconds : seconds }}
          </div>

          <br />
          <small>Please enter the 6-digit OTP sent to your email</small> <br />

          <el-input
            v-for="(value, index) in emailOtp"
            :key="index"
            ref="emailOtpInput"
            v-model="emailOtp[index]"
            maxlength="1"
            @input="onEmailOtpInput(index)"
            @keydown="onEmailOtpKeyDown(index, $event)"
            style="width: 11%; margin: 10px 10px 5px 0px"
          ></el-input>
          <br />
          <div>
            <nuxt-link to="/">Didn't receive OTP code?</nuxt-link> Resend in
            {{ minutes }}:{{ seconds < 10 ? "0" + seconds : seconds }}
          </div>

          <nuxt-link class="text-danger" v-show="resendTimer === 0" to="/other"
            >Resend</nuxt-link
          >
          <br /><br />
          <div class="col col-md-6">
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
  </div> -->
</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount, nextTick, } from "vue";
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
const mobileOtpInput = ref()
const emailOtpInput = ref()
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


