<template>
  <div>


    <div class="maincontainer bg-light">
        <div>
            <div class="signinform">
                <!-- sign in form -->
                    
                <div class="container">
                  <div class="login-form text-center">
                    <center><img src="@/assets/nova_logo.png" /></center>
                    <br>
                    <h3>One time password</h3>
                    <div style="width:80%;margin-left: 37px;">
            
                      <small class="text-center">Please enter the 6-digit one time password(OTP) sent to the phone </small>
                    </div>
                    <br>
                    <br>
                    <form @submit.prevent="handleSubmit">
                      <div class="otp-input-form">
                        <input type="text" class="form-control" maxlength="1" name="1" id="one" v-model="one" autocomplete="off"/>
                        <input type="text" class="form-control" maxlength="1" name="1" id="two" v-model="two" autocomplete="off"/>
                        <input type="text" class="form-control" maxlength="1" name="1" id="three" v-model="three" autocomplete="off"/>
                        <input type="text" class="form-control" maxlength="1" name="1" id="four" v-model="four" autocomplete="off"/>
                        <input type="text" class="form-control" maxlength="1" name="1" id="five" v-model="five" autocomplete="off"/>
                        <input type="text" class="form-control" maxlength="1" name="1" id="six" @keydown="changeHandler('dsd')"
                          v-model="six" autocomplete="off"/>
                      </div>
                      <div v-if="!otpsuccess">
                        <small class="text-danger">
                          Entered Otp is inavlid
                        </small>
                      </div>
                      <div>
                        Don't receive OTP code?
                        <div class="fw-bold ">Resend in {{ resentOtpCount }}</div>
                      </div>
                      <input type="submit" class="btn w-100 btn-primary mt-2" value="Next" />
                    </form>
                    <div class="py-4">
                      <NuxtLink to="/login"><u>Back to sign in</u></NuxtLink>
                    </div>
                  </div>
                </div>
                
                <!-- sign in form -->
            </div>
        </div>
        <div >
            <div class="image p-5" style="background: linear-gradient(124deg, rgba(122, 165, 191, 0.6) -1.8%, rgba(69, 105, 135, 0.6) 105.23%);">

              <img src="@/assets/img/sign-in-password.png"  width="520" style="margin-top: 5rem;"/>

            </div>
        </div>
    </div>

    <SignInOutLook>
      <template #form>
      </template>

      <template #image>
      </template>
    </SignInOutLook>








  </div>
</template>
  
  
<script setup>

const one = ref("");
const two = ref("");
const three = ref("");
const four = ref("");
const five = ref("");
const six = ref("");
const otp = ref("");
const resentOtpCount = ref(60);
const otpsuccess = ref(true);
const resendotp = ref(false)



watch(six, (cur, pre) => {
  if (pre && !cur) {
    changeHandler("five")
  }
})
watch(five, (cur, pre) => {
  if (!pre && cur) {
    changeHandler();
  }
  else if (pre && !cur) {
    changeHandler("four")
  }
})
watch(four, (cur, pre) => {
  if (pre && !cur) {
    changeHandler("three")
  } else {
    changeHandler();
  }
})
watch(three, (cur, pre) => {
  if (pre && !cur) {
    changeHandler("two")
  } else {
    changeHandler();
  }
})
watch(two, (cur, pre) => {
  if (pre && !cur) {
    changeHandler("one")
  } else {
    changeHandler()
  }
})
watch(one, (cur, pre) => {
  changeHandler();
})

const handleSubmit = () => {
  otp.value = (one?.value + two?.value + three?.value + four?.value + five?.value + six?.value);
  if (otp.value == "123456") {
    otpsuccess.value = true;
    const router = useRouter();
    router.push("/forgot-password/new-password")
  }
  else {
    otpsuccess.value = false;
  }


}



const changeHandler = (data) => {
  if (data) {
    document.querySelector(`#${data}`).focus();
    return

  }

  // forward
  if (one.value == "") {
    document.querySelector("#one").focus();
    return
  }
  else if (two.value == "") {
    document.querySelector("#two").focus();
    return
  }
  else if (three.value == "") {
    document.querySelector("#three").focus();
    return
  }
  else if (four.value == "") {
    document.querySelector("#four").focus();
    return
  }
  else if (five.value == "") {
    document.querySelector("#five").focus();
    return
  }
  else if (six.value == "") {
    document.querySelector("#six").focus();

  }







}

function handletimer() {
  const timer = resentOtpCount.value > 0 && setInterval(() => resentOtpCount.value -= 1, 1000);
  setTimeout(() => {
    clearInterval(timer)
  }, 60000)
}

onMounted(() => {

  handletimer();


  document.querySelector("#one").focus();;

  const sixi = document.querySelector("#six");
  sixi.addEventListener('keydown', function (event) {

    if (event.keyCode === 8 && six.value == "") {
      changeHandler("five")
    }

  });
  const fivei = document.querySelector("#five");
  fivei.addEventListener('keydown', function (event) {
    if (event.keyCode === 8 && five.value == "") {
      changeHandler("four")
    }
    if (five.value && event.keyCode != 8) {
      changeHandler("six")
    }
  })
  const fouri = document.querySelector("#four");
  fouri.addEventListener('keydown', function (event) {
    if (event.keyCode === 8 && four.value == "") {
      changeHandler("three")
    }
    if (four.value && event.keyCode != 8) {
      changeHandler("five")
    }
  })
  const threei = document.querySelector("#three");
  threei.addEventListener('keydown', function (event) {
    if (event.keyCode === 8 && three.value == "") {
      changeHandler("two")
    }
    if (three.value && event.keyCode != 8) {
      changeHandler("four")
    }
  })
  const twoi = document.querySelector("#two");
  twoi.addEventListener('keydown', function (event) {
    if (event.keyCode === 8 && two.value == "") {
      changeHandler("one")
    }
    if (two.value && event.keyCode != 8) {
      changeHandler("three")
    }
  })
  const onei = document.querySelector("#one");
  onei.addEventListener('keydown', function (event) {

    if (one.value && event.keyCode != 8) {
      changeHandler("two")
    }
  })

});





definePageMeta({
  layout: "",
});

</script>

<style scoped>
@media screen and (max-width:750px) {

  .container {
    width: 100vw;
  }
}
</style>
  
  
 
    