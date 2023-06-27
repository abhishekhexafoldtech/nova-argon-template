<template>
    <div class="container-fluid bg-white rounded-3  mt-2">
      <ProductHeader/>
      <div class="table-responsive">
        <div class="d-flex justify-content-between mt-3">
          <div class="">
            <!-- Card header -->
            <div class="card-heade mx-4">
              <h6 class="d-flex text-black" style="font-size: 20px;font-weight:600">{{ allProducts.$state.productType ? 'All products' : 'All accessories' }}</h6>
              <p>Showing the available product list</p>
            </div>
          </div>
          <div class="d-flex">
            <div class="dropdown d-inline" >
              <NuxtLink to="/products/add">

              <button class="btn d-flex text-white" style="background: rgb(102,108,228);
background: linear-gradient(90deg, rgba(102,108,228,1) 0%, rgba(110,104,229,1) 35%, rgba(120,99,229,1) 100%);" > <IconsPlus/> &nbsp;  Add product</button>
              </NuxtLink>
            </div>
             &nbsp;
            <div class="dropdown d-inline">
            </div>
             &nbsp;
            <div class="dropdown d-inline">
              <button class="btn "><i class="fa fa-refresh" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
  
        <table id="datatable-search" class="table table-flush">
          <thead class="thead-light">
            <tr class="text-sm">
              <th>PRODUCT</th>
              <th>Cyinder/price</th>
              <th>Stock Quality</th>
              <th>Minimal order unit</th>
              <th>Discount </th>
              <th>Offer date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           
            <tr v-for="product in  allProducts.$state.allproducts ">
              <td class="text-sm font-weight-normal">{{ product.product }}</td>
              <td class="text-sm font-weight-normal">{{product.price}}</td>
              <td class="text-sm font-weight-normal">{{product.stock}}</td>
              <td class="text-sm font-weight-normal">{{product.orderunit}}</td>
              <td class="text-sm font-weight-normal">{{ product.discount }}</td>
              <td class="text-sm font-weight-normal">{{ product.orderdate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
    
    <script>
  import { DataTable } from "simple-datatables";
import { productStore } from "~/stores/ProductStore";
  
  export default {
    name: "UserOrderTable",
  
    data() {
      return {
      };
    },
   async setup(){

      const allProducts = productStore();
      
      return {
        allProducts
      }
    },

    async created(){
      await this.allProducts.getProducts();
      
    },
    
    async mounted() {
      // eslint-disable-next-line no-unused-vars
      await $fetch("/api/productdata");


      const dataTableSearch = new DataTable("#datatable-search", {
        searchable: true,
        fixedHeight: true,
      });
      if (document.getElementById("order-list")) {
        const dataTabl = new DataTable("#order-list", {
          able: true,
          fixedHeight: false,
          perPageSelect: false,
        });
  
        document.querySelectorAll(".export").forEach(function (el) {
          el.addEventListener("click", function (el) {
            var type = el.dataset.type;
  
            var data = {
              type: type,
              filename: "soft-ui-" + type,
            };
  
            if (type === "csv") {
              data.columnDelimiter = "|";
            }
  
            dataTabl.export(data);
          });
        });
      }
    },
  };
  </script>