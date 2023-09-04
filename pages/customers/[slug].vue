<template>
  <div class="container-area">
    <div class="border rounded-1 shadow-lg">
      <el-row class="profile rounded-1">
        <el-col
          class="d-flex align-items-center align-content-center"
          :xs="24"
          :sm="12"
          :md="4"
          :lg="4"
        >
          <img
            class="img-fluid rounded-circle ms-4 w-30 w-md-60"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4TTdIlL3swAddqR7ZY42BAgAo5Xj4lawocuvnjIuEVXm7ref0Xb9D0LTqfCNyPVGpy8&usqp=CAU"
            alt="profile"
          />
        </el-col>
        <el-col
          class="d-flex flex-column justify-content-center mt-2"
          :xs="24"
          :sm="12"
          :md="4"
          :lg="4"
        >
          <h4>Yaw Boafo</h4>
          <div>
            <p>Customer</p>
            <p>ID: <strong class="text-dark">101</strong></p>
          </div>
        </el-col>
        <el-col
          class="d-flex flex-column justify-content-end"
          :xs="24"
          :sm="12"
          :md="6"
          :lg="6"
        >
          <p>Customer entry: <strong class="text-dark">Deposit</strong></p>
          <p>
            Distributor name: <strong class="text-dark"> Yaw Graham</strong>
          </p>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6">
          <!-- <div  class="active-button px-4 mt-4" type=""> <span v-if="isActive"  class="dot"></span>Active</div> -->
          <!-- active button -->
          <ActiveButton class="mt-4" :isActive="isActive" />
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-tabs
            v-model="activeName"
            class="demo-tabs ms-4 mt-2"
            @tab-click="handleClick"
          >
            <el-tab-pane label="Personal details" name="p_detail"></el-tab-pane>
            <el-tab-pane label="Latest order" name="l_order"></el-tab-pane>
            <el-tab-pane label="All orders" name="all_orders"></el-tab-pane>
            <el-tab-pane
              label="Cancelled order"
              name="can_orders"
            ></el-tab-pane>
            <el-tab-pane label="Deposits" name="deposits"></el-tab-pane>
            <el-tab-pane label="Refund balance" name="r_balance"></el-tab-pane>
            <el-tab-pane label="Complaints" name="complaints"></el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ActiveButton from "~/components/buttons/ActiveButton.vue";
const isActive = ref(true);
const activeName = ref("p_detail");

const handleClick = (tab, event) => {
  const name = tab.props.name;
  console.log(name);
};
</script>
<style scoped>
.profile {
  height: auto;
  background-color: gainsboro;
}

.demo-tabs > .el-tabs__content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
