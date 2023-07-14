<template>
    <div>
        <section>
            <h3>Approval onboarding</h3>
            <el-card class="box-card">
                <template #header>
                <div class="card-header">
                    <span><el-avatar shape="square" :size="size" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" /></span>
                    Yaw graham
                    <br>
                    admin
                </div>
                </template>
                <div class="text item">
                    <el-row>
                        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Full Name: Yaw graham
                            <br>
                            Phone #: 9987654321
                            <br>
                            Email: dummy@gmaiil.com
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Voter's ID
                            <br/>
                            <img
                                class="radio-icon-position"
                                src="@/assets/img/vr-bg.jpg"
                                alt=""
                                style="height: 150px;width:400px;"
                                />
                        </el-col>
                    </el-row>
                </div>
                <div >
                    <hr>
                    <button class="btn btn-default" @click="handleDeclineDialog">decline</button>
                    <button class="btn btn-primary" @click="handleApprove">approve</button>
                </div>
            </el-card>
         
        </section>

        <DeclineDialog
            :dialogVisible="dialogVisible"
            :form-data="formData"
            @getChildFormData="handleChildFormData($event)"
            @childClose="handleChildClose()"
        />

    </div>
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
}

// submit approv form data 
function handleApprove() {

}

</script>