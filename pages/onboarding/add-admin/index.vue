<template>
  <div class="container p-4 mt-3">
    <div class="row bg-white rounded-3 admin-form m-1">
      <div class="col col-md-4 ms-3 mt-3">
        <h5>Add new admin</h5>
        <p>Enter your details</p>

        <el-form
          ref="form"
          label-position="top"
          label-width="100px"
          :model="newAdminForm"
          size="large"
          :rules="formRules"
        >
          <el-form-item label="Name" prop="name">
            <el-input v-model="newAdminForm.name" placeholder="Name" />
          </el-form-item>

          <el-form-item label="Phone number" prop="phone_number">
            <el-input v-model="newAdminForm.phone_number" placeholder="Phone number" />
          </el-form-item>

          <el-form-item label="Email" prop="email">
            <el-input v-model="newAdminForm.email" placeholder="Email" />
          </el-form-item>
        </el-form>

        <div class="row mt-5">
          <div class="col-6">
            <button class="btn border border-primary w-100" @click="handleCancel">Cancel</button>
          </div>
          <div class="col-6">
            <button class="btn btn-primary w-100" @click="handleSubmit">Continue</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

const newAdminForm = reactive({
  name: '',
  phone_number: '',
  email: ''
})

const formRules = {
  name: [{ required: true, message: 'Please enter your name', trigger: 'blur' }],
  phone_number: [{ required: true, message: 'Please enter your phone number', trigger: 'blur' }],
  email: [
    { required: true, message: 'Please enter your email', trigger: 'blur' },
    { type: 'email', message: 'Please enter a valid email address', trigger: 'blur' }
  ]
}
const form = ref(null)
const handleSubmit = () => {
  form.value.validate((valid) => {
    if (valid) {
      console.log(JSON.stringify(newAdminForm))
      router.push('/onboarding/add-admin/otp')
    } else {
      ElMessage.error('Please fill in all the required fields')
    }
  })
}

const handleCancel = () => {
  router.push('/onboarding')
}
</script>

<style>
.admin-form {
  height: 100vh;
}
</style>
