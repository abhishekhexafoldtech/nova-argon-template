
<template>
  <div v-if="!customerTableData.length">
    <EmptyManager :icon="CustomerEmptyImage" heading="No customer added yet"
      description="List of customers not added yet." />
  </div>
  <div class="container-area" v-if="customerTableData.length">
    <CustomerEditForm @handleUpdateCustomerDetails="handleEditedUserUpdate"
      @handleCloseCustomerEditForm="handleEditUserClose" :visible="customerEdit" />

    <h4 class="page_heading mb-3">Customers</h4>
    <el-row class="cus_kpi_card">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="5">
        <CustomerKpiCard @click="fetchApiData('customers')" :class="[selectedApi === 'customers' ? 'active-card' : '']"
          title="All customers" :percentage="customersKpi.customers.percentage" :value="customersKpi.customers.value"
          :icon="CustomerIcon" />
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="5">
        <CustomerKpiCard @click="fetchApiData('orders')" :class="[selectedApi === 'orders' ? 'active-card' : '']"
          title="Latest order" :percentage="customersKpi.latestOrders.percentage" :value="customersKpi.latestOrders.value"
          :icon="OrderIcon" />
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="5">
        <CustomerKpiCard @click="fetchApiData('complaints')" :class="[selectedApi === 'complaints' ? 'active-card' : '']"
          title="Complaints" :percentage="customersKpi.complaints.percentage" :value="customersKpi.complaints.value"
          :icon="ComplaintIcon" />
      </el-col>
    </el-row>

    <h4 class="page_heading mb-3">{{ tableName }}</h4>
    <div class="table-area">
      <Table class="table_cus" tableSubHeading="" viewButtonVisibility="true" :addButtonVisibility="false"
        :tableConfig="customerTableConfig" :tableData="customerTableData" :tableQuery="listQuery"
        @pagination="handlePagination()" @edit="handleEdit($event)" @delete="handleDelete($event)" @view="handleView"
        :tableCheckBoxVisibility="true" @multipleSelection="handleMultipleSelection($event)"
        :editButtonVisibility="tableEditButtonVisibility" />
    </div>
  </div>
</template>
<script setup>
import { tableConfig, allCustomers, getCustomersTableData } from "@/composables/useCustomerTable.js"
import CustomerEditForm from "@/components/Customer/EditForm.vue";
import EmptyManager from "@/components/cards/EmptyManager.vue";
import CustomerEmptyImage from "@/assets/svg/customers_empty.svg"
import Table from "@/components/tables/Table.vue";
import CustomerKpiCard from "@/components/Customer/KpiCard.vue";
import CustomerIcon from "@/assets/svg/customer.svg";
import OrderIcon from "@/assets/svg/order.svg";
import ComplaintIcon from "@/assets/svg/complaint.svg";
import { onBeforeMount, onUnmounted, ref } from "vue";

const customerTableConfig = ref([]);

const customerTableData = ref([]);

const tableEditButtonVisibility = ref(true);
// user edit details 
const customerEdit = ref(false)
function handleEditedUserUpdate(data) {
  console.log(data);
  customerEdit.value = false;
}
function handleEditUserClose(data) {
  if (data) {
    customerEdit.value = false;
    console.log("Cancel");
  } else {
    console.log("close")
    customerEdit.value = false;
  }
}
// user edit details close

const router = useRouter()

const customersKpi = reactive({
  customers: {
    value: "+500",
    percentage: "11.2%",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-primary",
      shape: "",
    },
  },
  latestOrders: {
    value: "+100",
    percentage: "11.2%",
    icon: {
      component: "ni ni-world",
      background: "bg-gradient-danger",
      shape: "",
    },
  },
  complaints: {
    value: "+3,462",
    percentage: "11.2%",
    icon: {
      component: "ni ni-paper-diploma",
      background: "bg-gradient-success",
      shape: "",
    },
  }

});


const tableName = ref("Customers");



// const apiDataCache = ref({});
const selectedApi = ref(null); // Track the selected API

//fetch the table data
const fetchApiData = async (apiName) => {
  selectedApi.value = apiName;
  await getCustomersTableData(apiName);
  if (apiName === "customers") {
    tableName.value = "All Customers";
    const data = JSON.parse(sessionStorage.getItem("customers_data"));
    customerTableConfig.value = tableConfig.allCustomers;
    tableEditButtonVisibility.value = true;
    customerTableData.value = data;
  } else if (apiName === "orders") {
    tableName.value = "Latest order";
    const data = JSON.parse(sessionStorage.getItem("customers_orders_data"));
    customerTableConfig.value = tableConfig.latestOrders;
    customerTableData.value = data;
    tableEditButtonVisibility.value = true;
  } else if (apiName === "complaints") {
    tableName.value = "Complaints";
    tableEditButtonVisibility.value = false;
    const data = JSON.parse(sessionStorage.getItem("customer_complaints"));
    customerTableData.value = data;
    customerTableConfig.value = tableConfig.complaints;
  }

  // if (apiDataCache.value[apiName]) {
  //   return; // Data is cached; no need to make the API request again
  // };  
  // Set the selected API
  selectedApi.value = apiName;
};

onBeforeMount(async () => {
  await fetchApiData("customers")
})
onUnmounted(() => {
  sessionStorage.clear("customers_data");
  sessionStorage.clear("customers_orders_data");
})
// pagination
function handlePagination(data) {
  getList();
}

//handle view
function handleView(data) {
  let r = "customers list";
  router.push(`customers/${r}-${data.id}`);
}

// add
function handleCreate() {

}

// edit
function handleEdit(data) {
  console.log(data);
  customerEdit.value = true;
  // let r = "edit";
  // router.push(`customers/${r}-${data.id}`);
}

// delete
function handleDelete(data) {
  useToast("warning", "You are not allowed to change data of default user");
  console.log(data);
}

// get list
function getList() {
  // API CALL MADE
}

function handleMultipleSelection(data) {
  console.log(data);
}


//  table list query
let listQuery = reactive({
  page: 1,
  limit: 10,
  search: "",
  searchJoin: "or",
  orderBy: "created_at",
  sortedBy: "desc",
});
// table data


definePageMeta({
  layout: "default",
});


</script>
<style scoped lang="scss">
.cus_kpi_card {
  margin: -15px;
  margin-bottom: 30px;

  .el-col{
    padding: 15px;
  }
}

.table_cus {
  border-radius: 15px;
}
</style>
  