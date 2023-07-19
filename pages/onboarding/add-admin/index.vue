<template>
  <section class="edit_mang_wrap">
    <div class="mang_inner add_admin">
      <div class="mang_title">
        <h3>Add New Admin</h3>
        <p>Enter your details</p>
      </div>
      <el-form
            ref="form"
            label-position="top"
            label-width="100px"
            :model="formData"
            size="large"
            :rules="formRules"
          >
        <div class="fieldrow w455 mar15">
          <el-form-item label="Name" prop="name">
              <el-input class="form_input" v-model="formData.name" placeholder="Name" />
            </el-form-item>
        </div>
        <div class="fieldrow w455 mar15">
          <el-form-item label="Phone number" prop="phone_number">
              <el-input class="form_input" v-model="formData.phone_number" placeholder="Phone number" />
            </el-form-item>
        </div>
        <div class="fieldrow w455">
          <el-form-item label="Email" prop="email">
              <el-input class="form_input" v-model="formData.email" placeholder="Email" />
            </el-form-item>
        </div>
      </el-form>
      <div class="perm_footer">
        <el-button class="btn btn-default" @click="handleCancel">Cancel</el-button>
        <el-button class="btn btn-primary" @click="handleSubmit">Continue</el-button>
      </div>
    </div>
  </section>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { flashNotification } from "@/composables/useNotification.js"

  const form = ref(null)
  const router = useRouter()
  const formData = reactive({
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
  const handleSubmit = () => {
    form.value.validate((valid) => {
      if (valid) {
        console.log(JSON.stringify(formData))
        router.push('/onboarding/add-admin/otp')
      } else {
        flashNotification('warning', 'Please fill required fields')
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
  