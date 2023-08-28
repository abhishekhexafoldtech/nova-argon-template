<template>
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
                  <input 
                    type="text" 
                    class="form_input" :class="formData.email ?  'has_value' : ''" 
                    v-model="formData.email" 
                    required />
                  <label class="form_label">Email / Phone Number</label>
                </div>
                <div class="fieldrow">
                  <input 
                    :type="eyePassword == 'true' ? 'text' : 'password'" 
                    class="form_input password" 
                    :class="formData.password ?  'has_value' : ''"
                    v-model="formData.password" 
                    required 
                    />
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
import { useAuthStore } from "@/stores/authStore"
const AuthStore = useAuthStore()

const formData = reactive({
  email: null,
  password: null
})

const error = ref(false)
const eyePassword = ref("false");

const handleSubmit = () => {
  if (formData.email && formData.password) {
    AuthStore.Login({...formData}).then(() => {
        const router = useRouter();
        router.push("/dashboards")
    })
    .catch(error => {
					console.log(error)
    })
    .finally(() => {

    })
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
  