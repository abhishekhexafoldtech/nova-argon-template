<template>
  <div>
    <section class="edit_mang_wrap">
      <div class="mang_inner comp_inner">
        <div class="mang_title mb-3">
          <h3>Please fill the following details to complete onboarding process</h3>
        </div>
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form label-position="top" label-width="100px" :model="formData" :rules="formValidationRules" ref="formRef">
              <div class="comp_form_box">
                <h5 class="cf_title">Enter Personal Details</h5>
                <div class="fieldrow">
                  <el-form-item label="First Name" prop="firstName">
                    <el-input placeholder="First Name" v-model="formData.firstName" />
                  </el-form-item>
                </div>
                <div class="fieldrow">
                  <el-form-item label="Last Name" prop="lastName">
                    <el-input placeholder="Last Name" v-model="formData.lastName" />
                  </el-form-item>
                </div>
                <div class="fieldrow">
                  <el-form-item label="Phone Number" prop="phoneNumber">
                    <el-input placeholder="Phone Number number" v-model="formData.phoneNumber" />
                  </el-form-item>
                </div>
                <div class="fieldrow">
                  <el-form-item label="Date of Birth" prop="dateOfBirth">
                    <el-date-picker v-model="formData.dateOfBirth" type="date" placeholder="Pick a day" size="default" />
                  </el-form-item>
                </div>
                <div class="fieldrow">
                  <el-form-item label="Email" prop="email">
                    <el-input placeholder="Email" v-model="formData.email" />
                  </el-form-item>
                </div>
              </div>
              <div class="comp_form_box">
                <h5 class="cf_title">Address</h5>
                <div class="fieldrow">
                  <el-form-item label="House no/ street" prop="address.house_number">
                    <el-input class="" v-model="formData.address.house_number" placeholder="House no.,Street" />
                  </el-form-item>
                </div>
                <div class="fieldrow">
                  <el-form-item label="Area" prop="address.area">
                    <el-input class="" v-model="formData.address.area" placeholder="Area" />
                  </el-form-item>
                </div>
                <div class="fieldrow">
                  <el-form-item label="Region" prop="address.region">
                    <el-input class="" v-model="formData.address.region" placeholder="Region" />
                  </el-form-item>
                </div>
                <div class="fieldrow">
                  <el-form-item label="Post code" prop="address.post_code">
                    <el-input class="" v-model="formData.address.post_code" placeholder="Post code" />
                  </el-form-item>
                </div>
              </div>
              <div class="comp_form_box">
                <h5 class="cf_title">Enter your location’s GPS address</h5>
                <div class="fieldrow">
                  <el-form-item label="GPS address" prop="gps_address">
                    <el-input class="" v-model="formData.gps_address" placeholder="GPS address" />
                  </el-form-item>
                </div>
                <img class="gh_post" :src="ghanapost" alt="ghanapost" />
              </div>
            </el-form>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="comp_form_box w355">
              <h5 class="cf_title">Details of national ID</h5>
              <div class="fieldrow">
                <p>Select ID type</p>
                <el-radio-group v-model="radio">
                  <el-radio :label="3">Ghana card</el-radio>
                  <el-radio :label="6">Voter's ID</el-radio>
                </el-radio-group>
                <SingleFileUpload iconClass="iconClass" @getImage="getId" :reactivePropertyfirstName="formData.id.voterId"
                  :value="formData.id.ghanaCard" />
              </div>
            </div>
            <div class="comp_form_box w355">
              <div class="fieldrow">
                <p>Face recognization</p>
                <SingleFileUpload iconClass="iconClass" @getImage="getFace"
                  :reactivePropertyfirstName="formData.id.face_recognition" :value="formData.id.face_recognition" />
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="comp_footer">
          <nuxt-link class="btn btn-default" to="/onboarding">Cancel</nuxt-link>
          <el-button class="btn btn-primary" @click="handleContinue">Continue</el-button>
        </div>
      </div>
    </section>

    <div class="row">
      <!-- Dialog box code -->
      <SuccessDialog leftButtonName="Cancel" rightButtonName="Send email" dialogTitle="Admin added successfully"
        :dialogImage="admin_mail" dialogText="Send temporary logic credentials to admin" @handleLeftButton="handleCancel"
        @handleRightButton="handleWithEmail" @dialogVisible="dialogVisible" :dialogVisible="centerDialogVisible" />
    </div>
  </div>

</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { flashNotification } from "@/composables/useNotification.js"
import SingleFileUpload from "~/components/upload/SingleFileUpload.vue";
import admin_mail from "@/assets/svg/admin_mail.svg";
import SuccessDialog from "@/pages/onboarding/dialog-box/SuccessDialog.vue";
import ghanapost from "@/assets/svg/ghanapost.svg"
const router = useRouter();
const centerDialogVisible = ref(false);
//radio button
const radio = ref(3);


const formData = reactive({
  firstName: "",
  lastName:"",
  phoneNumber: "",
  dateOfBirth: "",
  email: "",
  address: {
    house_number: "",
    area: "",
    region: "",
    district: "",
    post_code: "",
  },
  gps_address: "",
  id: {
    ghanaCard: "",
    voterId: "",
    face_recognition: "",
  },
});

const formRef = ref(null);

//get id and face
const getId = (image) => {
  formData.id.voterId = image;
};

const getFace = (image) => {
  formData.id.face_recognition = image;
};

//dialogVisible called
const dialogVisible = () => {
  centerDialogVisible.value = false;
};

// validation
const formValidationRules = reactive({
  firstName: [
    {
      required: true,
      message: "Please enter firstName",
      trigger: "blur",
    },
  ],
  lastName:[
    {
      required:true,
      message:"Please enter lastName",
      trigger:"blur"
    }
  ],
  phoneNumber: [
    {
      required: true,
      message: "Please enter phoneNumber",
      trigger: "blur",
    },
  ],
  dateOfBirth: [
    {
      required: true,
      message: "Please enter date of birth",
      trigger: "blur",
    },
  ],
  email: [
    {
      required: true,
      type: "email",
      message: "Please enter email",
      trigger: "blur",
    },
  ],
  gps_address: [
    {
      required: true,
      message: "Please enter gps address",
      trigger: "blur",
    },
  ],
  address: {
    house_number: [
      {
        required: true,
        message: "Please enter house number",
        trigger: "blur",
      },
    ],
    area: [
      {
        required: true,
        message: "Please enter area",
        trigger: "blur",
      },
    ],
    region: [
      {
        required: true,
        message: "Please enter region",
        trigger: "blur",
      },
    ],
    district: [
      {
        required: true,
        message: "Please enter district",
        trigger: "blur",
      },
    ],
    post_code: [
      {
        required: true,
        message: "Please enter post code",
        trigger: "blur",
      },
    ],
  },
});

//handle save
const handleContinue = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      console.log(JSON.stringify(formData));
      centerDialogVisible.value = true;
      flashNotification('success', 'Admin Added successfully')
    } else {
      flashNotification('warning', 'Please fill required fields')

    }
  });
};

const handleWithEmail = () => {
  router.push("/onboarding");
};

const handleCancel = () => {
  router.push("/onboarding");
};
</script>
