<template>
    <el-card class="rounded-3 mx-4">
        <div class="bg-light text-center" style="height:70px;border-radius:0px 0px 7px 7px;">
            <h3 style="position:relative;top:15px">Phase 4 form</h3>
        </div>
        <div class="container mt-3">
            <div class="text-lg text-bold text-dark">Please upload images or pdf's of distributor outlet</div>
            <el-form>
                <div style="display:flex;flex-wrap: wrap;gap:25px;justify-content: space-around;" class="mt-4">
                    <!-- file upload loop -->
                    <div v-for="file in filesList" :key="file">
                        <div class="p-2">Image {{ file.p_no + 1 }}</div>
                        <div class="file-upload">
                            <el-upload class="upload-demo bg-light rounded-3" style="height:200px;text-align: center;" :show-file-list="false" :on-success="handleUploadSuccess"
                                :before-upload="handleBeforeUpload" 
                                :multiple="false"
                                accept="image/*"
                                :on-error="handleOnError"
                                @click="getId = file.p_no"
                                >
                                <img v-if="file.file" :src="file.file" class="avatar" />
                                <el-icon v-else class="el-icon--upload" style="min-width:70px" @click="getId = file.p_no">
                                    <UploadFilled style="font-size: 70px;margin-top:180px;"/>
                                </el-icon>
    
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
            </el-form>
        </div>
    </el-card>
</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue';
import { flashNotification } from "@/composables/useNotification.js";
// import { Plus } from '@element-plus/icons-vue'
const dcUploadForm = reactive({
    noOfFiles: 6,
    checkDescription: "Please confirm that you have verified the distributor's outlet",
    checkedStatus: false,
});
const filesList = ref([]);
const getId = ref(0);
// on each file upload it will form an array of files
function handleUploadSuccess(res, uploadFile) {
    try{
        const id = uploadFile.raw.uid;
        const reader = new FileReader();
        console.log(getId.value)
        reader.onload = (event) => {
            const base64Image = event.target.result;
            filesList.value[getId.value] = {
                id: id,
                file: base64Image,
                name: uploadFile.raw.name,
                p_no: getId.value
            };
            console.log(filesList.value)
        };
        reader.readAsDataURL(uploadFile.raw);
    }catch(err){
       console.log("error")
    }
};
// removing the selected or uploaded file
// function handleOnRemove(file) {
//     filesList.value = filesList.value.filter((e) => {
//         if (e.id != file.raw.uid) {
//             return e
//         }
//         return
//     });
// };
function handleApprove() {
  const result = filesList.value.filter(e => {
  if ( Object.keys(e).length != 1) {
    return e
  }
});
    console.log("result : ",JSON.stringify(result) + "\n" + "checked : " + dcUploadForm.checkedStatus)
}
function handleCancel() {
    console.log("cancel")
}
function handleOnError(){
    flashNotification("warning","File size is too large and select only image formats.")
}
onMounted(()=>{
    for(let i=0;i<dcUploadForm.noOfFiles;i++){
        filesList.value.push({
            p_no:i
        })
    }
})
definePageMeta({
    layout: "default",
});
</script>

<style scoped>
.file-upload {
    min-width: 350px;
    height: 247px;
    box-shadow: 0px 0px 8px 0px #00000017;
    padding: 25px;
}
.avatar{
    height:200px;
    width:300px;
}
</style>
