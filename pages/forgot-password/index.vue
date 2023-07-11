<template>
  <!-- <div class="maincontainer bg-light d-none">
    <div>
      <div class="signinform">
        <div class="container">
          <div class="login-form text-center">
            <center><img src="@/assets/nova_logo.png" /></center>
            <br />
            <h3>Forgot password</h3>
            <div style="width: 80%; margin-left: 37px">
              <small class="text-center">Please enter your phone number to receive a verification code
              </small>
            </div>
            <br />
            <br />
            <form @submit.prevent="handleSubmit">
              <div style="
                    position: absolute;
                    width: max-content;
                    background: white;
                    margin-top: -15px;
                  " class="mx-4" v-if="form.mobileNo">
                <small>Phone number</small>
              </div>
              <div class="">
                <input type="text" class="form-control" placeholder="Phone Number" v-model="form.mobileNo" required />
              </div>
              <div class="forget-error" v-if="!allowNext && inputPlaceHolder">
                <small class="text-danger">Please provide registered mobile number</small>
              </div>
              <div v-if="allowNext">
                <br />
              </div>
              <div>
                <button class="btn w-100 btn-primary" @click="handleSubmit">Next</button>
              </div>
            </form>
            <div class="py-5">
              <NuxtLink to="/login"><u>Back to sign in</u></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="image p-5" style="
            background: linear-gradient(
              124deg,
              rgba(122, 165, 191, 0.6) -1.8%,
              rgba(69, 105, 135, 0.6) 105.23%
            );
          ">
        <img src="@/assets/img/forgot.png" width="580" style="margin-top: 5rem" />
      </div>
    </div>
  </div> -->

  <section class="login_wrap">
    <div class="login_inner">
      <el-row>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="login_left">
            <div class="login_form">
              <img class="logo" src="@/assets/nova_logo2.png" />
              <form class="form_inner" @submit.prevent="handleSubmit">
                <h3>Forgot Password</h3>
                <p>Please enter your phone number to receive a verification code</p>
                <div class="fieldrow">
                  <input type="text" class="form_input" v-model="form.mobileNo" required />
                  <label class="form_label">Phone Number</label>
                </div>
                <small v-if="!allowNext && inputPlaceHolder">Please provide registered mobile number</small>
                <div class="fieldrow">
                  <button class="btn w-100 btn-primary" @click="handleSubmit">
                    Next
                  </button>
                </div>
                <div class="fieldrow">
                  <NuxtLink to="/login"><u>Back to sign in</u></NuxtLink>
                </div>
              </form>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="login_right">
            <img src="@/assets/img/forgot.png" />
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>


<script setup>
const form = reactive({
  mobileNo: null
})
const allowNext = ref(true);
const handleSubmit = () => {
  if (!form.mobileNo) {
    return;
  }
  console.log("submited")
  const router = useRouter();
  router.push("/forgot-password/otp")
};
watch(form, () => {
  if (form.mobileNo === "") {
    allowNext.value = true;
    console.log(allowNext);
  }
});
definePageMeta({
  layout: "",
});
</script>
  