<template>
    <div class="container-fluid bg-white rounded-3  mt-5">
      <div class="table-responsive">
        <div class="d-flex justify-content-between mt-3">
          <div class="">
            <!-- Card header -->
            <div class="card-heade">
              <h6 class="d-flex text-black" style="font-size: 20px;font-weight:600">All Products</h6>
              <p>Showing the available product list</p>
            </div>
          </div>
          <div class="d-flex">
            <div class="dropdown d-inline" >
              <button class="btn d-flex text-white" style="background: rgb(102,108,228);
background: linear-gradient(90deg, rgba(102,108,228,1) 0%, rgba(110,104,229,1) 35%, rgba(120,99,229,1) 100%);"> <IconsPlus/> &nbsp;  Add product</button>
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
            <tr>
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
           
            <tr v-for="product in data">
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
import { getAllProducts } from "~/stores/ProductStore";
  
  export default {
    name: "UserOrderTable",
  
    data() {
      return {
        data:[]
      };
    },
   async setup(){

      const allProducts = getAllProducts();
      
      return {
        allProducts
      }
    },

    async created(){
      await this.allProducts.getProducts();
      const data= this.allProducts.data;
      this.data=data

    },
    
    async mounted() {
      // eslint-disable-next-line no-unused-vars

      let dat = await $fetch("/api/productdata")
      this.data=dat;
      console.log(this.data)
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