<template>
  <div class="latest_order">
    <div class="lo_header">
      <h3>Latest Order</h3>
      <ul>
        <li>Order placed:<span>2023/02/12</span></li>
        <li>Order ID:<span>1101</span></li>
      </ul>
    </div>
    <div class="lo_body">
      <div class="lo_item" v-for="item in customer">
        <div class="item_top">
          <p>
            Order delivered:<span>{{ item.order_delivered }}</span>
          </p>
          <button class="btn btn-primary" @click="viewRecept">
            View receipt
          </button>
        </div>
        <div class="item_main">
          <img :src="item.cylinder_img" alt="Product Image" />
          <div class="item_des">
            <h3>{{ item.cylinder_type }}</h3>
            <ul>
              <li>
                Diposit Cost:<span>{{ item.deposit_cost }}</span>
              </li>
              <li>
                Cost:<span>{{ item.gas_cost }}</span>
              </li>
              <li>
                Quantity:<span>{{ item.quantity }}</span>
              </li>
            </ul>
            <span
              class="status"
              :class="
                item.order_status === 'pending' ? 'bg-danger' : 'bg-success'
              "
              >{{ item.order_status }}</span
            >
          </div>
          <div class="item_total">
            <button
              class="btn"
              v-if="item.order_status === 'delivered'"
              @click="exchange"
            >
              Exchange
            </button>
            <p>Order Total<span>GHs 75</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import gas from "@/assets/img/card-visa.jpg";
const customer = ref([
  {
    order_placed: "2023/02/12",
    order_id: "1101",
    order_delivered: "pending",
    cylinder_type: "6kg Steel cylinder",
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
