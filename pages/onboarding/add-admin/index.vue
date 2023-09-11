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
              <el-form-item label="First Name" prop="first_name">
                <el-input class="form_input" v-model="formData.first_name" placeholder="First name" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="fieldrow w455 mar15">
              <el-form-item label="Last Name" prop="last_name">
                <el-input class="form_input" v-model="formData.last_name" placeholder="Last name" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="fieldrow w455 mar15">
              <el-form-item label="Phone Number" prop="phone">
                <el-input type="number" class="form_input" v-model="formData.phone" placeholder="Phone number" />
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
              <el-form-item label="Role" prop="role_id">
                <el-select class="form_input" v-model="formData.role_id" placeholder="Plese select role">
                  <el-option v-for="item in roles" :key="item.value" :label="item.name" :value="item.id" />
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
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { flashNotification } from "@/composables/useNotification.js";
import { addNewAdmin } from "@/api/admin";
import { getRoleDropdownList } from "@/api/role"

const form = ref(null);
const router = useRouter();
const roles = ref({})
const formData = reactive({
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  role_id: "",
});

// submit form data
const handleSubmit = async () => {
  form.value.validate((valid) => {
    if (valid) {
      const phone = formData.phone;
      formData.phone = `+233${phone}`
      addNewAdmin({...formData}).then(response => {
        if(response.status == 201 ){
          flashNotification("success","Admin added successfully.");
          router.admin_data = {
            phone : phone,
            email : formData.email
          }
          router.push("/onboarding/add-admin/otp");
        }else if(response.status == 400){
          flashNotification("warning","User may already exists please check the input fileds again..");
        }
      }).catch(error => {
        if(error.response.data.error_message.split("Key")[1].split("(")[1].split(")")[0]==="email")
        {
         flashNotification("warning", `${formData.email} already exists`);
        }
        else if(error.response.data.error_message.split("Key")[1].split("(")[1].split(")")[0]==="phone")
        {
          flashNotification("warning", `${formData.phone} already exists`);
        }
        else{
          flashNotification("warning", `Something went wrong please try again.`);
        }
      })
    } else {
      flashNotification("warning", "Please fill required fields");
    }
  });
};

// get all roles for select role dropdown
function getAdminRoles() {
  getRoleDropdownList().then(response => {
    roles.value = response.data.data;
  }).catch(err => {
    console.log(err)
  })
}


const handleCancel = () => {
  router.push("/onboarding");
};


// rules for validation
const formRules = {
  first_name: [
    { required: true, message: "Please enter your firstName", trigger: "blur" },
  ],
  last_name: [
    { required: true, message: "Please enter your lastName", trigger: "blur" },
  ],
  phone: [
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
  role_id: [
    {
      required: true,
      message: "Please select role",
      trigger: "change",
    },
  ],
};


onMounted(() => {
  getAdminRoles()
})


</script>

<style>
.admin-form {
  height: 100vh;
}
</style>
