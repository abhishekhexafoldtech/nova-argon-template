<template>
  <div>
    <section class="edit_mang_wrap">
      <div class="mang_inner comp_inner">
        <div class="mang_title mb-3">
          <h3>Phase 2 details</h3>
        </div>
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="11" :xl="11">
            <el-form
              label-position="top"
              label-width="100px"
              :model="formData"
              :rules="formValidationRules"
              ref="formRef"
            >
              <div class="comp_form_box">
                <h5 class="cf_title">
                  Business details of distributor’s company
                </h5>
                <div class="fieldrow">
                  <el-form-item
                    label="Name of Business"
                    prop="name_of_bussiness"
                  >
                    <el-input
                      v-model="formData.name_of_bussiness"
                      placeholder="Name of business"
                    />
                  </el-form-item>
                </div>
                <div class="fieldrow">
                  <el-form-item
                    label="Company Registration Number"
                    prop="company_registration_number"
                  >
                    <el-input
                      v-model="formData.company_registration_number"
                      placeholder="Company registration number"
                    />
                  </el-form-item>
                </div>
                <div class="fieldrow">
                  <el-form-item label="House No. / Street" prop="house_number">
                    <el-input
                      v-model="formData.house_number"
                      placeholder="House no., Street"
                    />
                  </el-form-item>
                </div>
                <div class="fieldrow">
                  <el-form-item label="GPS Code" prop="gps_code">
                    <el-input
                      v-model="formData.gps_code"
                      placeholder="GPS code"
                    />
                  </el-form-item>
                </div>
                <div class="fieldrow">
                  <el-form-item label="Area" prop="area">
                    <el-input v-model="formData.area" placeholder="Area" />
                  </el-form-item>
                </div>
                <div class="fieldrow">
                  <el-form-item label="Region" prop="region">
                    <el-input v-model="formData.region" placeholder="Region" />
                  </el-form-item>
                </div>
                <div class="fieldrow">
                  <el-form-item label="District" prop="district">
                    <el-input
                      v-model="formData.district"
                      placeholder="District"
                    />
                  </el-form-item>
                </div>
                <div class="fieldrow">
                  <el-form-item label="Post Code" prop="post_code">
                    <el-input
                      v-model="formData.post_code"
                      placeholder="Post code"
                    />
                  </el-form-item>
                </div>
              </div>

              <div class="comp_form_box">
                <h5 class="cf_title">Enter your location’s GPS address</h5>
                <div class="fieldrow">
                  <el-form-item label="GPS Address" prop="gps_address">
                    <el-input
                      v-model="formData.gps_address"
                      placeholder="GPS address"
                    />
                  </el-form-item>
                </div>
                <img class="gh_post" :src="ghanaPost" alt="ghanaPost" />
              </div>
            </el-form>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
            <div class="comp_form_box add_dist_up w355">
              <p><b>Details of National ID</b></p>
              <div class="fieldrow">
                <p>Select ID type</p>
                <el-radio-group v-model="selectedIdType">
                  <el-radio :label="3">Ghana card</el-radio>
                  <el-radio :label="6">Voter's ID</el-radio>
                </el-radio-group>
                <SingleFileUpload
                  iconClass="iconClass"
                  @getImage="getId"
                  :propertyType="selectedPropertyType"
                />
              </div>
            </div>
            <div class="comp_form_box add_dist_up w355">
              <div class="fieldrow">
                <p><b>Certificate of Registration</b></p>
                <SingleFileUpload
                  iconClass="iconClass"
                  @getImage="getCertificateOfregistration"
                />
              </div>
            </div>
            <!-- 3rd col -->
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="7" :xl="7">
            <div class="comp_form_box add_dist_up w355">
               <p><b>Proof of Ownership of Property</b></p>
              <div class="fieldrow">
                <p>Upload certificates</p>
                <el-radio-group v-model="selectedPropertyType" :default="3" >
                  <el-radio :label="3" >Owned Property</el-radio>
                  <el-radio :label="6">Rented Property</el-radio>
                </el-radio-group>
                <SingleFileUpload
                  iconClass="iconClass"
                  @getImage="getOwnershipProof"
                  :propertyType="selectedPropertyType"
                />
              </div>
            </div>
            <div class="comp_form_box add_dist_up w355">
              <div class="fieldrow">
                <p><b>Certificate of Commencement</b></p>
                <SingleFileUpload
                  iconClass="iconClass"
                  @getImage="getCertificateOfCommencement"
                />
              </div>
            </div>
            <div class="comp_form_box add_dist_up w355">
              <div class="fieldrow">
                <p><b>Fire Proof/safety Protocol Certificate</b></p>
                <SingleFileUpload
                  iconClass="iconClass"
                  @getImage="getCertificateOfFiresafty"
                />
              </div>
            </div>
            <p v-if="isUploaded" class="text-danger">Please upload all files</p>
          </el-col>
        </el-row>
        <div class="comp_footer">
          <nuxt-link class="btn btn-default" to="/distributor">Cancel</nuxt-link>
          <button class="btn btn-primary" @click="handleSave"
            >Save</button
          >
        </div>
      </div>
    </section>

    <div class="row">
      <!-- Dialog box code -->
      <SuccessDialog
        leftButtonName="Cancel"
        rightButtonName="Send email"
        dialogTitle="Admin added successfully"
        :dialogImage="adminMail"
        dialogText="Send temporary logic credentials to admin"
        @handleLeftButton="handleCancel"
        @handleRightButton="handleWithEmail"
        @dialogVisible="dialogVisible"
        :dialogVisible="centerDialogVisible"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { flashNotification } from "@/composables/useNotification.js";
