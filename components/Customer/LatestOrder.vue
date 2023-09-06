<template>
  <el-row>
    <el-col class="border rounded bg-white" :xm="24" :sm="24" :md="18" :lg="18">
      <el-row class="p-4">
        <el-col :xm="24" :sm="24" :md="24" :lg="24">
          <h5>Latest order</h5>
          <p>
            <span>Order placed:</span> <span class="text-dark">2023/02/12</span>
          </p>
          <p class="pb-2">
            <span>Order ID:</span> <span class="text-dark">1101</span>
          </p>
          <hr />
        </el-col>
        <el-col v-for="item in customer" :xm="24" :sm="24" :md="24" :lg="24">
          <div class="d-flex justify-content-between">
            <div>
              <p>
                <span>Order delivered:</span>
                <span class="text-dark ms-1">{{ item.order_delivered }}</span>
              </p>
              <div class="d-md-flex">
                <img
                  class="img-fluid cyl-img"
                  :src="item.cylinder_img"
                  alt="image"
                />
                <div class="ms-md-3">
                  <h5>3kg Steel cylinder</h5>
                  <span
                    >Deposit cost:
                    <span class="text-dark">{{ item.deposit_cost }}</span> | Gas
                    cost:
                    <span class="text-dark">{{ item.gas_cost }}</span></span
                  >
                  <br />
                  <span>Quantity: {{ item.quantity }}</span> <br />
                  <div
                    :class="
                      item.order_status === 'pending'
                        ? 'bg-danger'
                        : 'bg-success'
                    "
                    class="px-2 w-sm-40 text-uppercase rounded text-white text-center"
                  >
                    {{ item.order_status }}
                  </div>
                </div>
              </div>
            </div>
            <div class="text-end">
              <div>
                <el-button
                  style="background-color: rgb(100, 100, 231); color: white"
                  @click="viewRecept"
                  >View receipt</el-button
                >
              </div>
              <el-button
                style="background-color: rgb(252, 252, 31); color: white"
                v-if="item.order_status === 'delivered'"
                class="mt-4"
                @click="exchange"
                >Exchange</el-button
              >
              <br />
              <span class="mt-4">Order total</span> <br />
              <b class="mt-4">GHs 25</b>
            </div>
          </div>
          <hr />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script setup>
import gas from "@/assets/img/card-visa.jpg";
const customer = ref([
  {
    order_placed: "2023/02/12",
    order_id: "1101",
    order_delivered: "pending",
    cylinder_type: "3kg Steel cylinder",
    cylinder_img: gas,
    deposit_cost: "GHs 35",
    gas_cost: "GHs 40",
    quantity: "1",
    order_total: "GHs 75",
    order_status: "pending",
  },
  {
    order_placed: "2023/03/12",
    order_id: "1101",
    order_delivered: "2023/01/12",
    cylinder_type: "3kg Steel cylinder",
    cylinder_img: gas,
    deposit_cost: "GHs 35",
    gas_cost: "GHs 40",
    quantity: "1",
    order_total: "GHs 75",
    order_status: "delivered",
  },
]);

//viewRecept
const viewRecept = () => {
  console.log("viewRecept");
};

//exchange
const exchange = () => {
  console.log("exchange");
};
</script>
<style>
.cyl-img {
  width: 110px;
  height: 120px;
  border-radius: 15px;
}
</style>
