<template>
    <section class="add-role-wrap">
        <div class="bg-white rounded-3" style="margin:50px 20px 20px 20px;height: 98%;">
            <div class="px-4 py-4">
                <h4>Add new role</h4>
                <p>Adding new role</p>
                <el-form :model="form">
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
                        <div class="text-bold text-dark text-small">Set permissions</div>
                        <div class="mt-4 rounded-3 p-3  role-permission-drops"
                            style="box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);">
                            <div class="flex flex-column lh-base">
                                <div for="" class="mx-1 text-dark" v-if="form.value1.length > 0">Dashboard</div>
                                <el-select v-model="form.value1" multiple placeholder="Dashboard" style="width: 240px">
                                    <el-form-item prop="text1" rules="[
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
                                    <el-option v-for="item in select.Customer.data" :key="item" :label="item.option"
                                        :value="item.value" />
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
                            <el-button @click="submitForm()" class="text-white bottom-button"
                                style="background-color: rgba(94, 114, 228, 1);position: relative;top:-41px">Save</el-button>
                        </div>
                    </div>
                </el-form>
            </div>
        </div>
    </section>
</template>



<script setup>

</script>