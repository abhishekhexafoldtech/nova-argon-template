<template>
    <div>
      <div class="master-login">
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <div class="container">
                   <div class="login-form " style="height: max-content;">
                      <center><img src="@/assets/nova_logo.png" /></center>
                      <br>
                      <h3>Create new password</h3>

                      <div  style="width:80%;margin-left: 37px;" class="text-center">
                          <small class="text-center">your new password must be different from previous password.  </small>
                      </div>
                      <br>
                      <br>
                      <form @submit.prevent="handleSubmit" style="margin-top: -30px;">
                        <div style="position:absolute;width:max-content;background: white;margin-top: -15px;" class="mx-4" v-if="password">
                          <small>New password</small>
                        </div>
                        <div style="position:absolute;width:max-content;background: white;margin-top: 126px;" class="mx-3" v-if="confirmpassword">
                            <small>Confirm password</small>
                        </div>
                          
                          <input type="password"  class="form-control" placeholder="New password" v-model="password"/>
                          <br/>
                          <small class="text-danger text-left">Must be atleast 8 charecters which contain both number and special charecter</small>
                          <input type="password" name=""  class="form-control mt-4" id="" placeholder="Confirm password" v-model="confirmpassword"/>
                          <div class="mt-3">

                              <small class=" text-left" :class="passwordMatch ? 'text-success' : 'text-danger'">{{ passwordMatchContent }}</small>
                          </div>
                       
                       
                       <br/>
                       
                        <input type="submit" class="btn w-100 btn-primary" value="Next" />
                      </form>
                      <div class="py-2">
                        <NuxtLink to="/login"><u>Back to sign in</u></NuxtLink>
                      </div>
 
                  </div>
              </div>
          </el-col>
  
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"  >
            <div class="login-left">
              <div class="login-left-heading">
                <div class="login-left-icon">
                  <img src="@/assets/img/sign-in-password.png" class="rounded-3" style="padding: 140px;"/>
                </div>
              </div>
            </div>
          </el-col>
  
        </el-row>
      </div>
    </div>
  </template>
  
  
  <script setup>

  const password = ref("");
  const confirmpassword = ref("");
  const passwordMatch = ref(false)

  const passwordMatchContent = ref("Both passwords must match");

  watch(confirmpassword,()=>{
    if(password.value === confirmpassword.value){
        passwordMatch.value = true;
    }else{

        passwordMatch.value = false;
    }
    passwordMatch.value ? passwordMatchContent.value = "Both passwords are matched" : 'Both passwords must match'

  })

  definePageMeta({
    layout: "",
  });
  </script>
  
  
 
    