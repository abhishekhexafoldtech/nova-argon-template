<template>
    <div>
       <Table :table-config="customerAllOrdersConfig" :table-data="customerAllOrders" :table-query="listQuery" :export="true" :filter="true" :refresh="true" :editButtonVisibility="false" :deleteButtonVisibility="false" download-link-content="View receipt" :download-visibility="true"/>
    </div>
</template>

<script setup>
 import Table from '../tables/Table.vue';
 import {customerAllOrdersConfig,customerAllOrders} from "@/composables/useCustomerTable";
 let listQuery = reactive({
  page: 1,
  limit: 10,
  search: "",
  searchJoin: "or",
  orderBy: "created_at",
  sortedBy: "desc",
});
</script>

