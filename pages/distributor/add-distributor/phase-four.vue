<template>
        <div class="bg-light text-center" style="height:70px;border-radius:0px 0px 7px 7px;">
            <h3 style="position:relative;top:15px">Phase 4 form</h3>
        </div>
        <div class="container mt-3">
            <div class="text-lg text-bold text-dark">Please upload images or pdf's of distributor outlet</div>
            <div style="display:flex;flex-wrap: wrap;gap:25px;justify-content: space-around;" class="mt-4">
                <!-- file upload loop -->
                <div v-for="file in dcUploadForm.noOfFiles" :key="file">
                    <div class="p-2">Image {{ file }}</div>
                    <div class="file-upload">
                        <el-upload class="upload-demo bg-light" drag
                            :on-success="handleUploadSuccess"
                            :on-remove="handleOnRemove"
                            >
                                <el-icon class="el-icon--upload"><upload-filled />
                                </el-icon>
                                <div class="el-upload__text">
                                    Drop or <em>click to upload a file</em>
                                </div>
                        </el-upload>
                    </div>
                </div>
            </div>
            <div class="mt-4 mx-2">
                <el-checkbox v-model="dcUploadForm.checkedStatus" :label="dcUploadForm.checkDescription" size="large" />
            </div>
            <div class="px-5" style="text-align: right;">
                <el-button class="btn btn-default" @click="handleCancel">Decline</el-button>
                <el-button class="btn btn-primary" type="primary" @click="handleApprove">Approve</el-button>
            </div>
        </div>
</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue';
const dcUploadForm = reactive({
    noOfFiles: 6,
    checkDescription: "Please confirm that you have verified the distributor's outlet",
    checkedStatus: false,
});
const filesList = ref([]);
// on each file upload it will form an array of files
function handleUploadSuccess(res,uploadFile){
   const id = uploadFile.raw.uid;
  
    const reader = new FileReader();
    reader.onload = (event) => {
    const base64Image = event.target.result;
    let obj = {
        id: id ,
        file : base64Image,
        name:uploadFile.raw.name
    }
    filesList.value.push(JSON.stringify(obj))
   
  };
  reader.readAsDataURL(uploadFile.raw);
};
// removing the selected or uploaded file
function handleOnRemove(file){
    filesList.value = filesList.value.filter((e)=>{
        if(e.id != file.raw.uid){
            return e
        } 
        return 
    });
};
function handleApprove(){

    console.log("All files : ",filesList.value+ "\n" + "check box status : ", dcUploadForm.checkedStatus)
}
function handleCancel(){
    console.log("cancel")
}
definePageMeta({
    layout: "",
});
</script>

<style scoped>
.file-upload {
    min-width: 350px;
    height: 247;
    box-shadow: 0px 0px 8px 0px #00000017;
    padding: 25px;
}
</style>
