<template>
    <div style="width:80%">
        <el-form :model="form" ref="formRef">
            <div>
                <p>Admin name</p>
                <el-form-item prop="text">
                    <el-input v-model="form.adminName" placeholder="Admin Name" />
                </el-form-item>
            </div>
            <div>
                <p>Email</p>
                <el-input v-model="form.email" type="email" placeholder="Email ..." />
            </div>
            <div>
                <p>Phone number</p>
                <el-input v-model="form.phoneNumber" type="number" placeholder="Phone number ..." />
            </div>
            <div>
                <p>Date of birth</p>
                <el-date-picker v-model="form.dateOfBirth" type="date" placeholder="Date of birth ..." :size="size" />
            </div>
            <div>
                <p>Gender</p>
                <el-radio-group v-model="form.gender">
                    <el-radio :label="3">Male</el-radio>
                    <el-radio :label="6">Female</el-radio>
                </el-radio-group>
            </div>
        </el-form>
        <div class="perm_footer mt-3 my-4 mx-10" style="display: flex;flex-direction: row;text-align: left; ">
            <div class="mx-10" style="margin-right: 0px;">
                <el-button-group>
                    <el-button :class="userStatus ? 'btn btn-primary' : 'btn btn-default'"
                        :type="userStatus ? 'primary' : 'default'" >Active</el-button>
                    <el-button :class="!userStatus ? 'btn btn-primary' : 'btn btn-default'"
                        :type="userStatus ? 'default' : 'primary'" @click="handleDeactivate">
                        Deactivate
                    </el-button>
                </el-button-group>
            </div>
        </div>
        <!-- Deactivate dialog box -->
        <DialogStatus :dialogVisible="centerDialogVisible"
        :leftButtonName="dialog.leftButton"
        :rightButtonName="dialog.rightButton"
        :dialogTitle="dialog.title"
        :dialogImage="dialog.image"
        :dialogText="dialog.text"
        @handleLeftButton="handleCancel"
        @handleRightButton="handleSubmit"
        width="md"
        @dialogVisible="dialogVisible"
      />
    </div>
</template>

<script setup>
import delete_vector from "@/assets/svg/delete-vector.svg";
// dialog show active & deactive
const centerDialogVisible=ref(false);
// Dailog passing props
const dialog= reactive({
    title:null,
    image:delete_vector,
    text:null,
    leftButton:"No",
    rightButton:"Yes",
    deactivateStatus:false
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
function handleDeactivate(){
        dialog.title = 'Deactivate account'
        dialog.text = 'Are you sure you want to deactivate this admin account ?'
        centerDialogVisible.value = true;
        dialog.deactivateStatus= true;
}
// this function reads dialog popup
function handleSubmit(){
    if(dialog.deactivateStatus){
        console.log("deactivated");
        dialog.deactivateStatus = false;
        centerDialogVisible.value = false;
    }else{
        centerDialogVisible.value = false; 
    }
}
function dialogVisible(){
    centerDialogVisible.value = false;
}

function submitForm(formEl) {
    console.log("deactivated")
}
function handleCancel(){
    centerDialogVisible.value=false;
    dialog.deactivateStatus = false;
}
</script>

<style scoped>
p {
    font-weight: 600;
}

.el-form {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
}

.el-form>div {
    min-width: 420px;
}

.el-input {
    height: 50px;
}

.el-button {
    min-width: 120px;
}</style>