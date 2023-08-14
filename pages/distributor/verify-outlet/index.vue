<template>
    <section class="onboarding_wrap">
        <h3 class="ob_title">Verify the distributor outlet</h3>
        <div class="ob_box w1377 approval_distributor">
            <div class="prof_info">
                <p>You have to go for physical verification of distributor’s outlet and capture some images of it as a proof.
                    <br>
                    After finishing the physical verification of distributor’s outlet then click on below link to attach clicked images or pdfs of it.
                </p>
                <div class="phase_det" @click="handlePhaseFourForm">
                    <div class="phase_det_item" >
                        <figure>
                            <i class="ri-file-list-3-line"></i>
                        </figure>
                        Phase 4 Form
                    </div>
                </div>
            </div>
            <div class="prof_footer">
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from "vue-router";
var router = useRouter();

function handlePhaseFourForm() {
    console.log('asdfasf')
    router.push("/distributor/verify-outlet")
}

</script>

<style scoped>

</style>