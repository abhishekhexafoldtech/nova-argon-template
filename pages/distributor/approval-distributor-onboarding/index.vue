<template>
    <section class="onboarding_wrap">
        <h3 class="ob_title">Approval distributor onboarding</h3>
        <div class="ob_box w1377 approval_distributor">
            <div class="prof_info">
                <p>Please go through the following link where you find all onboarding details of distributor</p>
                <div class="phase_det">
                    <div class="phase_det_item">
                        <div class="ph_status active">
                            <i class="ri-check-line"></i>
                        </div>
                        <figure>
                            <i class="ri-file-list-3-line"></i>
                        </figure>
                        Phase 2 details
                    </div>
                    <div class="phase_det_item">
                        <div class="ph_status">
                            <i class="ri-check-line"></i>
                        </div>
                        <figure>
                            <i class="ri-file-list-3-line"></i>
                        </figure>
                        Phase 3 details
                    </div>
                </div>
            </div>
            <div class="prof_footer">
                <button class="btn btn-default" @click="handleDeclineDialog">Decline</button>
                <button class="btn btn-primary" @click="handleApprove">Approve</button>
            </div>
        </div>

        <DeclineDialog :dialogVisible="dialogVisible" :form-data="formData" @getChildFormData="handleChildFormData($event)"
            @childClose="handleChildClose()" />
    </section>
</template>

<script setup>
import DeclineDialog from "@/pages/onboarding/dialog-box/DeclineDialgo"
let dialogVisible = ref(false)
var formData = reactive({
    name: ''
})

// open dialog 
function handleDeclineDialog() {
    dialogVisible.value = true
}

// close dialog 
function handleChildClose() {
    dialogVisible.value = false
}

// submit decline form data 
function handleChildFormData(data) {
    console.log(data)
    dialogVisible.value = false
    const router = useRouter();
    router.push("/notification")
}

// submit approv form data 
function handleApprove() {
    const router = useRouter();
    router.push("/notification")
}

</script>

<style scoped>
.prof_info p {}
</style>