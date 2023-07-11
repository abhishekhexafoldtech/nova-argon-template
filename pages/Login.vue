<template>
  <!-- <div class="maincontainer bg-light">
    <div>
      <div class="signinform">
        <div class="container">
          <div class="login-form text-center " style="height: max-content;">
            <center><img src="@/assets/nova_logo.png" /></center>
            <br>
            <h3>Sign in</h3>
            <div style="width:80%;margin-left: 37px;" class="text-center">
              <small class="text-center">Enter your email and password to sign in </small>
            </div>
            <br>
            <br>
            <form style="margin-top: -30px;" @submit.prevent="">
              <div style="position:absolute;width:max-content;background: white;margin-top: -15px;" class="mx-4"
                v-if="form.userId">
                <small>Email/Phone number</small>
              </div>
              <div class="">
                <input type="text" class="form-control " placeholder="Email/Phone number" v-model="form.userId"
                  required />
              </div>
              <small class="text-danger text-left" v-if="!passwordMatch || !password > 8"></small>
              <div class="">
                <input :type="eyePassword == 'true' ? 'text' : 'password'" name="" class="form-control mt-4" id=""
                  placeholder="Password" v-model="form.password" required />
                <div style="position:absolute;width:max-content;background: white;margin-top: -55px;" v-if="form.password"
                  class="mx-4">
                  <small>password</small>
                </div>
                <IconsEye class="position-relative eye text-align-left" :eye="eyePassword"
                  style="top:-33px;cursor: pointer;color: rgb(184, 184, 184);width:22px"
                  @click="eyePassword == 'true' ? eyePassword = 'false' : eyePassword = 'true'" />
              </div>
              <div class="mt-3">
                <small class="text-left text-danger" style="position: relative;top:-20px" v-if="error"> Please provide
                  valid details</small>
              </div>
              <div class="p-3 w-100 text-end pointer" role="button" style="margin-top: -30px;">
                <NuxtLink to="/forgot-password">Forgot password</NuxtLink>
              </div>
              <button class="btn w-100 btn-primary " @click="handleSubmit">
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
                <h3>Sign In</h3>
                <p>Enter your email and password to sign in</p>
                <div class="fieldrow">
                  <input type="text" class="form_input" v-model="form.userId" required />
                  <label class="form_label">Email / Phone Number</label>
                </div>
                <div class="fieldrow">
                  <input :type="eyePassword == 'true' ? 'text' : 'password'" name="" class="form_input password" id="" v-model="form.password" required />
                  <label class="form_label">Password</label>
                  <IconsEye class="view_pass" :eye="eyePassword" @click="eyePassword == 'true' ? eyePassword = 'false' : eyePassword = 'true'" />
                </div>
                <div class="fieldrow text-right">
                  <NuxtLink to="/forgot-password">Forgot password</NuxtLink>
                </div>
                <small v-if="error">Incorrect email or password combination</small>
                <div class="fieldrow">
                  <button class="btn w-100 btn-primary" @click="handleSubmit">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="login_right">
            <img src="@/assets/img/sign-in-password.png" />
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>
  
  
<script setup>
import IconsEye from "@/components/icons/Eye.vue";
const form = reactive({
  userId: null,
  password: null
})
const error = ref(false)
const eyePassword = ref("false");
const handleSubmit = () => {
  if (form.userId && form.password) {

    const router = useRouter();
    router.push("/dashboards")
  }
}
definePageMeta({
  layout: "",
});
</script>
  
  
 
    

























































<!-- <template>
  <div>
    <div class="maincontainer bg-light">
      <div>
        <div class="signinform">

          <div class="container">
            <div class="login-form">
              <center><img src="@/assets/nova_logo.png" /></center>
              <br />
              <h3>Sign In</h3>
              <br />
              <small>Enter your email and password to sign in</small>
              <br />
              <br />


              <form>

              </form>




              <el-form
                ref="formDataRef"
                :model="formData"
                :rules="loginRules"
                auto-complete="on"
                label-position="top"
              >
                <el-form-item label="Email/Phone number" prop="userName">
                  <el-input
                    autocomplete="off"
                    v-model="formData.userName"
                    placeholder="Email/Phone number"
                  ></el-input>
                </el-form-item>

                <el-form-item label="Password" prop="password">
                  <el-input
                    type="password"
                    v-model="formData.password"
                    placeholder="Password"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>

                <NuxtLink to="/forgot-password"
                  ><p class="forgot-pass-txt">Forgot password</p>
                </NuxtLink>
                <NuxtLink to="/dashboards"
                  ><el-button
                    class="login-btn"
                    type="primary"
                    @click="handleLogin"
                    >Sign in</el-button
                  >
                </NuxtLink>
              </el-form>
            </div>
          </div>

        </div>
      </div>
      <div>
        <div
          class="image p-5"
          style="
            background: linear-gradient(
              124deg,
              rgba(122, 165, 191, 0.6) -1.8%,
              rgba(69, 105, 135, 0.6) 105.23%
            );
          "
        >
          <img
            src="@/assets/img/sign-in-password.png"
            width="580"
            style="margin-top: 5rem"
          />
        </div>
      </div>
    </div>
  </div>
</template> -->

<!-- 
<script setup>
let formData = reactive({
  userName: null,
  password: null,
});

const loginRules = reactive({
  userName: [
    {
      required: true,
      message: "Please enter the correct user name",
      trigger: "blur",
    },
  ],

  password: [
    {
      required: true,
      message: "The password can not be less than 6 digits",
      trigger: "blur",
    },
  ],
});

function handleLogin() {
  console.log("form data", formData);
  formData.validate((valid) => {
    if (valid) {
      // Form is valid, perform further actions
      console.log("form data", formData);
    } else {
      // Form is invalid, handle error cases
      console("something wrong");
    }
  });
}

definePageMeta({
  layout: "",
});
</script> -->


<!-- <style scoped>
.login-right {
  margin: 10px;
  border-radius: 10px !important;
  background: linear-gradient(
    124deg,
    rgba(122, 165, 191, 0.6) -1.8%,
    rgba(69, 105, 135, 0.6) 105.23%
  );
}
</style> -->
  