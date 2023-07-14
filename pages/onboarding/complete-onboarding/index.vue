<template>
  <div class="container-area">
    <el-row class="table-top">
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        <h4 class="heading">
          <span> {{ currentRouteName }} onboarding </span>
        </h4>
        <!-- <span class="ms-3">Adding details of product </span> -->
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="search-wrapper">&nbsp;</div>
      </el-col>

      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6"> &nbsp; </el-col>
    </el-row>

    <div class="container-fluid mt-md-1 px-2">
      <div class="row bg-white mx-1 pb-5 rounded-3">
        <div class="row">
          <div class="col-12 col-md-6">
            <el-form
              label-position="top"
              label-width="100px"
              :model="formData"
              :rules="formValidationRules"
              style="max-width: 100%; border-radius: 15px; height: auto"
              class="bg-white px-4 py-4 rounded-5"
              ref="formRef"
            >
              <el-col :span="24">
                <h6 class="pb-2 fw-bold">
                  Please fill the following details to complete onboarding
                  process
                </h6>
              </el-col>
              <p>Enter personal details</p>
              <el-col :span="24">
                <el-form-item label="Name" prop="name">
                  <el-input placeholder="Name" v-model="formData.name" />
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item label="Phone number" prop="phone">
                  <el-input
                    placeholder="Phone number"
                    v-model="formData.phone"
                  />
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item
                  class=""
                  label="Date of Birth"
                  prop="date_of_birth"
                >
                  <el-date-picker
                    v-model="formData.date_of_birth"
                    type="date"
                    placeholder="Pick a day"
                    size="default"
                    class="w-100"
                  />
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item label="Enter email" prop="email">
                  <el-input placeholder="Email" v-model="formData.email" />
                </el-form-item>
              </el-col>

              <div class="mt-4">
                <p class="text-dark fw-bold">Address</p>
              </div>

              <el-col :span="24">
                <el-form-item
                  label="House no/ street"
                  prop="address.house_number"
                >
                  <el-input
                    class=""
                    v-model="formData.address.house_number"
                    placeholder="House no.,Street"
                  />
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item label="Area" prop="address.area">
                  <el-input
                    class=""
                    v-model="formData.address.area"
                    placeholder="Area"
                  />
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item label="Region" prop="address.region">
                  <el-input
                    class=""
                    v-model="formData.address.region"
                    placeholder="Region"
                  />
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item label="Post code" prop="address.post_code">
                  <el-input
                    class=""
                    v-model="formData.address.post_code"
                    placeholder="Post code"
                  />
                </el-form-item>
              </el-col>

              <div class="mt-4">
                <p class="text-dark fw-bold">
                  Enter your location’s GPS address
                </p>
              </div>

              <el-col :span="24">
                <el-form-item label="GPS address" prop="gps_address">
                  <el-input
                    class=""
                    v-model="formData.gps_address"
                    placeholder="GPS address"
                  />
                </el-form-item>
              </el-col>
              <div>
                <img src="../../../assets/svg/ghanapost.svg" alt="" />
              </div>
            </el-form>
          </div>

          <div class="col-12 col-md-6 p-0">
            <div
              class="product-image p-4"
              style="background-color: #ffff; border-radius: 15px; height: auto"
            >
              <div class="row">
                <div class="col">
                  <p class="mt-md-4 pt-2">Details of national ID</p>
                  <p class="mt-3">Select ID type</p>
                  <el-radio-group v-model="radio">
                    <el-radio :label="3">Ghana card</el-radio>
                    <el-radio :label="6">Voter's ID</el-radio>
                  </el-radio-group>

                  <div class=" ">
                    <SingleFileUpload
                      iconClass="iconClass"
                      class="avatar-uploader"
                      @getImage="getId"
                      :reactivePropertyName="formData.id.voterId"
                      :value="formData.id.ghanaCard"
                    />
                    <p class="mt-5 mb-5">Face recognization</p>
                    <SingleFileUpload
                      iconClass="iconClass"
                      class="avatar-uploader"
                      @getImage="getFace"
                      :reactivePropertyName="formData.id.face_recognition"
                      :value="formData.id.face_recognition"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mt-5 d-flex gap-2 flex-row-reverse d-sm-block">
            <el-button
              class="float-end me-sm-3 px-5 shadow"
              color="#626aef"
              @click="handleContinue"
              >Continue</el-button
            >
            <RouterLink to="/onboarding">
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
    <div class="row">
      <!-- Dialog box code -->
      <el-dialog
        v-model="centerDialogVisible"
        title="Send login credentials"
        center
        class="rounded-3 shadow fw-bold w-75 w-md-25"
      >
        <div class="d-flex justify-content-center">
          <img src="../../../assets/svg/admin_mail.svg" alt="Mail" />
        </div>
        <span class="d-flex justify-content-center mt-4">
          Send temporary logic credentials to admin
        </span>

        <template #footer>
          <span class="dialog-footer d-flex">
            <div class="col-6">
              <button
                class="btn border border-primary w-75"
                @click="handleCancel"
              >
                Cancel
              </button>
            </div>
            <div class="col-6">
              <button class="btn btn-primary w-75" @click="handleWithEmail">
                Send email
              </button>
            </div>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useRouter } from "vue-router";
import SingleFileUpload from "~/components/upload/SingleFileUpload.vue";
const router = useRouter();
const centerDialogVisible = ref(false);
//radio button
const radio = ref(3);

//get dynamic url name
const currentRouteName = computed(() => {
  const route = useRoute();
  const file = route.path.split("/").slice(-1)[0];
  const name = file.split("-");
  const fulllRouteName = name[0].charAt(0).toUpperCase() + name[0].slice(1);
  return fulllRouteName;
});

const formData = reactive({
  name: "",
  phone: "",
  date_of_birth: "",
  email: "",
  address: {
    house_number: "",
    area: "",
    region: "",
    district: "",
    post_code: "",
  },
  gps_address: "",
  id:{
    ghanaCard:"",
    voterId:"",
    face_recognition: "",
  }
});
const formRef = ref(null);
//get id and face
const getId = (image) => {
  formData.id.voterId=image
};
const getFace = (image) => {
  formData.id.face_recognition=image
};

// validation
const formValidationRules = reactive({
  name: [
    {
      required: true,
      message: "Please enter name",
      trigger: "blur",
    },
  ],
  phone: [
    {
      required: true,
      message: "Please enter phone",
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
  date_of_birth: [
    {
      required: true,
      message: "Please enter date of birth",
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
    } else {
      ElMessage.error("Please fill in all the required fields");
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
<style>
.error-message {
  color: red;
  position: absolute;
  right: 15px;
}
.avatar-uploader {
  width: 321px;
  border: 1px solid rgb(247, 246, 246);
  border-radius: 15px;
  box-shadow: 0px 0px 4px 1px rgb(233, 228, 228);
  padding: 20px;
  margin-top: 20px;
}
.iconClass {
  width: 280px;
  height: 225px;
}
</style>
