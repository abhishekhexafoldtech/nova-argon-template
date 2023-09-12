<template>
  <div>
    <Table
      :table-config="customerComplaintsConfig"
      :table-data="customerComplaints"
      :table-query="listQuery"
      :export="true"
      :filter="true"
      :refresh="true"
      :editButtonVisibility="false"
      :deleteButtonVisibility="true"
      :viewButtonVisibility="true"
      :tableCheckBoxVisibility="true"
      :heading-row-reverse="true"
    />
  </div>
</template>

<script setup>
import Table from "../tables/Table.vue";
import {
  customerComplaintsConfig,
  customerComplaints,
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
