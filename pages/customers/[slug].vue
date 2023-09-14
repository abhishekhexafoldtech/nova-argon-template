<template>
  <div class="container-area">
    <div class="cd_header">
      <div class="header_inner">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4TTdIlL3swAddqR7ZY42BAgAo5Xj4lawocuvnjIuEVXm7ref0Xb9D0LTqfCNyPVGpy8&usqp=CAU"
          alt="Profile"
        />
        <div class="h_right">
          <div class="h_name">
            <h4>Yaw Boafo</h4>
            <el-switch
            v-model="value5"
            class="ml-2"
            inline-prompt
            style="--el-switch-on-color: #0A7B37; --el-switch-off-color: #ff4949"
            active-text="Active"
            inactive-text="In-active"
          />
          </div>
          <div class="h_info">
            <div>
              <p>Customer</p>
              <p>ID:<span>101</span></p>
            </div>
            <div>
              <p>Customer entry:<span>Deposit</span></p>
              <p>Distributor name:<span>Yaw Graham</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="cd_header_tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Personal details" name="p_detail"></el-tab-pane>
          <el-tab-pane label="Latest order" name="l_order"></el-tab-pane>
          <el-tab-pane label="All orders" name="all_orders"></el-tab-pane>
          <el-tab-pane label="Cancelled order" name="can_orders"></el-tab-pane>
          <el-tab-pane label="Deposits" name="deposits"></el-tab-pane>
          <el-tab-pane label="Refund balance" name="r_balance"></el-tab-pane>
          <el-tab-pane label="Complaints" name="complaints"></el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- table heading -->
    <h4 class="page_heading mt-4 mb-3">{{ tableName }}</h4>
    <div>
      <CustomerDetail v-if="activeName === 'p_detail'" />
      <CustomerLatestOrder v-if="activeName === 'l_order'" />
      <CustomerAllOrders v-if="activeName === 'all_orders'" />
      <CustomerCancelledOrder v-if="activeName === 'can_orders'" />
      <CustomerDepositsTable v-if="activeName === 'deposits'" />
      <CustomerRefundBalanceTable v-if="activeName === 'r_balance'" />
      <CustomerComplaintsTable v-if="activeName === 'complaints'" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import CustomerDetail from "@/components/customer/CustomerDetail.vue";
import CustomerLatestOrder from "@/components/customer/LatestOrder.vue";
import CustomerAllOrders from "@/components/customer/AllOrders.vue";
import CustomerCancelledOrder from "@/components/customer/CancelledOrder.vue";
import CustomerDepositsTable from "@/components/customer/DepositsTable.vue";
import CustomerRefundBalanceTable from "@/components/customer/RefundBalanceTable.vue";
import CustomerComplaintsTable from "@/components/customer/ComplaintsTable.vue";
const activeName = ref("p_detail");
const tableName = ref("");
const value5 = ref(true)
watch(activeName, () => {
  if (activeName.value === "all_orders") {
    tableName.value = "All Orders";
  } else if (activeName.value === "can_orders") {
    tableName.value = "Cancelled Order";
  } else if (activeName.value === "deposits") {
    tableName.value = "Deposit amount";
  } else if (activeName.value === "r_balance") {
    tableName.value = "Refund balance";
  } else if (activeName.value === "complaints") {
    tableName.value = "Complaints";
  } else {
    tableName.value = "";
  }
});
const handleClick = (tab, event) => {
  const name = tab.props.name;
};
</script>
<style scoped></style>
