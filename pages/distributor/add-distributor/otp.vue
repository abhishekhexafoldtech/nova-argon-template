<template>
  <div>
    <EmailAndPhoneOtp @emailAndPhoneOtp="emailAndPhoneOtp" :isOtpNotCurrected="isOtpNotCurrected"/>
  </div>
    <DialogStatus :dialogVisible="successDialog.status" :dialogTitle="successDialog.title" :dialogImage="successDialog.image" :dialogText="successDialog.discription" :dialogTextSize="successDialog.discriptionSize" :dialogTitleSize="successDialog.titleSize"  :leftButtonName="successDialog.leftButtonName" :rightButtonName="successDialog.rightButtonName" @handleLeftButton="handleSendEMail" @handleRightButton="handleContinueOnboarding" @dialogVisible="handleCloseDialog"/>
  </template>
  
  <script setup>
  import EmailAndPhoneOtp from "~/components/otp/EmailAndPhoneOtp.vue";
  import { flashNotification } from "@/composables/useNotification.js"
  import admin_mail from "@/assets/svg/admin_mail.svg"
  import { useRouter } from "vue-router";
  var router = useRouter();
  
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
  
  const isOtpNotCurrected=ref(false) //if otp not currect in that case we can show their error message
  // emit functions
  
  //get otp data
  function emailAndPhoneOtp(mobile,email){
      console.log("Mobile OTP:",mobile)
      console.log("Email OTP:",email)
      successDialog.status = true;
      // isOtpNotCurrected.value=true  //incase otp is wrong we set value true and show error their
  }
  
   //call here resend otp api
  function resendOtp(){ 
      console.log("Resend OTP:",)
  }
  
  //provide child component function from the parent component
  provide('resendOtp',resendOtp) 
  
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