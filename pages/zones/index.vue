<template>
<PhoneOtp @getMobileOtpData="getMobileOtpData" :isOtpNotCurrected="isOtpNotCurrected"/>
<EmailOtp @getEmailOtpData="getEmailOtpData" :isOtpNotCurrected="isOtpNotCurrected"/>
<EmailAndPhoneOtp @emailAndPhoneOtp="emailAndPhoneOtp" :isOtpNotCurrected="isOtpNotCurrected"/>
</template>
<script setup>
import PhoneOtp from '~/components/otp/PhoneOtp.vue';
import EmailOtp from '~/components/otp/EmailOtp.vue';
import EmailAndPhoneOtp from '~/components/otp/EmailAndPhoneOtp.vue';

const isOtpNotCurrected=ref(false)

function getMobileOtpData(data){
console.log("Mobile OTP:",data)
}
function getEmailOtpData(data){
    console.log("Email OTP:",data)
}
function emailAndPhoneOtp(mobile,email){
    console.log("Mobile OTP:",mobile)
    console.log("Email OTP:",email)
}

function resendOtp(){
    console.log("Resend OTP:",)
}

provide('resendOtp',resendOtp)
</script>
