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
                <el-input class="form_input" v-model="formData.phone" placeholder="Phone number" />
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
                  <el-option v-for="(item, index) in roleDropdown" :key="index" :label="item.name" :value="item.id"></el-option>
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
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { flashNotification } from "@/composables/useNotification.js";
import { getRoleDropdownList } from "@/api/role.js"
import { addAdmin } from "@/api/admin";

const form = ref(null);
const router = useRouter();
const formData = reactive({
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  role_id: "",

});

// const roleDropdown = reactive(); // when we have real API just uncomment it

const roleDropdown = reactive([
    {
      "id": 'c6e5d330-a71e-41f9-9b81-50b9967ba2ef',
      "name": "admin"
    },
    {
      "id": 'c6e5d330-a71e-41f9-9b81-50b9967ba2ef',
      "name": "super-admin"
    }
])



const formRules = {
  first_name: [
    { required: true, message: "Please enter your first name", trigger: "blur" },
  ],
  last_name: [
    { required: true, message: "Please enter your last_name", trigger: "blur" },
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

function handleSubmit() {
  console.log("formData", formData)
  // check validation 
  form.value.validate((valid) => {
    if (valid) {
      // make api call 
      addAdmin(formData).then((response)=> {
        console.log("response", response)
        // checking API response 
        if(response.success){
          flashNotification("success", "Admin Added Successfuly");
          router.push('/onboarding/add-admin/otp')
        } else {
          flashNotification("warning", "something went wrong");
        }
      })
      .catch((err)=>{
        console.log(err)
        flashNotification("warning", "something went wrong");
      })
    } else {
      flashNotification("warning", "Please fill required fields");
    }
  });
}

function getRole(){
  getRoleDropdownList().then((responce)=> {
    roleDropdown = responce.data.items
  })
}

const handleCancel = () => {
  router.push("/onboarding");
};

onMounted(()=> {
  getRole()
})

</script>

<style>
.admin-form {
  height: 100vh;
}
</style>
