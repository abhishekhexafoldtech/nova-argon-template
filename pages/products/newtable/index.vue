

<template>
    <div class="py-6 p-4">
        <Table tableHeading="All Products" tableSubHeading="Showing the list of available products"
            addButtonVisibility="true" addButtonText="Add Product" :tableConfig="config" tableCheckBoxVisibility="true"
            :tableData="items" :tableQuery="listQuery" @search="handleSearch" />
    </div>
</template>

<script setup>
import Table from '@/components/Tables/Table.vue'

import { productStore } from "../../../stores/ProductStore"

let config = reactive([
    {
        label: 'Product',
        prop: 'product'
    },
    {
        label: 'Cylider/Price',
        prop: 'price'
    },
    {
        label: 'Stock Quantity',
        prop: 'stock'
    },
    {
        label: 'Minimal Order Unit',
        prop: 'orderunit'
    },
    {
        label: 'Discount',
        prop: 'discount'
    }, {

        label: 'Offer Date',
        prop: 'orderdate'
    }
]);

let items = ref([])

const store = productStore();

onMounted(async () => {
    await store.getProducts();
    items.value = store.$state.allproducts
})

function handleSearch(data) {
   let filteredProducts = store.$state.allproducts.filter((e)=>{
    if(e.product.toLowerCase().includes(data.value.toLowerCase())){
        console.log(e)
        return e
    }
   });
  
   items.value = filteredProducts
   
}




let listQuery = {
    page: 1,
    limit: 10,
    search: "",
    searchJoin: "or",
    orderBy: "created_at",
    sortedBy: "desc",
}



</script>