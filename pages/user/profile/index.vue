<template>
    <div class="profile_det">
        <el-form :model="form" ref="formRef">
            <el-row>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="fieldrow">
                        <p class="form_label">Admin name</p>
                        <el-form-item prop="text">
                            <el-input v-model="form.adminName" placeholder="Admin Name" />
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="fieldrow">
                        <p class="form_label">Email</p>
                        <el-input v-model="form.email" type="email" placeholder="Email ..." />
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="fieldrow">
                        <p class="form_label">Phone number</p>
                        <el-input v-model="form.phoneNumber" type="number" placeholder="Phone number ..." />
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="fieldrow">
                        <p class="form_label">Date of birth</p>
                        <el-date-picker v-model="form.dateOfBirth" type="date" placeholder="Date of birth ..."
                            :size="size" />
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="fieldrow">
                        <p class="form_label">Gender</p>
                        <el-radio-group v-model="form.gender">
                            <el-radio :label="3">Male</el-radio>
                            <el-radio :label="6">Female</el-radio>
                        </el-radio-group>
                    </div>
                </el-col>
            </el-row>
        </el-form>
        <div class="prof_det_footer">
            <el-button-group>
                <el-button :class="userStatus ? 'btn btn-primary' : 'btn btn-default'"
                    :type="userStatus ? 'primary' : 'default'">Active</el-button>
                <el-button :class="!userStatus ? 'btn btn-primary' : 'btn btn-default'"
                    :type="userStatus ? 'default' : 'primary'" @click="handleDeactivate">
                    Deactivate
                </el-button>
            </el-button-group>
        </div>
    </div>
    <!-- Deactivate dialog box -->
    <DialogStatus :dialogVisible="centerDialogVisible" :leftButtonName="dialog.leftButton"
        :rightButtonName="dialog.rightButton" :dialogTitle="dialog.title" :dialogImage="dialog.image"
        :dialogText="dialog.text" @handleLeftButton="handleCancel" @handleRightButton="handleSubmit" width="md"
        @dialogVisible="dialogVisible" />
</template>

<script setup>
import delete_vector from "@/assets/svg/delete-vector.svg";
// dialog show active & deactive
const centerDialogVisible = ref(false);
// Dailog passing props
const dialog = reactive({
    title: null,
    image: delete_vector,
    text: null,
    leftButton: "No",
    rightButton: "Yes",
    deactivateStatus: false
})
const formRef = ref();
const form = reactive({
    adminName: null,
    email: null,
    phoneNumber: null,
    dateOfBirth: null,
    gender: null
})
const userStatus = ref(true);
//  this function opens dialog popup
function handleDeactivate() {
    dialog.title = 'Deactivate account'
    dialog.text = 'Are you sure you want to deactivate this admin account ?'
    centerDialogVisible.value = true;
    dialog.deactivateStatus = true;
}
// this function reads dialog popup
function handleSubmit() {
    if (dialog.deactivateStatus) {
        console.log("deactivated");
        dialog.deactivateStatus = false;
        centerDialogVisible.value = false;
    } else {
        centerDialogVisible.value = false;
    }
}
function dialogVisible() {
    centerDialogVisible.value = false;
}

function submitForm(formEl) {
    console.log("deactivated")
}
function handleCancel() {
    centerDialogVisible.value = false;
    dialog.deactivateStatus = false;
}
</script>