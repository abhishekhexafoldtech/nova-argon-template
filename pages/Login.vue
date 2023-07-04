<template>
  <div>
    <div class="maincontainer bg-light">
      <div>
        <div class="signinform">
          <!-- sign in form -->

          <div class="container">
            <div class="login-form">
              <center><img src="@/assets/nova_logo.png" /></center>
              <br />
              <h3>Sign In</h3>
              <br />
              <small>Enter your email and password to sign in</small>
              <br />
              <br />
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

          <!-- sign in form -->
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
          <img src="../assets/img/forgot.png" />
        </div>
      </div>
    </div>
  </div>
</template>


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
</script>


<style scoped>
.login-right {
  margin: 10px;
  border-radius: 10px !important;
  background: linear-gradient(
    124deg,
    rgba(122, 165, 191, 0.6) -1.8%,
    rgba(69, 105, 135, 0.6) 105.23%
  );
}
</style>
  