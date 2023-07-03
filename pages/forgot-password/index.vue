<template>
  <div>
    <SignInOutLook>

      <template #form>
            <div class="container">
                 <div class="login-form text-center">
                    <center><img src="@/assets/nova_logo.png" /></center>
                    <br>
                    <h3>Forgot password</h3>
                    <small class="text-center">Please enter your phone number to receive a verification code  </small>
                    <br>
                    <br>
                    <form @submit.prevent="handleSubmit">
                      <div style="position:absolute;width:max-content;background: white;margin-top: -15px;" class="mx-4" v-if="inputPlaceHolder">
                        <small>Phone number</small>
                      </div>
                      <div class="">
                        
                        <input type="text"  class="form-control" placeholder="Phone Number" v-model="inputPlaceHolder"/>
                      </div>
                      
                      <div class="forget-error" v-if="!allowNext && inputPlaceHolder">
  
                        <small class="text-danger">Please provide registered mobile number</small>
                      </div>
                     
                     <div v-if="allowNext">
                      <br/>
                     </div>
                     <NuxtLink to="/forgot-password/otp"> <input type="submit" class="btn w-100 btn-primary" value="Next" /> </NuxtLink>
                    </form>
                    <div class="py-5">
                      <NuxtLink to="/login"><u>Back to sign in</u></NuxtLink>
                    </div>



                    
                </div>
            </div>
      

      </template>

      <template #image>
        <!-- <IconsForgotPassword class="py-5"/> -->
        <img src="@/assets/img/sign-in-password.png" width="980"/>
      </template>
    </SignInOutLook>

  </div>
</template>


<script setup>

const inputPlaceHolder = ref("");
const allowNext = ref(true);

const handleSubmit = () =>{
  if(!inputPlaceHolder.value){
    return
  }
  if(inputPlaceHolder.value ==="12345678"){
    allowNext.value = true;
    const router=useRouter();
    router.push("/forgot-password/otp")
  }else{
    allowNext.value = false
  }
};

watch(inputPlaceHolder,()=>{
  if(inputPlaceHolder.value === ""){
    allowNext.value = true;
    console.log(allowNext)
  }
})

definePageMeta({
  layout: "",
});
</script>


<style scoped>


@media screen and (max-width:750px) {
 
  .container{
    width: 100vw;
  }
}

</style>
  