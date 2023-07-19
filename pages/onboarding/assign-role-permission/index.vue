<template>
    <section class="edit_mang_wrap">
        <div class="mang_inner">
            <div class="mang_title">
                <h3>Assign roles & permissions</h3>
                <p>Permission assign to admin</p>
            </div>
            <el-form :model="form" ref="formRef">
                <p class="sec_subtitle mb-2">Admin name</p>
                <div class="fieldrow w455">
                    <el-form-item prop="text" :rules="form.adminName ? null : [
                        {
                            required: true,
                            message: 'Please input role name here',
                            trigger: 'blur',
                        },
                        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
                    ]">
                        <el-input v-model="form.adminName" placeholder="Admin name" />
                    </el-form-item>
                </div>
                <div>
                    <p class="sec_subtitle mb-2 mt-4">Role Name </p>
                </div>
                <div class="fieldrow w455 form_select">
                    <el-select v-model="form.roles" multiple placeholder="Roles"
                        :style="!roleInputError && !form.roles.length ? 'border:1px solid #F56C6C;' : ''">
                        <el-option v-for="item in select.roles.data" :key="item.value" :label="item.option"
                            :value="item.value" />
                    </el-select>
                    <small style="font-size:12px;color:#F56C6C" v-if="!form.roles.length && !roleInputError">Please select
                        something.</small>
                </div>
                <div class="perm_sec">
                    <p class="sec_subtitle">Set Permissions</p>
                    <div class="text-small p-2" style="color:#F56C6C" v-if="formError">
                        Please provide all the details.
                    </div>
                    <div class="perm_inner">
                        <h4>Action and sub action</h4>
                        <div class="perm_box">
                            <div class="perm_item">
                                <div class="perm_data" v-if="form.value1.length > 0">Dashboard</div>
                                <el-select v-model="form.value1" multiple placeholder="Dashboard">
                                    <el-option v-for="item in select.dashboard.data" :key="item.value" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                            </div>
                            <div class="perm_item">
                                <div class="perm_data" v-if="form.value2.length > 0">Complaints</div>
                                <el-select v-model="form.value2" multiple placeholder="Complaints">
                                    <el-option v-for="item in select.complaints.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                            </div>
                            <div class="perm_item">
                                <div class="perm_data" v-if="form.value3.length > 0">Customer</div>
                                <el-select v-model="form.value3" multiple placeholder="Customer">
                                    <el-option v-for="item in select.Customer.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                            </div>
                            <div class="perm_item">
                                <div class="perm_data" v-if="form.value4.length > 0">Support system</div>
                                <el-select v-model="form.value4" multiple placeholder="Support system">
                                    <el-option v-for="item in select.support_system.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                            </div>
                            <div class="perm_item">
                                <div class="perm_data" v-if="form.value5.length > 0">Distributor</div>
                                <el-select v-model="form.value5" multiple placeholder="Distributor">
                                    <el-option v-for="item in select.distributor.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                            </div>
                            <div class="perm_item">
                                <div class="perm_data" v-if="form.value6.length > 0">Delivery agents</div>
                                <el-select v-model="form.value6" multiple placeholder="Delivery agents">
                                    <el-option v-for="item in select.delivery_agents.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                            </div>
                            <div class="perm_item">
                                <div class="perm_data" v-if="form.value7.length > 0">Transactions</div>
                                <el-select v-model="form.value7" multiple placeholder="Transactions">
                                    <el-option v-for="item in select.transactions.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                            </div>
                        </div>
                    </div>

                    <div class="perm_footer">
                        <el-button class="btn btn-default" @click="handleCancel()">Cancel</el-button>
                        <el-button class="btn btn-primary" @click="submitForm(formRef)">Save</el-button>
                    </div>
                </div>
            </el-form>
        </div>
    </section>
</template>



<script setup>
import { flashNotification } from "@/composables/useNotification.js"

