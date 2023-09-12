<template>
  <div>
    <Table
      :table-config="customerCancelledOrderConfig"
      :table-data="customerCancelledOrder"
      :table-query="listQuery"
      :export="true"
      :filter="true"
      :refresh="true"
      :actionVisibility="false"
      :heading-row-reverse="true"
    />
  </div>
</template>

<script setup>
import Table from "../tables/Table.vue";
import {
  customerCancelledOrderConfig,
  customerCancelledOrder,
} from "@/composables/useCustomerTable";
let listQuery = reactive({
  page: 1,
  limit: 10,
  search: "",
  searchJoin: "or",
  orderBy: "created_at",
  sortedBy: "desc",
});
</script>
