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
      <el-dialog
        v-model="centerDialogVisible"
        title="Admin added successfully"
        center
        class="rounded-3 shadow fw-bold w-75 w-md-30"
      >
        <div class="d-flex justify-content-center">
          <img src="../../../assets/svg/admin_mail.svg" alt="Mail" />
        </div>
        <span>
          Yaw Graham has been added successfully. Do you want to send the
          temporary login credentials or do you want to continue with onboarding
        </span>

        <template #footer>
          <span class="dialog-footer d-flex">
            <div class="col-6">
              <button
                class="btn border border-primary w-75"
                @click="handleWithEmail"
              >
                Send email
              </button>
            </div>
            <div class="col-6">
              <button
                class="btn btn-primary w-100"
                @click="handleWithOnboarding"
              >
                Continue onboarding
              </button>
            </div>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      mobileOtp: ["", "", "", "", "", ""], // Array to hold mobile OTP values
      emailOtp: ["", "", "", "", "", ""], // Array to hold email OTP values
      resendTimer: 60, // Timer for OTP resend (initially set to 60 seconds)
      minutes: 0, // Remaining minutes
      seconds: 0, // Remaining seconds
      resendIntervalId: null, // Interval ID for the resend timer
      centerDialogVisible: ref(false),
    };
  },
  computed: {
    isOtpComplete() {
      return (
        this.mobileOtp.every((value) => value !== "") &&
        this.emailOtp.every((value) => value !== "")
      );
    },
  },
  methods: {
    handleWithOnboarding() {
      this.centerDialogVisible = false;
      this.$router.push("/onboarding/complete-onboarding");
    },
    handleWithEmail() {
      this.centerDialogVisible = false;
      this.$router.push("/onboarding");
    },
    onMobileOtpInput(index) {
  if (this.mobileOtp[index] !== "") {
    if (index < 5) {
      const nextInputField = this.$refs[`mobileOtpInput${index + 1}`][0];
      nextInputField.focus();
    }
  } else {
    // Clear the current OTP value if more than one character is entered
    this.mobileOtp[index] = this.mobileOtp[index].slice(-1);
  }
},
onMobileOtpKeyDown(index, event) {
  if (event.key === "Backspace" && index >= 0) {
    if (index > 0 && this.mobileOtp[index] === "") {
      // Clear the previous OTP value
      this.mobileOtp[index - 1] = "";
      this.$nextTick(() => {
        const previousInputField = this.$refs[`mobileOtpInput${index - 1}`][0];
        previousInputField.focus();
      });
    }
  }
},
onMobileOtpKeyUp(index, event) {
  if (event.key === "Backspace" && index === 0 && this.mobileOtp[index] === "") {
    // Clear the current OTP value
    this.mobileOtp[index] = "";
  }
},
    onEmailOtpInput(index) {
      if (this.emailOtp[index] !== "") {
        if (index < 5) {
          this.$refs[`emailOtpInput${index + 1}`][0].focus();
        }
      }
    },
    onEmailOtpKeyDown(index, event) {
      if (event.key === "Backspace" && index >= 0) {
        if (index > 0 && this.emailOtp[index] === "") {
          // Clear the previous OTP value
          this.emailOtp[index - 1] = "";
          const previousInputField = this.$refs[`emailOtpInput${index - 1}`][0];
          previousInputField.focus();
        }
      }
    },

    handleVerifyData() {
      const mobileOtpValue = this.mobileOtp.join("");
      const emailOtpValue = this.emailOtp.join("");
      console.log("Mobile OTP:", mobileOtpValue);
      console.log("Email OTP:", emailOtpValue);
      this.centerDialogVisible = true;
    },
    startResendTimer() {
      this.resendTimer = 60; // Reset the timer to 60 seconds
      this.minutes = Math.floor(this.resendTimer / 60); // Calculate initial minutes
      this.seconds = this.resendTimer % 60; // Calculate initial seconds

      this.resendIntervalId = setInterval(() => {
        this.resendTimer--;
        this.minutes = Math.floor(this.resendTimer / 60); // Update remaining minutes
        this.seconds = this.resendTimer % 60; // Update remaining seconds

        if (this.resendTimer === 0) {
          clearInterval(this.resendIntervalId);
        }
      }, 1000);
    },
  },
  mounted() {
    this.startResendTimer();
  },
  beforeUnmount() {
    clearInterval(this.resendIntervalId);
  },
};
</script>

<style>
.otp-page {
  height: 100vh;
}
</style>
