<template>
  <!-- <div class="maincontainer bg-light">
    <div>
      <div class="signinform">
        <div class="container">
          <div class="login-form " style="height: max-content;">
            <center><img src="@/assets/nova_logo.png" /></center>
            <br>
            <h3>Create new password</h3>
            <div style="width:80%;margin-left: 37px;" class="text-center">
              <small class="text-center">Your new password must be different from previous password. </small>
            </div>
            <br>
            <br>
            <form style="margin-top: -30px;" @submit.prevent="">
              <div style="position:absolute;width:max-content;background: white;margin-top: -15px;" class="mx-4"
                v-if="form.password">
                <small>New password</small>
              </div>
              <div class="d-flex">
                <input :type="eyeNewPassword == 'true' ? 'text' : 'password'" class="form-control"
                  placeholder="New password" v-model="form.password" minlength="8" required />
                <IconsEye class="position-relative" :eye="eyeNewPassword"
                  style="left:-2rem;top:5px;cursor: pointer;color: rgb(184, 184, 184);"
                  @click="eyeNewPassword == 'true' ? eyeNewPassword = 'false' : eyeNewPassword = 'true'" />
              </div>
              <br />
              <small class="text-danger text-left" v-if="!passwordMatch || !password > 8">Must be atleast 8 charecters
                which contain both number and special charecter</small>
              <div class="d-flex">
                <input :type="eyeConfirmPassword == 'true' ? 'text' : 'password'" name="" class="form-control mt-4" id=""
                  placeholder="Confirm password" v-model="form.confirmpassword" />
                <div style="position:absolute;width:max-content;background: white;margin-top: 9px;"
                  v-if="form.confirmpassword" class="mx-3">
                  <small>Confirm password</small>
                </div>
                <IconsEye class="position-relative" :eye="eyeConfirmPassword"
                  style="left:-2rem;top:30px;cursor: pointer;color: rgb(184, 184, 184);"
                  @click="eyeConfirmPassword == 'true' ? eyeConfirmPassword = 'false' : eyeConfirmPassword = 'true'" />
              </div>
              <div class="mt-3">
                <small class=" text-left" :class="passwordMatch ? 'text-success' : 'text-danger'">{{
                  passwordMatchContent }}</small>
              </div>
              <br />
              <button class="btn w-95 btn-primary my-2" @click.pre="handleSubmit">
                Next
              </button>
            </form>
            <div class="text-center pt-4">
              <NuxtLink to="/login"><u>Back to sign in</u></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="image p-5"
        style="background: linear-gradient(124deg, rgba(122, 165, 191, 0.6) -1.8%, rgba(69, 105, 135, 0.6) 105.23%);">
        <img src="@/assets/img/sign-in-password.png" width="580" style="margin-top: 5rem;" />
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
              <form class="form_inner" @submit.prevent="">
                <h3>Create new password</h3>
                <p>Your new password must be different from previous password</p>
                <div class="fieldrow">
                  <input :type="eyeNewPassword == 'true' ? 'text' : 'password'" class="form_input password" v-model="form.password"
                    minlength="8" required />
                  <label class="form_label">New password</label>
                  <IconsEye class="view_pass" :eye="eyeNewPassword"
                    @click="eyeNewPassword == 'true' ? eyeNewPassword = 'false' : eyeNewPassword = 'true'" />
                </div>
                <small v-if="!passwordMatch || !password > 8">Must be atleast 8 characters which contain both number and special charecter</small>
                <div class="fieldrow">
                  <input :type="eyeConfirmPassword == 'true' ? 'text' : 'password'" name="" class="form_input password"
                    v-model="form.confirmpassword" />
                  <label class="form_label">Confirm password</label>
                  <IconsEye class="view_pass" :eye="eyeConfirmPassword"
                    @click="eyeConfirmPassword == 'true' ? eyeConfirmPassword = 'false' : eyeConfirmPassword = 'true'" />
                </div>
                <small :class="passwordMatch ? 'text-success' : 'text-danger'">{{ passwordMatchContent }}</small>
                <div class="fieldrow">
                  <button class="btn w-100 btn-primary" @click="handleSubmit">Next</button>
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
import IconsEye from "@/components/icons/Eye.vue";
const form = reactive({
  password: null,
  confirmpassword: null
})
const passwordMatch = ref(false);
const eyeNewPassword = ref("false");
const eyeConfirmPassword = ref("false")
const passwordMatchContent = ref("Both passwords must match");
watch(form, () => {
  console.log(form)
  if (form.password === form.confirmpassword && form.password) {
    passwordMatch.value = true;
  } else {
    passwordMatch.value = false;
  }
  passwordMatch.value ? passwordMatchContent.value = "Both passwords are matched" : 'Both passwords must match'
});
const handleSubmit = () => {
  if (passwordMatch && form.password.length >= 8) {
    const router = useRouter();
    router.push("/dashboards")
  }
}
definePageMeta({
  layout: "",
});
</script>


<style scoped>
@media screen and (max-width: 750px) {
  .container {
    width: 100vw;
  }

  .login-form {
    padding: 20px 10px 10px 15px;
  }
}

@media screen and (max-width: 450px) {
  .login-form {
    padding: 30px 10px 30px 10px;
  }
}
</style>
  
  
 
    