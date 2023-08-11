<template>
  <section class="edit_mang_wrap">
    <div class="mang_inner comp_inner">
      <div>
        <h4>Phase 3 details</h4>
      </div>
      <el-form label-position="top" label-width="100px" :model="formData" :rules="formValidationRules" ref="formRef">
        <div class="">
          <h6>Insurance & banking details</h6>
          <el-row>
            <el-col :xs="15" :sm="10" :md="10" :lg="10" :xl="10">
              <span>Insurance details</span>
              <div class="me-md-4">
                <div class="fieldrow mt-4">
                  <el-form-item label="Name of Insurance Company" prop="insurence_detail.name_of_insurence_company">
                    <el-input v-model="formData.insurence_detail.name_of_insurence_company
                      " placeholder="Name of insurance company" />
                  </el-form-item>
                </div>
                <div class="fieldrow mt-4">
                  <el-form-item label="Policy Number" prop="insurence_detail.policy_number">
                    <el-input v-model="formData.insurence_detail.policy_number" placeholder="Policy number" />
                  </el-form-item>
                </div>
                <div class="fieldrow mt-4">
                  <el-form-item label="Expiry of Insurance" prop="insurence_detail.expiry_of_insurence">
                    <el-input v-model="formData.insurence_detail.expiry_of_insurence" placeholder="Expiry of insurance" />
                  </el-form-item>
                </div>
                <div class="comp_form_box w355 mt-5">
                  <div class="fieldrow">
                    <p>Insurance Card</p>
                    <SingleFileUpload iconClass="iconClass" @getImage="getInsurenceCard" />
                  </div>
                  <p v-if="isUploaded" class="text-danger">
                    Please upload insurance card
                  </p>
                </div>
              </div>
            </el-col>

            <el-col :xs="15" :sm="10" :md="10" :lg="10" :xl="10">
              <div class="ms-md-5">
                <span>Banking details</span>
                <div class="fieldrow mt-4">
                  <el-form-item label="Name of Bank" prop="bank_details.name_of_bank">
                    <el-input v-model="formData.bank_details.name_of_bank" placeholder="Name of bank" />
                  </el-form-item>
                </div>
                <div class="fieldrow mt-4">
                  <el-form-item label="Branch Name" prop="bank_details.branch_name">
                    <el-input v-model="formData.bank_details.branch_name" placeholder="Branch name" />
                  </el-form-item>
                </div>
                <div class="fieldrow mt-4">
                  <el-form-item label="Branch Code" prop="bank_details.branch_code">
                    <el-input v-model="formData.bank_details.branch_code" placeholder="Branch code" />
                  </el-form-item>
                </div>
                <div class="fieldrow mt-4">
                  <el-form-item label="Account Name" prop="bank_details.account_name">
                    <el-input v-model="formData.bank_details.account_name" placeholder="Account name" />
                  </el-form-item>
                </div>
                <div class="fieldrow mt-4">
                  <el-form-item label="Account Number" prop="bank_details.account_number">
                    <el-input v-model="formData.bank_details.account_number" placeholder="Account number" />
                  </el-form-item>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-form>
      <div class="comp_footer">
        <nuxt-link class="btn btn-default" to="/distributor">Cancel</nuxt-link>
        <el-button class="btn btn-primary" @click="handleContinue">Save</el-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import SingleFileUpload from "~/components/upload/SingleFileUpload.vue";
import { flashNotification } from "@/composables/useNotification.js";
const router = useRouter();
const formRef = ref(null);
const isUploaded = ref(false);
const formData = reactive({
  insurence_detail: {
    name_of_insurence_company: "",
    policy_number: "",
    expiry_of_insurence: "",
    insurence_card: "",
  },
  bank_details: {
    name_of_bank: "",
    branch_name: "",
    branch_code: "",
    account_name: "",
    account_number: "",
  },
});

const formValidationRules = reactive({
  insurence_detail: {
    name_of_insurence_company: [
      {
        required: true,
        message: "Please enter the name of insurance company",
        trigger: "blur",
      },
    ],
    policy_number: [
      {
        required: true,
        message: "Please enter the policy number",
        trigger: "blur",
      },
    ],
    expiry_of_insurence: [
      {
        required: true,
        message: "Please enter the expiry of insurance",
        trigger: "blur",
      },
    ],
    insurence_card: [
      {
        required: true,
        message: "Please upload the insurance card",
        trigger: "change",
      },
    ],
  },
  bank_details: {
    name_of_bank: [
      {
        required: true,
        message: "Please enter the name of bank",
        trigger: "blur",
      },
    ],
    branch_name: [
      {
        required: true,
        message: "Please enter the branch name",
        trigger: "blur",
      },
    ],
    branch_code: [
      {
        required: true,
        message: "Please enter the branch code",
        trigger: "blur",
      },
    ],
    account_name: [
      {
        required: true,
        message: "Please enter the account name",
        trigger: "blur",
      },
    ],
    account_number: [
      {
        required: true,
        message: "Please enter the account number",
        trigger: "blur",
      },
    ],
  },
});

//getInsurenceCard
const getInsurenceCard = (image) => {
  formData.insurence_detail.insurence_card = image;
};

const handleContinue = () => {
  let r = "phase-three";
  router.push(`${r}`);
  formRef.value.validate(async (valid) => {
    if (valid && !isUploaded.value) {
      try {
        console.log(JSON.stringify(formData));
        flashNotification("success", "Phase three successfully");
      } catch (error) {
        flashNotification("error", "An error occurred. Please try again.");
      }
    } else {
      flashNotification("warning", "Please fill required fields");
    }
  });
};
watch(formData, () => {
  if (formData.insurence_detail.insurence_card === "") {
    isUploaded.value = true;
  } else {
    isUploaded.value = false;
  }
});
definePageMeta({
  layout: "default",
});

// Your methods or other logic...
</script>
