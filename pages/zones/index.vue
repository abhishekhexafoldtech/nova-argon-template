<template>
<PhoneOtp @getMobileOtpData="getMobileOtpData"/>
<EmailOtp @getEmailOtpData="getEmailOtpData"/>
<EmailAndPhoneOtp @emailAndPhoneOtp="emailAndPhoneOtp"/>
</template>
<script setup>
import PhoneOtp from '~/components/otp/PhoneOtp.vue';
import EmailOtp from '~/components/otp/EmailOtp.vue';
import EmailAndPhoneOtp from '~/components/otp/EmailAndPhoneOtp.vue';
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
</script>
