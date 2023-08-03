<template>
  <div class="container-area">
    <h4 class="page_heading">{{ currentRouteName }} Product</h4>
    <p class="page_subheading">Adding details of product</p>
    <!-- <el-row class="table-top">
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        <h4 class="heading">
          <span></span>
        </h4>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="search-wrapper">&nbsp;</div>
      </el-col>

      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6"> &nbsp; </el-col>
    </el-row> -->

    <div class="add_product">
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="10" :xl="10">
          <el-form class="white_form" label-position="top" label-width="100px" :model="formData"
            :rules="formValidationRules" ref="formRef">
            <h5 class="form_title">Product Information</h5>
            <div class="fieldrow">
              <el-form-item label="Product name" prop="productName">
                <el-input placeholder="Enter product name" v-model="formData.productName" />
              </el-form-item>
            </div>
            <div class="fieldrow">
              <el-form-item label="Product type" prop="productType">
                <el-select v-model="formData.productType" placeholder="Select product type">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </div>
            <div class="fieldrow">
              <el-form-item label="Product category" prop="productCategory">
                <el-select v-model="formData.productCategory" placeholder="Select product category">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </div>
            <div class="fieldrow">
              <el-form-item label="Discount" prop="discount">
                <el-input v-model="formData.discount" placeholder="Enter discount" />
              </el-form-item>
            </div>
            <div class="fieldrow">
              <el-form-item label="Product/price" prop="productPrice">
                <el-input v-model="formData.productPrice" placeholder="Enter product/price" />
              </el-form-item>
            </div>
            <div class="fieldrow">
              <el-form-item label="Stock quantity" prop="stockQuantity">
                <el-input v-model="formData.stockQuantity" placeholder="Enter stock quantity" />
              </el-form-item>
            </div>
            <div class="fieldrow">
              <el-form-item label="Minimum order unit" prop="minimumOrderUnit">
                <el-input v-model="formData.minimumOrderUnit" placeholder="Enter minimum order unit" />
              </el-form-item>
            </div>
            <div class="fieldrow">
              <el-form-item label="Offer date" prop="offerDate">
                <el-date-picker v-model="formData.offerDate" type="daterange" range-separator="To"
                  start-placeholder="Start date" end-placeholder="End date" />
              </el-form-item>
            </div>
          </el-form>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="14" :xl="14">
          <div class="pr_img_up">
            <h5 class="form_title mb-4">Product Image</h5>
            <MultiFileUpload @image-uploaded="handleImageUploaded" :imageUrls="formData.imageUrls" />
            <span v-if="showErrorMessage" class="error-message">
              Please upload all images before submitting the form.
            </span>
          </div>
        </el-col>
      </el-row>
      <div class="add_pr_footer">
        <RouterLink class="btn btn-default" to="/product">Cancel</RouterLink>
        <el-button class="btn btn-primary" @click="handleSave">Save</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import MultiFileUpload from "@/components/upload/MultiFileUpload.vue";
import { flashNotification } from "@/composables/useNotification"

//get dynamic url name
const currentRouteName = computed(() => {
  const route = useRoute();
  const file = route.path.split("/").slice(-1)[0];
  const name = file.split("-");
  const fulllRouteName = name[0].charAt(0).toUpperCase() + name[0].slice(1)
  return fulllRouteName;
});

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
      if (true) {
        flashNotification('success', 'Add Successfully')
        const router = useRouter();
        router.push("/product")
      } else {
        flashNotification('error', 'Something went wrong')
      }
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
