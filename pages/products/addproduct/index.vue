<template>
  <div class="container">
    <h6 class="text-white mt-5">List of products</h6>
    <p class="title">Adding detailes of product.</p>
    <div class="row mt-5">

      <!-- Image Upload -->

      <div class="col-md-4 upload">
        <h6 class="mb-4">Product Image</h6>
        <el-upload v-model="formData.productImage" class="avatar-uploader shadow-sm"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :show-file-list="false"
          :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="formData.productImage" :src="formData.productImage" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </div>

      <!-- FORM START -->

      <div class="col-md-7 product-info ms-md-5">
        <h5 class="mb-5 mt-4">Product Information</h5>
        <div style="margin: 20px" />
        <el-form label-position="top" label-width="100px" :model="formData" style="max-width:100%">
          <el-row :gutter="30">
            <el-col :span="12">
              <el-form-item label="Product name">
                <el-input class="" v-model="formData.productName" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Product/price">
                <el-input class="" v-model="formData.productPrice" />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="30">
            <el-col :span="12">
              <el-form-item label="Product type">
                <el-select-v2 style="width:100%" v-model="formData.productType" :options="options"
                  placeholder="Please select" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Stock Quantity">
                <el-input class="" v-model="formData.stockQuantity" />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="30">
            <el-col :span="12">
              <el-form-item label="Product category">
                <el-select-v2 style="width:100%" v-model="formData.productCategory" :options="options"
                  placeholder="Please select" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Minimum order unit">
                <el-input class="" v-model="formData.minimumOrderUnit" />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="30">
            <el-col :span="12">
              <el-form-item label="Discount(Optional)">
                <el-input class="" v-model="formData.discount" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Offer date(Optional)">
                <el-date-picker v-model="formData.offerDate" type="daterange" range-separator="To"
                  start-placeholder="Start date" end-placeholder="End date" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="mt-5 mb-5">
      <el-button>Cancel</el-button>
      <el-button type="success" @click="addData">
        <el-icon>
          <Plus />
        </el-icon> Add product</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import { reactive, ref } from 'vue'

const formData = reactive({
  productImage: null as string | null,
  productName: "",
  productPrice: "",
  productType: "",
  stockQuantity: "",
  productCategory: "",
  minimumOrderUnit: "",
  discount: "",
  offerDate: ""
})

//add data
const addData = async () => {
  console.log(JSON.stringify(formData))
}

 //image processing
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  formData.productImage = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}


//select box
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))

</script>

<style scoped>
.title {
  color: white;
}

.product-info {
  background-color: white;
  border-radius: 12px;
}

.upload {
  padding: 50px 0px 50px 0px;
  border-radius: 12px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-uploader .avatar {
  width: 320px;
  height: 320px;
  display: block;
  border: none;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 320px;
  height: 320px;
  text-align: center;
  border: 1px solid rgb(249, 247, 247);
  border-radius: 12px;
}
</style>