<template>
  <section class="edit_mang_wrap">
    <div class="mang_inner add_admin">
      <div class="mang_title">
        <h3>Add New Admin</h3>
        <p>Enter your details</p>
      </div>
      <el-form ref="form" label-position="top" label-width="100px" :model="formData" size="large" :rules="formRules">
        <el-row>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="fieldrow w455 mar15">
              <el-form-item label="First Name" prop="firstName">
                <el-input class="form_input" v-model="formData.firstName" placeholder="First name" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="fieldrow w455 mar15">
              <el-form-item label="Last Name" prop="lastName">
                <el-input class="form_input" v-model="formData.lastName" placeholder="Last name" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="fieldrow w455 mar15">
              <el-form-item label="Phone Number" prop="phone_number">
                <el-input class="form_input" v-model="formData.phone_number" placeholder="Phone number" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="fieldrow w455 mar15">
              <el-form-item label="Email" prop="email">
                <el-input class="form_input" v-model="formData.email" placeholder="Email" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="fieldrow w455">
              <el-form-item label="Role" prop="role">
                <el-select class="form_input" v-model="formData.role" placeholder="Plese select role">
                  <el-option label="Admin role" value="admin_role" />
                  <el-option label="Super Admin Role" value="super_admin" />
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div class="perm_footer"><el-button class="btn btn-default" @click="handleCancel">Cancel</el-button>
        <el-button class="btn btn-primary" @click="handleSubmit">Continue</el-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { flashNotification } from "@/composables/useNotification.js";
import { addNewAdmin } from "@/api/admin";

const form = ref(null);
const router = useRouter();
const formData = reactive({
  firstName: "",
  lastName: "",
  phone_number: "",
  email: "",
  role: "",
});

const handleSubmit = async() => {

  // try{
  //   const res = await axios.post("https://auth.newgas.online/nova_auth/admin",
  //   {
  //     "first_name": "mahsh",
  //     "last_name": "polav",
  //     "email": "mahsp@gmail.com",
  //     "phone": "+233546546510",
  //     "role_id": "c6e5d330-a71e-41f9-9b81-50b9967ba2ef"
  //   }
  //   );
  //   console.log(res)
  // }catch(err){
  //   console.log({error: err.message})
  // }

  


  addNewAdmin({
    "first_name": "mhsh",
    "last_name": "polaav",
    "email": "mahhp@gmail.com",
    "phone": "+233546546510",
    "role_id": "c6e5d330-a71e-41f9-9b81-50b9967ba2ef"
  }).then(response => {
    console.log("responce.1",response)
  }).catch(error =>{
    console.log(error.message)
  })
  // form.value.validate((valid) => {
  //   if (valid) {
  //     console.log(JSON.stringify(formData));
  //   } else {
  //     flashNotification("warning", "Please fill required fields");
  //   }
  // });
};
const handleCancel = () => {
  router.push("/onboarding");
};
const formRules = {
  firstName: [
    { required: true, message: "Please enter your firstName", trigger: "blur" },
  ],
  lastName: [
    { required: true, message: "Please enter your lastName", trigger: "blur" },
  ],
  phone_number: [
    {
      required: true,
      message: "Please enter your phone number",
      trigger: "blur",
    },
  ],
  email: [
    { required: true, message: "Please enter your email", trigger: "blur" },
    {
      type: "email",
      message: "Please enter a valid email address",
      trigger: "blur",
    },
  ],
  role: [
    {
      required: true,
      message: "Please select role",
      trigger: "change",
    },
  ],
};

</script>

<style>
.admin-form {
  height: 100vh;
}
</style>
