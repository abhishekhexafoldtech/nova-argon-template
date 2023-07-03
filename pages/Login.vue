<template>
  <div>
    <div class="master-login">
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="container">
                 <div class="login-form">
                    <center><img src="@/assets/nova_logo.png" /></center>
                    <br>
                    <h3>Sign In</h3>
                    <br>
                    <small>Enter your email and password to sign in</small>
                    <br>
                    <br>
                    <el-form
                        ref="formDataRef"
                        :model="formData"
                        :rules="loginRules"
                        auto-complete="on"
                        label-position="top"
                    >
                        <el-form-item label="Email/Phone number" prop="userName">
                            <el-input autocomplete="off" v-model="formData.userName" placeholder="Email/Phone number"></el-input>
                        </el-form-item>

                        <el-form-item label="Password" prop="password">
                            <el-input type="password" v-model="formData.password" placeholder="Password" autocomplete="off"></el-input>
                        </el-form-item>

                        <NuxtLink to="/forgot-password"><p class="forgot-pass-txt">Forgot password</p> </NuxtLink>
                        <NuxtLink to="/dashboards"><el-button class="login-btn" type="primary" @click="handleLogin" >Sign in</el-button> </NuxtLink>

                    </el-form>
                </div>
            </div>
        </el-col>

        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"  >
          <div class="login-right">
            <div class="login-left-heading">
              <div class="login-left-icon">
                <img src="@/assets/img/forgot.png" class="rounded-3"  />
                <!-- <img src="@/assets//img/banner/mask-group.png" /> -->
              </div>
            </div>
          </div>
        </el-col>

      </el-row>
    </div>
  </div>
</template>


<script setup>

let formData = reactive({
    userName : null,
    password : null
})

const  loginRules = reactive({
        userName: [{
          required: true,
          message: "Please enter the correct user name",
          trigger: "blur",
        }],
       
        password: [{
          required: true,
          message: "The password can not be less than 6 digits",
          trigger: "blur",
        }],
      }) 

function handleLogin() {
    console.log('form data', formData)
    formData.validate((valid) => {
        if (valid) {
          // Form is valid, perform further actions
            console.log('form data', formData)
        } else {
          // Form is invalid, handle error cases
          console('something wrong')
        }
    })
}

definePageMeta({
  layout: "",
});
</script>


<style scoped>
.login-right {
  margin: 10px;
  border-radius: 10px !important;
  background: linear-gradient(124deg, rgba(122, 165, 191, 0.6) -1.8%, rgba(69, 105, 135, 0.6) 105.23%)
}

</style>
  