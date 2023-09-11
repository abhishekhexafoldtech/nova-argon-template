<template>
  <div class="container-area">
    <div class="cd_header">
      <div class="header_inner">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4TTdIlL3swAddqR7ZY42BAgAo5Xj4lawocuvnjIuEVXm7ref0Xb9D0LTqfCNyPVGpy8&usqp=CAU"
          alt="Profile" />
        <div class="h_right">
          <div class="h_name">
            <h4>Yaw Boafo</h4>
            <ActiveButton :isActive="isActive" />
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
      <LazyCustomerDetail v-if="activeName==='p_detail'" />
      <LazyCustomerLatestOrder v-if="activeName==='l_order'"/>
      <LazyCustomerAllOrders v-if="activeName === 'all_orders'"/>
      <LazyCustomerCancelledOrder v-if="activeName === 'can_orders'"/>
      <LazyCustomerDepositsTable v-if="activeName === 'deposits'"/>
      <LazyCustomerRefundBalanceTable v-if="activeName === 'r_balance'"/>
      <LazyCustomerComplaintsTable v-if="activeName === 'complaints'"/>
    </div>
  </div>
</template> 
<script setup>
import { ref,watch } from "vue";
import ActiveButton from "~/components/buttons/ActiveButton.vue";

// import CustomerDetail from "~/components/Customer/CustomerDetail.vue";
// import CustomerLatestOrder from "~/components/Customer/LatestOrder.vue"

const isActive = ref(true);
const activeName = ref("p_detail");
const tableName = ref("");

watch(activeName,()=>{
  if(activeName.value === "all_orders"){
    tableName.value = "All Orders"
  }else if(activeName.value === "can_orders"){
    tableName.value = "Cancelled Order"
  }else if(activeName.value === 'deposits'){
    tableName.value = "Deposit amount"
  }else if(activeName.value === 'r_balance'){
    tableName.value = "Refund balance"
  }else if(activeName.value === 'complaints'){
    tableName.value = "Complaints"
  }else{
    tableName.value = ""
  }
})

const handleClick = (tab, event) => {
  const name = tab.props.name;
};
</script>
<style scoped>
</style>
