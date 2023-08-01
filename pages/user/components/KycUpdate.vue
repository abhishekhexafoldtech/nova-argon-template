<template>
    <div>
        <p style="font-size:27px;color:black">Update KYC details</p>
        <p>To update your KYC details, You can raise a request to your super admin</p>
        <p>Please mention the details you want to update</p>
        <el-form style="max-width:455px;" :model="kycForm" ref="formRef" :rules="kycFormRules">
            <el-form-item prop = 'requestArea'>
                <el-input  :rows="6" v-model="kycForm.requestArea" type="textarea" placeholder="Mention details here .." prop="text"/>
            </el-form-item>
            <div class="buttons">
                <el-button plain @click="handleCancel">Cancel</el-button>
                <el-button type="primary" @click="submitKycRequest(formRef)">Send request</el-button>
            </div>
        </el-form>
    </div>
</template>

<script setup>
const emit = defineEmits();
import { flashNotification } from "@/composables/useNotification.js"
const kycForm = reactive({
    requestArea:''
});
const formRef = ref();
const kycFormRules = reactive({
    requestArea: [{ required: true, message:'Please provide the context to raise a request.', trigger: ['blur','change'] }],
  });

function submitKycRequest(formEl){
    if (!formEl) { return};
    formEl.validate((valid) => {
    if (valid) {
      console.log('submit!',kycForm);
      emit("handleKyc","success")
      flashNotification('success', 'reuest created to super admin.')
    } else {
      flashNotification('warning', 'Please fill required fields.')
      return false
    }
  })
}
function handleCancel(){
    if(!kycForm.requestArea == ""){
        flashNotification('warning', 'Provided data will be lost.')
    }
    emit("handleKyc","cancel")
}
</script>

<style scopped>
.el-button{
    width:211px;
    height:41px;
    font-weight:600;
}
.buttons {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:10px;
}
</style>