<template>
  <div>
    <ProductTable tableHeading="Cylinders"
     tableSubHeading="Showing available cylinders list" 
     :addButtonVisibility="true"
      addButtonText="Add Product" 
      :tableConfig="productTableData.tableConfig" :tableData="productTableData.listData"
      :tableQuery="listQuery" @pagination="handlePagination()" @add="handleAdd($event)" @edit="handleEdit($event)"
      @delete="handleDelete($event)" :tableCheckBoxVisibility="true"
      @multipleSelection="handleMultipleSelection($event)" />
  </div>
</template>
<script setup>
import ProductTable from '@/components/tables/ProductTable.vue'
import { onMounted } from 'vue';
import axios from 'axios';
const productTableData = reactive({
  listData: [],
  tableConfig:
    [
      {
        label: "Image",
        prop: "file_list",
        width: "",
        className: "redFont",
      },
      {
        label: "Product",
        prop: "product",
        width: "",
        sortable: "sortable",
        className: "redFont",
      },
      {
        label: "Price",
        prop: "cylinder_price",
        width: "",
        sortable: "sortable",
        className: "blueFont",
      },
      {
        label: "Stock Quantity",
        prop: "stock_quantity",
        width: "",
        sortable: "",
        className: "blueFont",
      },
      {
        label: "Min. Order",
        prop: "minimum_order",
        width: "",
        sortable: "",
        className: "blueFont",
      },
      {
        label: "Discount",
        prop: "discount",
        width: "",
        sortable: "",
        className: "blueFont",
      },
      {
        label: "Offer Date",
        prop: "offer_date",
        width: "",
        sortable: "",
        className: "blueFont",
      },
    ],
})
onMounted(() => {
  fetchProductData();
})

//fetched product data
const fetchProductData = async () => {
  const getData = await axios.get('http://localhost:8080/products')
  productTableData.listData = getData.data
}

let listQuery = {
  page: 1,
  limit: 10,
  search: "",
  searchJoin: "or",
  orderBy: "created_at",
  sortedBy: "desc",
}

// pagination 
function handlePagination(data) {
  getList();
}

// add 
function handleAdd() {
  console.log('add button')
  navigateTo("/products/addproduct")
}

// edit 
function handleEdit(data) {
  console.log(data)
  navigateTo("/products/updateproduct")
}

// delete 
const handleDelete = async (id) => {
  console.log(id)
  axios.delete(`http://localhost:8080/products/${id}`)
    .then(function (response) {
      console.log(response)
      fetchProductData()
    }).catch(function (error) {
      console.log(error)
    })

}

// get list 
function getList() {
  // API CALL MADE
}

function handleMultipleSelection(data) {
  console.log(data)
}

</script>
<style></style>