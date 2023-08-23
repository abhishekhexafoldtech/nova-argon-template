<template>
    <section class="onboarding_wrap ver_outlet">
        <div class="ob_box approval_distributor">
            <h3>Verify the distributor outlet</h3>
            <div class="prof_info">
                <span>Verify Yaw graham outlet</span>
                <p>
                    You have to go for physical verification of distributor’s outlet and capture some images of it as a
                    proof.
                </p>
                <p>
                    After finishing the physical verification of distributor’s outlet then click on below link to attach
                    clicked images or pdfs of it.
                </p>
                <div class="phase_det" @click="handlePhaseFourForm">
                    <div class="phase_det_item">
                        <figure>
                            <i class="ri-file-list-3-line"></i>
                        </figure>
                        Phase 4 Form
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from "vue-router";
var router = useRouter();

function handlePhaseFourForm() {
    router.push("/distributor/add-distributor/phase-four")
}

</script>

<style scoped>
.onboarding_wrap .ob_box.approval_distributor .prof_info {
    padding-bottom: 45px;
}

@media (max-width: 992px) {
    .onboarding_wrap .ob_box.approval_distributor .prof_info {
        padding-bottom: 30px;
    }
}
</style>