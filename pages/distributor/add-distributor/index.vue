<template>
  <div class="pt-5 mx-4">
    <el-card class="rounded-3">
      <div class="p-2">
        <h4>Add distributor</h4>
        <p>Enter your details</p>
        <el-form class="" :model="newDistributorForm" :rules="newDistributorFormRoles" ref="formRef">
          <el-form-item prop="first_name">
            <el-input placeholder="First name" v-model="newDistributorForm.first_name" />
          </el-form-item>
          <el-form-item prop="last_name">
            <el-input placeholder="Last name" v-model="newDistributorForm.last_name" />
          </el-form-item>
          <el-form-item prop="phone_number">
            <el-input type="number" placeholder="Phone number" v-model="newDistributorForm.phone_number" />
          </el-form-item>
          <el-form-item prop="email">
            <el-input type="email" placeholder="Email" v-model="newDistributorForm.email" />
          </el-form-item>
          <el-form-item prop="role">
            <el-select class="form_input" placeholder="Plese select role" v-model="newDistributorForm.role">
              <el-option label="Admin role" value="admin_role" />
              <el-option label="Super Admin Role" value="super_admin" />
            </el-select>
          </el-form-item>
        </el-form>
        <div class="d-flex w-100 justify-content-end mt-4 ">
          <el-button @click="handleCancel">Cancel</el-button>
          <el-button class="btn btn-primary" type="primary" @click="handleSubmit(formRef)">Continue</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { flashNotification } from "@/composables/useNotification.js"
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const formRef = ref();
const newDistributorForm = reactive({
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  role: ""
})
function handleSubmit(formEl) {
  if (!formEl) { return };
  formEl.validate((valid) => {
    if (valid) {
      console.log("newDistributorForm", newDistributorForm);
      flashNotification('success', `new distributor ${newDistributorForm.first_name} is added.`)
      router.push("/distributor/add-distributor/otp");
    } else {
      console.log('error submit!');
      flashNotification('warning', 'Please fill required fields')
      return false
    }
  })
};
function handleCancel() {
  const form = newDistributorForm
  if(form.first_name.length || form.last_name.length || form.phone_number || form.email || form.role.length){
    flashNotification('warning', 'Entered data for new distributor is lost.');
  }
  router.push("/")
}
const newDistributorFormRoles = reactive({
  first_name: [{ required: true, message: 'Please provide first name.', trigger: ['blur', 'change'] }],
  last_name: [{ required: true, message: 'Please provide last name.', trigger: ['blur', 'change'] }],
  phone_number: [{ required: true, message: 'Please provide phone number.', trigger: ['blur', 'change'] }],
  email: [{ required: true, message: 'Please provide a valid email address.', trigger: ['blur', 'change'] }],
  role: [{ required: true, message: 'Please select a role for distributor.', trigger: ['blur', 'change'] }],
});
definePageMeta({
  layout: "default",
});
</script>