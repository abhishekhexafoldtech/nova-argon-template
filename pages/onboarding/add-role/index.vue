<template>
    <section class="edit_mang_wrap">
        <div class="mang_inner">
            <div class="mang_title">
                <h3>Add New Role</h3>
                <p>Adding New Role</p>
            </div>
            <el-form :model="newRoleForm" ref="formRef" :rules="newRoleFormRules">
                <p class="sec_subtitle mb-2">Role Name</p>
                <div class="fieldrow w455 mar15">
                    <el-form-item prop = 'roleName'>
                        <el-input v-model="newRoleForm.roleName" placeholder="Role Name" />
                    </el-form-item>
                </div>
                <div class="perm_sec">
                    <p class="sec_subtitle">Set Permissions</p>
                    <div class="perm_inner">
                        <h4>Action and sub action</h4>
                        <div class="perm_box">
                            <div class="perm_item">
                                <div class="perm_data" v-if="newRoleForm.value1.length > 0">Dashboard</div>
                                <el-form-item prop="value1" >
                                <el-select v-model="newRoleForm.value1" multiple placeholder="Dashboard">
                                        <el-option v-for="item in select.dashboard.data" :key="item.value"
                                            :label="item.option" :value="item.value" />
                                </el-select>
                                </el-form-item>
                            </div>
                            <div class="perm_item">
                                <div class="perm_data" v-if="newRoleForm.value2.length > 0">Complaints</div>
                                <el-form-item prop="value2" >
                                <el-select v-model="newRoleForm.value2" multiple placeholder="Complaints">
                                    <el-option v-for="item in select.complaints.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                            </el-form-item>
                            </div>
                            <div class="perm_item">
                                <div class="perm_data" v-if="newRoleForm.value3.length > 0">Customer</div>
                                <el-form-item prop="value3" >
                                <el-select v-model="newRoleForm.value3" multiple placeholder="Customer">
                                    <el-option v-for="item in select.Customer.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                                </el-form-item>
                            </div>
                            <div class="perm_item">
                                <div class="perm_data" v-if="newRoleForm.value4.length > 0">Support system</div>
                                <el-form-item prop="value4" >
                                <el-select v-model="newRoleForm.value4" multiple placeholder="Support system">
                                    <el-option v-for="item in select.support_system.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                                </el-form-item>
                            </div>
                            <div class="perm_item">
                                <div class="perm_data" v-if="newRoleForm.value5.length > 0">Distributor</div>
                                <el-form-item prop="value5" >
                                <el-select v-model="newRoleForm.value5" multiple placeholder="Distributor">
                                    <el-option v-for="item in select.distributor.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                                </el-form-item>
                            </div>
                            <div class="perm_item">
                                <div class="perm_data" v-if="newRoleForm.value6.length > 0">Delivery agents</div>
                                <el-form-item prop="value6" >
                                <el-select v-model="newRoleForm.value6" multiple placeholder="Delivery agents">
                                    <el-option v-for="item in select.delivery_agents.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                                </el-form-item>
                            </div>
                            <div class="perm_item">
                                <div class="perm_data" v-if="newRoleForm.value7.length > 0">Transactions</div>
                                <el-form-item prop="value7" >
                                <el-select v-model="newRoleForm.value7" multiple placeholder="Transactions">
                                    <el-option v-for="item in select.transactions.data" :key="item" :label="item.option"
                                        :value="item.value" />
                                </el-select>
                                </el-form-item>
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
const newRoleForm = reactive({
    roleName: null,
    value1: [],
    value2: [],
    value3: [],
    value4: [],
    value5: [],
    value6: [],
    value7: []
});
const newRoleFormRules = reactive({
    roleName: [{ required: true, message:'Please provide role name.', trigger: ['blur','change'] }],
    value1: [{ required: true,message:'Please provide options from dashboard.',  trigger: ['blur','change'] }],
    value2: [{ required: true,message:'Please provide options from complaints.',  trigger: ['blur','change'] }],
    value3: [{ required: true,message:'Please provide options from customer.',  trigger: ['blur','change'] }],
    value4: [{ required: true,message:'Please provide options from support system.',  trigger: ['blur','change'] }],
    value5: [{ required: true,message:'Please provide options from distributor.', trigger: ['blur','change'] }],
    value6: [{ required: true,message:'Please provide options from delivery agents.',  trigger: ['blur','change'] }],
    value7: [{ required: true,message:'Please provide options from transactins.',  trigger: ['blur','change'] }],
  });
const formRef = ref();
const validate = () => {
    if ( !newRoleForm.value1.length ||  !newRoleForm.value2.length || !newRoleForm.value3.length || !newRoleForm.value4.length || !newRoleForm.value5.length || !newRoleForm.value6.length || !newRoleForm.value7.length){ return false };
    return true;
}
const submitForm = (formEl) => {
    if (!formEl) { return};
    formEl.validate((valid) => {
    if (valid && validate()) {
      console.log('submit!',newRoleForm);
      navigateTo("/onboarding")
      flashNotification('success', 'Role Added successfully')
    } else {
      flashNotification('warning', 'Please fill required fields')
      return false
    }
  })
}
const handleCancel=()=>{
    navigateTo("/onboarding")
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
