
<template>
  <section>
    <!-- when no data -->
  <div v-if="!customerTableData.length">
    <EmptyManager 
      :icon="CustomerEmptyImage" 
      heading="No customer added yet"
      description="List of customers not added yet." 
    />
  </div>

  <div class="container-area" v-if="customerTableData.length">
    <CustomerEditForm 
      :visible="customerEdit" 
      @handleUpdateCustomerDetails="handleEditedUserUpdate"
      @handleCloseCustomerEditForm="handleEditUserClose" 
    />

    <el-row>
      <el-col>
        <!-- <h4 class="mb-4">Customers</h4> -->
        <h4 class="mb-4">{{ tableName }}</h4>
      </el-col>
      
      <el-col class="cards" :xs="24" :sm="10" :md="7" :lg="7">
        <CustomerKpiCard 
          @click="fetchApiData('customers')" 
          :class="[selectedApi === 'customers' ? 'active-card' : '']"
          title="All customers" 
          :percentage="customersKpi.customers.percentage" 
          :value="customersKpi.customers.value" 
          :icon="CustomerIcon" 
        />
      </el-col>

      <el-col class="cards ms-md-4" :xs="24" :sm="10" :md="7" :lg="7">
        <CustomerKpiCard 
          @click="fetchApiData('orders')" 
          :class="[selectedApi === 'orders' ? 'active-card' : '']"
          title="Latest order" 
          :percentage="customersKpi.latestOrders.percentage" 
          :value="customersKpi.latestOrders.value" 
          :icon="OrderIcon" 
        />
      </el-col>

      <el-col class="cards ms-md-4" :xs="24" :sm="10" :md="7" :lg="7">
        <CustomerKpiCard 
          @click="fetchApiData('complaints')" 
          :class="[selectedApi === 'complaints' ? 'active-card' : '']"
          title="Complaints" 
          :percentage="customersKpi.complaints.percentage" 
          :value="customersKpi.complaints.value" 
          :icon="ComplaintIcon" 
        />
      </el-col>
      <el-col>
        <br>
        <br>
        <div class="table-area">
          <Table 
            style="border-radius: 20px" 
            viewButtonVisibility="true" 
            :addButtonVisibility="false"
            :tableCheckBoxVisibility="true" 
            :export="true" 
            :filter="true"
            :refresh="true" 
            :tableConfig="customerTableConfig" 
            :tableData="customerTableData" 
            :tableQuery="listQuery"
            @view="handleView"
            @pagination="handlePagination()" 
            :editButtonVisibility="tableEditButtonVisibility"  
            @edit="handleEdit($event)" 
            @delete="handleDelete($event)" 
            @multipleSelection="handleMultipleSelection($event)" 
          />
        </div>
      </el-col>
    </el-row>
  </div>
  </section>
</template>
<script setup>
import { ref, onBeforeMount, onUnmounted } from "vue";
import { tableConfig, allCustomers, getCustomersTableData } from "@/composables/useCustomerTable.js"
import CustomerEditForm from "@/components/Customer/EditForm.vue";
import EmptyManager from "@/components/cards/EmptyManager.vue";
import CustomerEmptyImage from "@/assets/svg/customers_empty.svg"
import Table from "@/components/tables/Table.vue";
import CustomerKpiCard from "@/components/Customer/KpiCard.vue";
import CustomerIcon from "@/assets/svg/customer.svg";
import OrderIcon from "@/assets/svg/order.svg";
import ComplaintIcon from "@/assets/svg/complaint.svg";

const customerTableConfig = ref([]);
const customerTableData = ref([]);
const tableEditButtonVisibility = ref(true);
const customerEdit = ref(false)
const router = useRouter()
const customersKpi = reactive({
  customers: {
    value: "+500",
    percentage: "11.2%",
  },
  latestOrders: {
    value: "+100",
    percentage: "11.2%",
  },
  complaints: {
    value: "+3,462",
    percentage: "11.2%",
  }

});
const tableName = ref("Customers");
const selectedApi = ref(null); 
let listQuery = reactive({
  page: 1,
  limit: 10,
  search: "",
  searchJoin: "or",
  orderBy: "created_at",
  sortedBy: "desc",
});


// edit user
function handleEditedUserUpdate(data) {
  console.log(data);
  customerEdit.value = false;
}

// edit user close
function handleEditUserClose(data) {
  if (data) {
    customerEdit.value = false;
    console.log("Cancel");
  } else {
    console.log("close")
    customerEdit.value = false;
  }
}


//fetch the table data
const fetchApiData = async(apiName) => {
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



// pagination
function handlePagination(data) {
  getList();
}

//handle view
function handleView(data) {
  let r = "customer";
  router.push(`customers/${r}-${data.id}`);
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


onBeforeMount(async()=>{
  await fetchApiData("customers")
})

onUnmounted(()=>{
  sessionStorage.clear("customers_data");
  sessionStorage.clear("customers_orders_data");
})

definePageMeta({
  layout: "default",
});


</script>
<style scoped>
.cards {
  width: 40% !important;
}

.active-card {
  background-color: rgb(228, 228, 228);
}
</style>
  