import SingleFileUpload from "~/components/upload/SingleFileUpload.vue";
import SuccessDialog from "@/pages/onboarding/dialog-box/SuccessDialog.vue";
import adminMail from "@/assets/svg/admin_mail.svg";
import ghanaPost from "@/assets/svg/ghanapost.svg";

const router = useRouter();
const formRef = ref(null);

const centerDialogVisible = ref(false);
const isUploaded = ref(false);
const selectedPropertyType = ref(3); // Holds the selected property type (3 for owned, 6 for rented)
const selectedIdType = ref(3);
const formData = reactive({
  name_of_bussiness: "",
  company_registration_number: "",
  house_number: "",
  gps_code: "",
  area: "",
  region: "",
  district: "",
  post_code: "",
  gps_address: "",
  certificate_of_registration: "",
  certificate_of_commencement: "",
  fire_proof_protocol_certificate: "",
  id_detail: {
    ghanaCard: "",
    voterId: "",
  },
  property_detail: {
    owned_property: "",
    rented_property: "",
  },
});

const formValidationRules = reactive({
  name_of_bussiness: [
    {
      required: true,
      message: "Please enter the business name",
      trigger: "blur",
    },
  ],
  company_registration_number: [
    {
      required: true,
      message: "Please enter the registration number",
      trigger: "blur",
    },
  ],
  house_number: [
    {
      required: true,
      message: "Please enter the house number",
      trigger: "blur",
    },
  ],
  gps_code: [
    { required: true, message: "Please enter the GPS code", trigger: "blur" },
  ],
  area: [{ required: true, message: "Please enter the area", trigger: "blur" }],
  region: [
    { required: true, message: "Please enter the region", trigger: "blur" },
  ],
  district: [
    { required: true, message: "Please enter the district", trigger: "blur" },
  ],
  post_code: [
    { required: true, message: "Please enter the post code", trigger: "blur" },
  ],
  gps_address: [
    {
      required: true,
      message: "Please enter the GPS address",
      trigger: "blur",
    },
  ],
  "id_detail.ghanaCard": [
    { required: true, message: "Please upload Ghana card", trigger: "change" },
  ],
  "id_detail.voterId": [
    { required: true, message: "Please upload Voter's ID", trigger: "change" },
  ],
  "property_detail.owned_property": [
    {
      required: true,
      message: "Please upload owned property document",
      trigger: "change",
    },
  ],
  "property_detail.rented property": [
    {
      required: true,
      message: "Please upload rented property document",
      trigger: "change",
    },
  ],
  // Add more validation rules as needed...
});

//getId
const getId = (image) => {
  if (selectedIdType.value === 3) {
    formData.id_detail.ghanaCard = image;
  } else if (selectedIdType.value === 6) {
    formData.id_detail.voterId = image;
  }
};

//getOwnershipProof
const getOwnershipProof = (image) => {
  if (selectedPropertyType.value === 3) {
    formData.property_detail.owned_property = image;
  } else if (selectedPropertyType.value === 6) {
    formData.property_detail.rented_property = image;
  }
};

//getCertificateOfregistration
const getCertificateOfregistration = (image) => {
  formData.certificate_of_registration = image;
};

//getCertificateOfCommencement
const getCertificateOfCommencement = (image) => {
  formData.certificate_of_commencement = image;
};
//getCertificateOfFiresafty
const getCertificateOfFiresafty = (image) => {
  formData.fire_proof_protocol_certificate = image;
};

const handleSave = () => {
  console.log(JSON.stringify(formData));
  formRef.value.validate(async (valid) => {
    if (isUploaded &&valid) {
      isUploaded.value = false;
    
      try {
        // Perform data submission logic here
        let r = "phase-three";
        router.push(`${r}`);
        flashNotification("success", "Phase two added successfully");
      } catch (error) {
        flashNotification("error", "An error occurred. Please try again.");
      }
    } else {
      flashNotification("warning", "Please fill required fields");
    }
  });
};

watch(formData, () => {
  if (
    formData.certificate_of_commencement !== "" &&
    formData.certificate_of_registration !== "" &&
    formData.fire_proof_protocol_certificate !== "" &&
    (formData.id_detail.ghanaCard !== "" ||
      formData.id_detail.voterId !== "") &&
    (formData.property_detail.owned_property !== "" ||
      formData.property_detail.rented_property !== "")
  ) {
    isUploaded.value = false;
  }
  else{
    isUploaded.value = true;
  }
});

const handleWithEmail = () => {
  router.push("/onboarding");
};

const handleCancel = () => {
  router.push("/onboarding");
};
definePageMeta({
  layout: "default",
});
</script>
