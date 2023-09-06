<template>
  <div>
    <EmailAndPhoneOtp @emailAndPhoneOtp="handleOtpSubmit" :isOtpNotCurrected="isOtpNotCurrected"/>
  <div class="row">
    <SuccessDialog 
      :dialogVisible="centerDialogVisible" 
      leftButtonName="Send email" 
      rightButtonName="Continue onboarding"
      dialogTitle="Admin added successfully" 
      :dialogImage="admin_mail"
      dialogText="Mail Yaw Graham has been added successfully. Do you want to send the temporary login credentials or do you want to continue with onboarding"
      @handleLeftButton="handleSendCredWithEmail" 
      @handleRightButton="handleWithOnboarding" 
      @dialogVisible="dialogVisible" />
  </div>
</div>

</template>

<script setup>
import { ref,reactive, onMounted } from "vue";
import { getOtp, verifyOtp } from "@/api/admin-opt.js"
import { adminSendCred } from "@/api/admin-send-creds.js"
import { useRouter } from "vue-router";
import { flashNotification } from "@/composables/useNotification.js";
import admin_mail from "@/assets/svg/admin_mail.svg"
import EmailAndPhoneOtp from '@/components/otp/EmailAndPhoneOtp.vue';
import SuccessDialog from "../dialog-box/SuccessDialog.vue";

const router = useRouter();
const centerDialogVisible = ref(false);
const isOtpNotCurrected=ref(false) //if otp not currect in that case we can show their error message

let senCred = reactive({
  "id": null,
  "email": null,
  "password": "123456"
})



const handleWithOnboarding = () => {
  centerDialogVisible.value = false;
  router.push("/onboarding/complete-onboarding");
};

// close dialog box
const dialogVisible = () => {
  centerDialogVisible.value = false;
};

 //call this function for resend OTP
function resendOtp(){ 
  handleGetOtp()
}

//provide child component function from the parent component
provide('resendOtp',resendOtp) 





// send cred. over email
const handleSendCredWithEmail = () => {
  console.log('point 7',senCred)
  adminSendCred(senCred).then((response) => {
    console.log('point 8', response)
    router.push("/onboarding");
  })
  .catch((err) => {
    console.log("error is", err)
  })
  centerDialogVisible.value = false;
  console.log('point 9 done')
  router.push("/onboarding");
};


// function for submit otp of email and mobile
function handleOtpSubmit(mobile,email) {
  console.log('point 2')
  let dataPost = {
    "country_code": "+233",
    "phone": "547123491",
    "phone_otp": mobile,
    "email": "testuser002@gmail.com",
    "email_otp": email
    }
  console.log('point 3', dataPost)
  verifyOtp(dataPost).then((response) => {
    console.log("point 4", response)
    if(response.status == 201) {
      console.log('point 5',response.data.data)
      senCred.id = response.data.data.id
      senCred.email = response.data.data.email
      console.log('point 6',senCred)
      flashNotification("success", "Added Sucessfully");
      centerDialogVisible.value = true;
    } else {
      flashNotification("warning", "Something went wrong");
    }
  })
  .catch((err) => {
    console.log('error is', err.response.data)
    flashNotification("warning", err.response.data.error_message);
  })
}

// function for getting otp when this page append
function handleGetOtp() {
  let dataPost = {
    "country_code": "+233",
    "phone_number": "547123491",
    "email": "testuser002@gmail.com"
  }
  getOtp(dataPost).then(() => {
    console.log('point 1')
  })
}



onMounted(() => {
  const dataPost = {}
  if(router.admin_data){
    dataPost.phone =  router.admin_data.phone,
    dataPost.email =  router.admin_data.email
    delete router.admin_data
  }
  handleGetOtp(dataPost);
})

</script>

<style>
.otp-page {
  height: 100vh;
}
</style>


