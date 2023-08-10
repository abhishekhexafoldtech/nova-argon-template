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
                    <el-form-item prop='roleName'>
                        <el-input v-model="newRoleForm.roleName" placeholder="Role Name" />
                    </el-form-item>
                </div>
                <div class="perm_sec">
                    <p class="sec_subtitle">Set Permissions</p>
                    <div class="perm_table">
                        <table class="table table-responsive">
                            <thead>
                                <tr>
                                    <th>Module</th>
                                    <th>Permission</th>
                                    <th>Assign</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowspan="3"><b>Dashboard</b></td>
                                    <td class="border_left">View</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Can see own data</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr class="border_bottom">
                                    <td class="border_left">Can see others data</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td rowspan="4"><b>Customer</b></td>
                                    <td class="border_left">View all customer(Including added by others)</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">View only customer added by you</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Edit</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr class="border_bottom">
                                    <td class="border_left">Delete</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td rowspan="6"><b>Distributor</b></td>
                                    <td class="border_left">View</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Can add new distributor</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Can edit details of any distributor</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Can edit details of distributor added by them</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Can delete any distributor</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr class="border_bottom">
                                    <td class="border_left">Can delete distributor added by them</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td rowspan="6"><b>Transactions</b></td>
                                    <td class="border_left">Can view all transactions</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Can view only their transactions</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Can provide refunds</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Can request for remaining payments</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Download receipts of transactions</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr class="border_bottom">
                                    <td class="border_left">Download receipts of your transactions only</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td rowspan="5"><b>Complaints</b></td>
                                    <td class="border_left">Can view all complaints</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Can view complaints related to them</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Can take action on all complaints</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Can take actions on complaints related to them</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr class="border_bottom">
                                    <td class="border_left">Can transfer complaints to other admin</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td rowspan="5"><b>Support system</b></td>
                                    <td class="border_left">Handling general queries</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Handling complaints coming to support team</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Promotional updates</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Handling support team</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr class="border_bottom">
                                    <td class="border_left">Handling product and technical issues</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td rowspan="4"><b>Delivery agents</b></td>
                                    <td class="border_left">Can view all delivery agents</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Can view delivery agents added by them</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Can edit details of all agents</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                                <tr>
                                    <td class="border_left">Can edit details of agents added by them</td>
                                    <td><el-checkbox v-model="checked1" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    

                    <div class="perm_footer" >
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
    roleName: [{ required: true, message: 'Please provide role name.', trigger: ['blur', 'change'] }],
    value1: [{ required: true, message: 'Please provide options from dashboard.', trigger: ['blur', 'change'] }],
    value2: [{ required: true, message: 'Please provide options from complaints.', trigger: ['blur', 'change'] }],
    value3: [{ required: true, message: 'Please provide options from customer.', trigger: ['blur', 'change'] }],
    value4: [{ required: true, message: 'Please provide options from support system.', trigger: ['blur', 'change'] }],
    value5: [{ required: true, message: 'Please provide options from distributor.', trigger: ['blur', 'change'] }],
    value6: [{ required: true, message: 'Please provide options from delivery agents.', trigger: ['blur', 'change'] }],
    value7: [{ required: true, message: 'Please provide options from transactins.', trigger: ['blur', 'change'] }],
});
const formRef = ref();
const validate = () => {
    if (!newRoleForm.value1.length || !newRoleForm.value2.length || !newRoleForm.value3.length || !newRoleForm.value4.length || !newRoleForm.value5.length || !newRoleForm.value6.length || !newRoleForm.value7.length) { return false };
    return true;
}
const submitForm = (formEl) => {
    if (!formEl) { return };
    formEl.validate((valid) => {
        if (valid && validate()) {
            console.log('submit!', newRoleForm);
            navigateTo("/onboarding")
            flashNotification('success', 'Role Added successfully')
        } else {
            flashNotification('warning', 'Please fill required fields')
            return false
        }
    })
}
const handleCancel = () => {
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
