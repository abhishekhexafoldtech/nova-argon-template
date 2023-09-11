<template>
    <div>
       <Table :table-config="customerAllOrdersConfig" :table-data="customerAllOrders" :table-query="listQuery" :export="true" :filter="true" :refresh="true" :editButtonVisibility="false" :deleteButtonVisibility="false" download-link-content="View receipt" :download-visibility="true" @handleDownload="handleDownload" @handleViewReceipt="handleViewReceipt"/>
       <ViewReceipt :dialogVisible="viewReceiptVisibility" @handleSendReceiptEmail="handleSendReceiptEmail" @handleReceiptClose="handleReceiptClose"/>
    </div>
</template>

<script setup>
 import Table from '../tables/Table.vue';
 import {customerAllOrdersConfig,customerAllOrders} from "@/composables/useCustomerTable";
 import ViewReceipt from './ViewReceipt.vue';
 const viewReceiptVisibility = ref(false);
 let listQuery = reactive({
  page: 1,
  limit: 10,
  search: "",
  searchJoin: "or",
  orderBy: "created_at",
  sortedBy: "desc",
});
function handleDownload(index,data){
  console.log(index,data);
};
function handleViewReceipt(data){
  console.log(data);
  viewReceiptVisibility.value = true;
};
function handleSendReceiptEmail(){
  viewReceiptVisibility.value = false;
  flashNotification("success","Email sented.")
}
function handleReceiptClose(){
  viewReceiptVisibility.value = false;
}
</script>

