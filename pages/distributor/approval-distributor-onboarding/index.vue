<template>
    <section class="onboarding_wrap">
        <h3 class="ob_title">Approval distributor onboarding</h3>
        <div class="ob_box w768">
         
            <div class="prof_info">
              <p>Please go through the following link where you find all onboarding details of distributor</p>

              <p>Phase 2 detais</p>
              <p>Phase 3 detais</p>
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