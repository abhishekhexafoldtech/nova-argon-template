<template>
  <section class="container-area">
    <h4 class="page_heading mb-3 pb-2">Phase 3 details</h4>
    <div class="comp_inner">
      <el-form label-position="top" label-width="100px" :model="formData" :rules="formValidationRules" ref="formRef">
        <el-row :gutter="30">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="form_inner_half mb-4">
              <h5 class="half_subtitle">Insurance details</h5>
              <div class="fieldrow">
                <el-form-item label="Name of Insurance Company" prop="insurence_detail.name_of_insurence_company">
                  <el-input v-model="formData.insurence_detail.name_of_insurence_company
                    " placeholder="Name of insurance company" />
                </el-form-item>
              </div>
              <div class="fieldrow">
                <el-form-item label="Policy Number" prop="insurence_detail.policy_number">
                  <el-input v-model="formData.insurence_detail.policy_number" placeholder="Policy number" />
                </el-form-item>
              </div>
              <div class="fieldrow">
                <el-form-item label="Expiry of Insurance" prop="insurence_detail.expiry_of_insurence">
                  <el-input v-model="formData.insurence_detail.expiry_of_insurence" placeholder="Expiry of insurance" />
                </el-form-item>
              </div>
              <div class="comp_form_box w355 m-0">
                <div class="fieldrow m-0">
                  <p class="frm_label">Insurance Card</p>
                  <SingleFileUpload iconClass="iconClass" @getImage="getInsurenceCard" />
                </div>
                <p v-if="isUploaded" class="text-danger">
                  Please upload insurance card
                </p>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="form_inner_half">
              <h5 class="half_subtitle">Banking details</h5>
              <div class="fieldrow">
                <el-form-item label="Name of Bank" prop="bank_details.name_of_bank">
                  <el-input v-model="formData.bank_details.name_of_bank" placeholder="Name of bank" />
                </el-form-item>
              </div>
              <div class="fieldrow">
                <el-form-item label="Branch Name" prop="bank_details.branch_name">
                  <el-input v-model="formData.bank_details.branch_name" placeholder="Branch name" />
                </el-form-item>
              </div>
              <div class="fieldrow">
                <el-form-item label="Branch Code" prop="bank_details.branch_code">
                  <el-input v-model="formData.bank_details.branch_code" placeholder="Branch code" />
                </el-form-item>
              </div>
              <div class="fieldrow">
                <el-form-item label="Account Name" prop="bank_details.account_name">
                  <el-input v-model="formData.bank_details.account_name" placeholder="Account name" />
                </el-form-item>
              </div>
              <div class="fieldrow">
                <el-form-item label="Account Number" prop="bank_details.account_number">
                  <el-input v-model="formData.bank_details.account_number" placeholder="Account number" />
                </el-form-item>
              </div>
            </div>
          </el-col>
        </el-row>
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
  formRef.value.validate(async (valid) => {
    if (valid && !isUploaded.value) {
      try {
        console.log(JSON.stringify(formData));
        flashNotification("success", "Phase three successfully");
        router.push('/distributor/approval-distributor-onboarding');
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
