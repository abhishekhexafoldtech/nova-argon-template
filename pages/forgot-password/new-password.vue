<template>
  <div>
    <div class="maincontainer bg-light">
      <div>
        <div class="signinform">
          <!-- sign in form -->
          <div class="container">
            <div class="login-form" style="height: max-content">
              <center><img src="@/assets/nova_logo.png" /></center>
              <br />
              <h3>Create new password</h3>
              <div style="width: 80%; margin-left: 37px" class="text-center">
                <small class="text-center"
                  >Your new password must be different from previous password.
                </small>
              </div>
              <br />
              <br />
              <form @submit.prevent="handleSubmit" style="margin-top: -30px">
                <div
                  style="
                    position: absolute;
                    width: max-content;
                    background: white;
                    margin-top: -15px;
                  "
                  class="mx-4"
                  v-if="password"
                >
                  <small>New password</small>
                </div>
                <div
                  style="
                    position: absolute;
                    width: max-content;
                    background: white;
                    margin-top: 126px;
                  "
                  class="mx-3"
                  v-if="confirmpassword"
                >
                  <small>Confirm password</small>
                </div>

                <div class="d-flex">
                  <input
                    :type="eyeNewPassword == 'true' ? 'text' : 'password'"
                    class="form-control"
                    placeholder="New password"
                    v-model="password"
                  />
                  <IconsEye
                    class="position-relative"
                    :eye="eyeNewPassword"
                    style="
                      left: -2rem;
                      top: 5px;
                      cursor: pointer;
                      color: rgb(184, 184, 184);
                    "
                    @click="
                      eyeNewPassword == 'true'
                        ? (eyeNewPassword = 'false')
                        : (eyeNewPassword = 'true')
                    "
                  />
                </div>

                <br />
                <small class="text-danger text-left"
                  >Must be atleast 8 charecters which contain both number and
                  special charecter</small
                >
                <div class="d-flex">
                  <input
                    :type="eyeConfirmPassword == 'true' ? 'text' : 'password'"
                    name=""
                    class="form-control mt-4"
                    id=""
                    placeholder="Confirm password"
                    v-model="confirmpassword"
                  />
                  <IconsEye
                    class="position-relative"
                    :eye="eyeConfirmPassword"
                    style="
                      left: -2rem;
                      top: 30px;
                      cursor: pointer;
                      color: rgb(184, 184, 184);
                    "
                    @click="
                      eyeConfirmPassword == 'true'
                        ? (eyeConfirmPassword = 'false')
                        : (eyeConfirmPassword = 'true')
                    "
                  />
                </div>
                <div class="mt-3">
                  <small
                    class="text-left"
                    :class="passwordMatch ? 'text-success' : 'text-danger'"
                    >{{ passwordMatchContent }}</small
                  >
                </div>

                <br />

                <NuxtLink to="/dashboards"
                  ><input
                    type="submit"
                    class="btn w-100 btn-primary"
                    value="Next"
                /></NuxtLink>
              </form>
              <div class="text-center">
                <NuxtLink to="/login"><u>Back to sign in</u></NuxtLink>
              </div>
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
          <img
            src="@/assets/img/forgot.png"
            width="580"
            style="margin-top: 5rem"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
  
  <script setup>
const password = ref("");
const confirmpassword = ref("");
const passwordMatch = ref(false);
const eyeNewPassword = ref("false");
const eyeConfirmPassword = ref("false");

const passwordMatchContent = ref("Both passwords must match");

watch(confirmpassword, () => {
  if (password.value === confirmpassword.value) {
    passwordMatch.value = true;
  } else {
    passwordMatch.value = false;
  }
  passwordMatch.value
    ? (passwordMatchContent.value = "Both passwords are matched")
    : "Both passwords must match";
});

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
  
  
 
    