<template>
    <div class="form_inner">
        <div class="from_prof_header">
            <h3>Update KYC details</h3>
            <p>To update your KYC details, You can raise a request to your super admin</p>
        </div>
        <p class="subheader2">Please mention the details you want to update</p>
        <el-form :model="kycForm" ref="formRef" :rules="kycFormRules">
            <div class="fieldrow position-relative">
                <el-form-item prop='requestArea'>
                    <el-input :rows="6" v-model="kycForm.requestArea" type="textarea" placeholder="Mention details here .."
                        prop="text" />
                </el-form-item>
            </div>
            <div class="fieldrow two_button">
                <button class="btn w-100" @click="handleCancel">Cancel</button>
                <button class="btn w-100 btn-primary" @click="submitKycRequest(formRef)">Send Request</button>
            </div>
        </el-form>
    </div>
</template>

<script setup>
const emit = defineEmits();
import { flashNotification } from "@/composables/useNotification.js"
const kycForm = reactive({
    requestArea: ''
});
const formRef = ref();
const kycFormRules = reactive({
    requestArea: [{ required: true, message: 'Please provide the context to raise a request.', trigger: ['blur', 'change'] }],
});

function submitKycRequest(formEl) {
    if (!formEl) { return };
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!', kycForm);
            emit("handleKyc", "success")
            flashNotification('success', 'reuest created to super admin.')
        } else {
            flashNotification('warning', 'Please fill required fields.')
            return false
        }
    })
}
function handleCancel() {
    if (!kycForm.requestArea == "") {
        flashNotification('warning', 'Provided data will be lost.')
    }
    emit("handleKyc", "cancel")
}
</script>