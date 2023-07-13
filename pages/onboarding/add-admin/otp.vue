<template>
    <div>
       <h1>OTP</h1>


        <button @click="centerDialogVisible = true" class="btn btn-primary">Next</button>


        <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
            <span>
            It should be noted that the content will not be aligned in center by
            default
            </span>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleWithEmail">send email</el-button>

                <el-button type="primary" @click="handleWithOnboarding">
                    Continue with onboarding
                </el-button>
            </span>
            </template>
        </el-dialog>

    </div>
</template>

<script  setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();

const centerDialogVisible = ref(false)

function handleWithEmail() {
    centerDialogVisible.value = false
    router.push("/onboarding")
}

function handleWithOnboarding() {
    centerDialogVisible.value = false
    router.push("/onboarding/complete-onboarding")
}

</script>


<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>