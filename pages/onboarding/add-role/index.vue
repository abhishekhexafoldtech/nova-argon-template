<template>
    <section class="add-role-wrap">
        <div class="bg-white rounded-3" style="margin:50px 20px 20px 20px;height: 98%;">
            <div class="px-4 py-4">
                <h4>Add new role</h4>
                <p>Adding new role</p>
                <el-form :model="form" ref="formRef">
                    <div class="mt-4" style="width:455px">
                        <div class="text-bold text-dark text-small" style="line-height: 3;">Role name</div>
                        <el-form-item prop="text" :rules="form.rollName ? null : [
                            {
                                required: true,
                                message: 'Please input role name here',
                                trigger: 'blur',
                            },
                            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
                        ]">
                            <el-input v-model="form.rollName" style="height:50px" />
                        </el-form-item>
                    </div>
                    <div class="mt-4" style="width:750px;">
                        <div class="d-flex">
                            <div class="text-bold text-dark text-small">Set permissions </div>
                            <small class="text-danger mx-4" v-if="formError">Please provide all the information</small>
                        </div>
                        <div class="mt-4 rounded-3 p-3  role-permission-drops"
                            style="box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);">
                            <div class="flex flex-column lh-base">
                                <div for="" class="mx-1 text-dark" v-if="form.value1.length > 0">Dashboard</div>
                                <el-select v-model="form.value1" multiple placeholder="Dashboard" style="width: 240px">
                                    <el-form-item  rules="[
                                        {
                                            required: true,
                                            message: 'Please input role name here',
                                            trigger: 'blur',
                                        },
                                    ]">
                                        <el-option v-for="item in select.dashboard.data" :key="item.value"
                                            :label="item.option" :value="item.value" />
                                        </el-form-item>
                                </el-select>
                            </div>
                            <div class="flex flex-column lh-base">
                                <div for="" class="mx-1 text-dark" v-if="form.value2.length > 0">Complaints</div>
                                <el-select v-model="form.value2" multiple placeholder="Complaints" style="width: 240px">
                                    <el-option v-for="item in select.complaints.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                            </div>
                            <div class="flex flex-column lh-base">
                                <div for="" class="mx-1 text-dark" v-if="form.value3.length > 0">Customer</div>
                               
                                <el-select v-model="form.value3" multiple placeholder="Customer" style="width: 240px">
                                    <el-form-item  rules="[
                                        {
                                            required: true,
                                            message: 'Please input role name here',
                                            trigger: 'blur',
                                        },
                                    ]">
                                    <el-option v-for="item in select.Customer.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                    </el-form-item>
                                </el-select>
                            </div>
                            <div class="flex flex-column lh-base">
                                <div for="" class="mx-1 text-dark" v-if="form.value4.length > 0">Support system</div>
                                <el-select v-model="form.value4" multiple placeholder="Support system" style="width: 240px">
                                    <el-option v-for="item in select.support_system.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                            </div>
                            <div class="flex flex-column lh-base">
                                <div for="" class="mx-1 text-dark" v-if="form.value5.length > 0">Distributor</div>
                                <el-select v-model="form.value5" multiple placeholder="Distributor" style="width: 240px">
                                    <el-option v-for="item in select.distributor.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                            </div>
                            <div class="flex flex-column lh-base">
                                <div for="" class="mx-1 text-dark" v-if="form.value6.length > 0">Delivery agents</div>
                                <el-select v-model="form.value6" multiple placeholder="Delivery agents"
                                    style="width: 240px">
                                    <el-option v-for="item in select.delivery_agents.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                            </div>
                            <div class="flex flex-column lh-base">
                                <div for="" class="mx-1 text-dark" v-if="form.value7.length > 0">Transactions</div>
                                <el-select v-model="form.value7" multiple placeholder="Transactions" style="width: 240px">
                                    <el-option v-for="item in select.transactions.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                            </div>
                        </div>
                    </div>
                    <div class="w-100 flex" style="gap:30px;position: relative;top:80px;bottom: 80px;">
                        <div>
                            <el-button @click="handleOnboarding('cancel')" style="border: 1px solid rgba(94, 114, 228, 1);"
                                class="bottom-button">Cancel</el-button>
                        </div>
                        <div style="margin-left: 220px;">
                            <el-button @click="handleOnboarding(formRef)" class="text-white bottom-button"
                                style="background-color: rgba(94, 114, 228, 1);position: relative;top:-41px">Save</el-button>
                        </div>
                    </div>
                </el-form>
            </div>
        </div>
    </section>
</template>



<script  setup>
const form = reactive({
    rollName: null,
    value1: [],
    value2: [],
    value3: [],
    value4: [],
    value5: [],
    value6: [],
    value7: []
});
const formRef = ref();
const formError = ref(false)
const validate = () => {
    if ( !form.value1.length ||  !form.value2.length || !form.value3.length || !form.value4.length || !form.value5.length || !form.value6.length || !form.value7.length){ return false};
    return true;
}
const handleOnboarding = (formEl) => {
    if (!formEl) {return};
   
    formEl.validate((valid) => {
    if (valid && validate()) {
      console.log('submit!',form);
      navigateTo("/onboarding")
    } else {
      console.log('error submit!');
      formError.value = true;
      return false
    }
  })
}
onBeforeRouteLeave((to, from, next) => {
    const router = useRouter();
    router.previousRoute = 'role'
    next();
});
const select = reactive({
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
</script>

<style scoped>
.add-role-wrap {
    width: 100%;
    height: 85vh;
}
.role-permission-drops {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
}

.role-permission-drops>div {
    min-width: 350px;
}

.bottom-button {
    min-width: 211px;
    height: 41px;
}

.el-select {
    min-width: 300px;
}
</style>