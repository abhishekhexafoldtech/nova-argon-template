<template>
  <section class="edit_mang_wrap">
    <div class="mang_inner add_admin">
      <div class="mang_title">
        <h4>Add distributor</h4>
        <p>Enter your details</p>
      </div>
      <el-form :model="newDistributorForm" :rules="newDistributorFormRoles" ref="formRef" label-position="top" label-width="100px" size="large">
        <el-row :gutter="25">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="fieldrow mar15">
              <el-form-item label="First Name" prop="first_name">
                <el-input placeholder="First name" v-model="newDistributorForm.first_name" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="fieldrow mar15">
              <el-form-item label="Last Name" prop="last_name">
                <el-input placeholder="Last name" v-model="newDistributorForm.last_name" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="fieldrow mar15">
              <el-form-item label="Phone Number" prop="phone_number">
                <el-input type="number" placeholder="Phone number" v-model="newDistributorForm.phone_number" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="fieldrow mar15">
              <el-form-item label="Email" prop="email">
                <el-input type="email" placeholder="Email" v-model="newDistributorForm.email" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="fieldrow mar15">
              <el-form-item label="Role" prop="role">
                <el-select class="form_input" placeholder="Plese select role" v-model="newDistributorForm.role">
                  <el-option label="Admin role" value="admin_role" />
                  <el-option label="Super Admin Role" value="super_admin" />
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div class="perm_footer">
        <el-button class="btn btn-default" @click="handleCancel">Cancel</el-button>
        <el-button class="btn btn-primary" type="primary" @click="handleSubmit(formRef)">Continue</el-button>
      </div>
    </div>
  </section>
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
  if (form.first_name.length || form.last_name.length || form.phone_number || form.email || form.role.length) {
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