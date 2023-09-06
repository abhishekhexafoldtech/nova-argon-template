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
          <el-col :xm="24" :sm="24" :md="24" :lg="24">
            <div class="d-flex justify-content-between">
              <div>
                <p>
                  <span>Order delivered:</span>
                  <span class="text-dark"> Pending</span>
                </p>
                <div class="d-md-flex">
                  <img class="img-fluid cyl-img" :src="gas" alt="image" />
                  <div class="ms-md-3">
                    <h5>3kg Steel cylinder</h5>
                    <span>Deposit cost: GHs 10 | Gas cost: GHs 15</span> <br />
                    <span>Quantity: 1</span> <br />
                    <div class=" px-2 w-sm-30 text-uppercase bg-danger rounded text-white text-center">
                      Pending
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-end">
                <div>
                  <el-button type="primary">View receipt</el-button>
                </div>
                <el-button class="mt-4" type="warning">Exchange</el-button>
                <br />
                <span class="mt-4">Order total</span> <br />
                <b class="mt-4">GHs 25</b>
              </div>
            </div>
            <hr />
          </el-col>
          <el-col :xm="24" :sm="24" :md="24" :lg="24">
            <div class="d-flex justify-content-between">
              <div>
                <p>
                  <span>Order delivered:</span>
                  <span class="text-dark"> 2023/02/13</span>
                </p>
                <div class="d-md-flex">
                  <img class="img-fluid cyl-img" :src="gas" alt="image" />
                  <div class="ms-md-3">
                    <h5>3kg Steel cylinder</h5>
                    <span>Deposit cost: GHs 10 | Gas cost: GHs 15</span> <br />
                    <span>Quantity: 1</span> <br />
                    <div class="w-100 px-2 w-sm-35 text-uppercase bg-success rounded text-white text-center">
                      delevered
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-end">
                <div>
                  <el-button type="primary">View receipt</el-button>
                </div>
                <el-button class="mt-4" type="warning">Exchange</el-button>
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
  </script>
  <style>
  .cyl-img {
    width: 110px;
    height: 120px;
    border-radius: 15px;
  }
  </style>
  