const form = reactive({
    roles: [],
    adminName: null,
    value1: [],
    value2: [],
    value3: [],
    value4: [],
    value5: [],
    value6: [],
    value7: []
});
const formRef = ref();
const formError = ref(false);
const roleInputError = ref(true);
const validate = () => {
    if (!form.roles.length) {
        roleInputError.value = false;
    }
    if (!form.value1.length || !form.value2.length || !form.value3.length || !form.value4.length || !form.value5.length || !form.value6.length || !form.value7.length || !form.roles.length || !form.adminName) {
        return false
    };
    return true;
}
const submitForm = (formEl) => {
    if (!formEl) { return };

    formEl.validate((valid) => {
        if (valid && validate()) {
            console.log('submit!', form);
            formError.value = false;
            navigateTo("/onboarding")
        } else {
            console.log('error submit!');
            flashNotification('warning', 'Please fill required fields')
            if (!validate()) {
                formError.value = true;
            }
            return false
        }
    })
}
const handleCancel = () => {
    navigateTo("/onboarding")
}
onBeforeRouteLeave((to, from, next) => {
    const router = useRouter();
    router.previousRoute = ''
    next();
});



const select = reactive({
    roles: {
        data: [
            {
                option: "Distributor",
                value: 1
            },
            {
                option: "Delivery agent",
                value: 2
            },
            {
                option: "Customer",
                value: 3
            }
        ]
    },
    dashboard: {
        data: [
            {
                option: 'View',
                value: 1
            },
            {
                option: 'Can see own data',
                value: 2
            },
            {
                option: 'Can see other data',
                value: 3
            }
        ]
    },
    complaints: {
        data: [
            {
                option: 'Can view all complaints',
                value: 1
            },
            {
                option: 'Can view complaints related to them',
                value: 2
            },
            {
                option: 'Can take action on all complaints',
                value: 3
            },
            {
                option: 'Can take actions on complaints related to them',
                value: 4
            },
            {
                option: 'Can transfer complaints to other admin',
                value: 5
            }
        ]
    },
    Customer: {
        data: [
            {
                option: 'View all customer(including added by others)',
                value: 1
            },
            {
                option: 'View only customer added by you',
                value: 2
            },
            {
                option: 'Edit',
                value: 3
            },
            {
                option: "Delete",
                value: 4
            }
        ]
    },
    support_system: {
        data: [
            {
                option: 'Handling general queries',
                value: 1
            },
            {
                option: 'Handling complaints coming to support system',
                value: 2
            },
            {
                option: 'Promotional updates',
                value: 3
            },
            {
                option: 'Handling support system',
                value: 4
            },
            {
                option: 'Handling product and technical issues',
                value: 5
            },
        ]
    },
    distributor: {
        data: [
            {
                option: 'View',
                value: 1
            },
            {
                option: 'Can add new distributor',
                value: 2
            },
            {
                option: 'Can edit details of any distributor',
                value: 3
            },
            {
                option: 'Can delete any distributor',
                value: 4
            }
        ]
    },
    delivery_agents: {
        data: [
            {
                option: 'Can view all delivery agents',
                value: 1,
            },
            {
                option: 'Can view delivery agents add by them',
                value: 2
            },
            {
                option: 'Can edit details of all agents',
                value: 3
            },
            {
                option: 'Can edit details of agents added by them',
                value: 4
            }
        ]
    },
    transactions: {
        data: [
            {
                option: 'Can view all transactions',
                value: 1,
            },
            {
                option: 'Can view only there transactins',
                value: 2
            },
            {
                option: 'Can provide refunds',
                value: 3
            },
            {
                option: 'Can request for remaining payments',
                value: 4
            },
            {
                option: 'Download receipts of transactions',
                value: 5
            },
            {
                option: 'Downlaod receipts of your transaction history only',
                value: 6
            }
        ]
    }
});

onMounted(() => {
    const router = useRouter();
    form.adminName = router.adminName;
})
</script>
