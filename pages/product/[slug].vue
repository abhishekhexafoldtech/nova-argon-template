<template>
  <div class="container-area">
    <el-row class="table-top">
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        <h4 class="heading">
          <span>Add Product </span>
        </h4>
        <!-- <span class="ms-3">Adding details of product </span> -->
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="search-wrapper">&nbsp;</div>
      </el-col>

      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6"> &nbsp; </el-col>
    </el-row>

    <div class="container-fluid mt-md-1 px-3 table-area">
      <div class="row">
        <div class="col-12 col-md-6">
          <el-form
            label-position="top"
            label-width="100px"
            :model="formData"
            :rules="formValidationRules"
            style="max-width: 100%; border-radius: 15px; height: 760px"
            class="bg-white px-5 py-4 rounded-5"
            ref="formRef"
          >
            <el-col :span="24">
              <h6 class="fw-bold pb-4" style="font-family: 'open', 'sans'">
                Product Information
              </h6>
            </el-col>

            <el-col :span="24">
              <el-form-item label="Product name" prop="productName">
                <el-input
                  placeholder="Enter product name"
                  v-model="formData.productName"
                />
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item
                class="fw-bolder"
                label="Product type"
                prop="productType"
              >
                <el-select
                  style="width: 100%"
                  v-model="formData.productType"
                  placeholder="Select product type"
                >
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item
                class="fw-bolder"
                label="Product category"
                prop="productCategory"
              >
                <el-select
                  style="width: 100%"
                  v-model="formData.productCategory"
                  placeholder="Select product category"
                >
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="Discount" prop="discount">
                <el-input
                  class=""
                  v-model="formData.discount"
                  placeholder="Enter discount"
                />
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="Product/price" prop="productPrice">
                <el-input
                  class=""
                  v-model="formData.productPrice"
                  placeholder="Enter product/price"
                />
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="Stock quantity" prop="stockQuantity">
                <el-input
                  class=""
                  v-model="formData.stockQuantity"
                  placeholder="Enter stock quantity"
                />
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="Minimum order unit" prop="minimumOrderUnit">
                <el-input
                  class=""
                  v-model="formData.minimumOrderUnit"
                  placeholder="Enter minimum order unit"
                />
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item
                label="Offer date"
                class="fw-bolder"
                prop="offerDate"
              >
                <el-date-picker
                  v-model="formData.offerDate"
                  type="daterange"
                  range-separator="To"
                  start-placeholder="Start date"
                  end-placeholder="End date"
                />
              </el-form-item>
            </el-col>
          </el-form>
        </div>
        <div class="col-12 col-md-6 p-0">
          <div
            class="product-image py-4"
            style="background-color: #edf2f7; border-radius: 15px; height: auto"
          >
            <el-col :span="24">
              <h6 class="fw-bold pb-4 ms-4" style="font-family: 'open', 'sans'">
                Product Image
              </h6>
              <MultiFileUpload
                @image-uploaded="handleImageUploaded"
                :imageUrls="formData.imageUrls"
              />
            </el-col>
            <span v-if="showErrorMessage" class="error-message">
              Please upload all images before submitting the form.
            </span>
          </div>
        </div>
        <div class="col-12 mt-5 d-flex gap-2 flex-row-reverse d-sm-block">
          <el-button
            class="float-end me-sm-3 px-5 shadow"
            color="#626aef"
            @click="handleSave"
            >Save</el-button
          >
          <RouterLink to="/product">
            <el-button
              class="float-end me-sm-3 px-5 border-1 shadow"
              style="border-color: #626aef"
              color="#edf2f7"
              >Cancel</el-button
            ></RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MultiFileUpload from "@/components/upload/MultiFileUpload.vue";
import { reactive, watch } from "vue";
const formData = reactive({
  imageUrls: [],
  productName: "",
  productType: "",
  productCategory: "",
  discount: "",
  productPrice: "",
  stockQuantity: "",
  minimumOrderUnit: "",
  offerDate: "",
});
const showErrorMessage = ref(false);
const formRef = ref(null);

const handleImageUploaded = (boxes) => {
  // Access the updated data from the child component
  // You can update the imageUrls array here with the updated data
  formData.imageUrls = boxes.map((box) => box.image);
};

// validation
const formValidationRules = reactive({
  productName: [
    {
      required: true,
      message: "Please enter product name",
      trigger: "blur",
    },
  ],
  productType: [
    {
      required: true,
      message: "Please enter product type",
      trigger: "blur",
    },
  ],
  productCategory: [
    {
      required: true,
      message: "Please enter product category",
      trigger: "blur",
    },
  ],
  discount: [
    {
      required: true,
      message: "Please enter discount",
      trigger: "blur",
    },
  ],
  productPrice: [
    {
      required: true,
      message: "Please enter product price",
      trigger: "blur",
    },
  ],
  stockQuantity: [
    {
      required: true,
      message: "Please enter stock quantity",
      trigger: "blur",
    },
  ],
  minimumOrderUnit: [
    {
      required: true,
      message: "Please enter minimum order unit",
      trigger: "blur",
    },
  ],
  offerDate: [
    {
      required: true,
      message: "Please enter offer date",
      trigger: "blur",
    },
  ],
});

//handle save
const handleSave = () => {
  formRef.value.validate((valid) => {
    let val = showErrorMessage.value;
    console.log(val);
    if (valid && val === false) {
      // Form is valid, do something with the data
      console.log("Form submitted:", JSON.stringify(formData));
    }
  });

  if (
    formData.imageUrls.length === 0 ||
    formData.imageUrls.some((url) => !url)
  ) {
    showErrorMessage.value = true;
    return false;
  } else {
    // At least one image is missing
    showErrorMessage.value = false;
  }
};

watch(
  () => formData.imageUrls,
  (newImageUrls) => {
    const isAllImagesUploaded = newImageUrls.every((url) => url);
    if (isAllImagesUploaded) {
      // All images have been uploaded
      showErrorMessage.value = false;
    } else {
      // At least one image is missing
      showErrorMessage.value = true;
    }
  }
);
</script>
<style>
.error-message {
  color: red;
  position: absolute;
  right: 15px;
}
</style>
