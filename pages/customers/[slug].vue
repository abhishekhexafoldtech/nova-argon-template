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

    <div class="mt-4">
      <CustomerDetail v-if="activeName === 'p_detail'" />
      <LatestOrder v-if="activeName === 'l_order'" />
    </div>
  </div>
</template> 
<script setup>
import { ref } from "vue";
import ActiveButton from "~/components/buttons/ActiveButton.vue";
import CustomerDetail from "~/components/Customer/CustomerDetail.vue";
import LatestOrder from "~/components/Customer/LatestOrder.vue"
const isActive = ref(true);
const activeName = ref("p_detail");

const handleClick = (tab, event) => {
  const name = tab.props.name;
  console.log(name);
};
</script>
<style scoped>
</style>
