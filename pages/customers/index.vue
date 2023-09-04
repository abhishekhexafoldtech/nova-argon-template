<template>
  <div class="container-area">
    <el-row>
      <el-col>
        <h4 class="mb-4">Customers</h4>
      </el-col>
      <el-col class="cards" :xs="24" :sm="10" :md="7" :lg="7">
        <CustomerKpi
          @click="fetchApiData('customers')"
          :class="[selectedApi === 'customers' ? 'active-card' : '']"
          title="All customers"
          :percentage="customers.percentage"
          :value="customers.value"
          :icon="CustomerIcon"
        />
      </el-col>

      <el-col class="cards ms-md-4" :xs="24" :sm="10" :md="7" :lg="7">
        <CustomerKpi
          @click="fetchApiData('order')"
          :class="[selectedApi === 'order' ? 'active-card' : '']"
          title="Latest order"
          :percentage="latestOrder.percentage"
          :value="latestOrder.value"
          :icon="OrderIcon"
        />
      </el-col>

      <el-col class="cards ms-md-4" :xs="24" :sm="10" :md="7" :lg="7">
        <CustomerKpi
          @click="fetchApiData('complaints')"
          :class="[selectedApi === 'complaints' ? 'active-card' : '']"
          title="Complaints"
          :percentage="complaints.percentage"
          :value="complaints.value"
          :icon="ComplaintIcon"
        />
      </el-col>
      <el-col>
        <h4 class="mt-4 mb-4">{{ tableName }}</h4>

        <div class="table-area">
          <Table
            style="border-radius: 20px"
            tableSubHeading=""
            viewButtonVisibility="true"
            :addButtonVisibility="false"
            :tableConfig="tableConfig"
            :tableData="listData"
            :tableQuery="listQuery"
            @pagination="handlePagination()"
            @edit="handleEdit($event)"
            @delete="handleDelete($event)"
            @view="handleView"
            :tableCheckBoxVisibility="true"
            @multipleSelection="handleMultipleSelection($event)"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import Table from "@/components/tables/Table.vue";
import CustomerKpi from "@/components/cards/CustomerKpi.vue";
import CustomerIcon from "@/assets/svg/customer.svg";
import OrderIcon from "@/assets/svg/order.svg";
import ComplaintIcon from "@/assets/svg/complaint.svg";
import { ref } from "vue";

const router=useRouter()

const customers = ref({
  value: "+500",
  percentage: "11.2%",
  icon: {
    component: "ni ni-money-coins",
    background: "bg-gradient-primary",
    shape: "",
  },
});

const latestOrder = ref({
  value: "+100",
  percentage: "11.2%",
  icon: {
    component: "ni ni-world",
    background: "bg-gradient-danger",
    shape: "",
  },
});

const complaints = ref({
  value: "+3,462",
  percentage: "11.2%",
  icon: {
    component: "ni ni-paper-diploma",
    background: "bg-gradient-success",
    shape: "",
  },
});

const tableName = ref("Customers");

// Table Data

let tableConfig = reactive([
  {
    label: "Id",
    prop: "id",
    width: "",
    sortable: "",
    className: "redFont",
  },
  {
    label: "Image",
    prop: "file_list",
    width: "",
    sortable: "",
    className: "redFont",
  },
  {
    label: "Name",
    prop: "name",
    width: "",
    sortable: "sortable",
    className: "redFont",
  },
  {
    label: "Price",
    prop: "price",
    width: "",
    sortable: "sortable",
    className: "redFont",
  },
  {
    label: "Stock Qty",
    prop: "stock_qty",
    width: "",
    sortable: "sortable",
    className: "blueFont",
  },
  {
    label: "Min. Order",
    prop: "min_order",
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
]);

// let listData = [
//   {
//     price: "GHS 100",
//     stock_qty: "500",
//     min_order: "2",
//     discount: "20",
//     offer_date: "02/09/2023",
//     name: "Amm",
//     address: "aaa",
//     file_list: [
//       {
//         name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
//         url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
//       },
//     ],
//   },
//   {
//     price: "GHS 100",
//     stock_qty: "500",
//     min_order: "2",
//     discount: "20",
//     offer_date: "02/09/2023",
//     name: "Amm",
//     address: "aaa",
//     file_list: [
//       {
//         name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
//         url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
//       },
//     ],
//   },
//   {
//     price: "GHS 100",
//     stock_qty: "500",
//     min_order: "2",
//     discount: "20",
//     offer_date: "02/09/2023",
//     name: "Amm",
//     address: "aaa",
//     file_list: [
//       {
//         name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
//         url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
//       },
//     ],
//   },
//   {
//     price: "GHS 100",
//     stock_qty: "500",
//     min_order: "2",
//     discount: "20",
//     offer_date: "02/09/2023",
//     name: "Amm",
//     address: "aaa",
//     file_list: [
//       {
//         name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
//         url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
//       },
//     ],
//   },
//   {
//     price: "GHS 100",
//     stock_qty: "500",
//     min_order: "2",
//     discount: "20",
//     offer_date: "02/09/2023",
//     name: "Amm",
//     address: "aaa",
//     file_list: [
//       {
//         name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
//         url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
//       },
//     ],
//   },
//   {
//     price: "GHS 100",
//     stock_qty: "500",
//     min_order: "2",
//     discount: "20",
//     offer_date: "02/09/2023",
//     name: "Amm",
//     address: "aaa",
//     file_list: [
//       {
//         name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
//         url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
//       },
//     ],
//   },
//   {
//     price: "GHS 100",
//     stock_qty: "500",
//     min_order: "2",
//     discount: "20",
//     offer_date: "02/09/2023",
//     name: "Amm",
//     address: "aaa",
//     file_list: [
//       {
//         name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
//         url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
//       },
//     ],
//   },
//   {
//     price: "GHS 100",
//     stock_qty: "500",
//     min_order: "2",
//     discount: "20",
//     offer_date: "02/09/2023",
//     name: "Amm",
//     address: "aaa",
//     file_list: [
//       {
//         name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
//         url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
//       },
//     ],
//   },
//   {
//     price: "GHS 100",
//     stock_qty: "500",
//     min_order: "2",
//     discount: "20",
//     offer_date: "02/09/2023",
//     name: "Amm",
//     address: "aaa",
//     file_list: [
//       {
//         name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
//         url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
//       },
//     ],
//   },
//   {
//     price: "GHS 100",
//     stock_qty: "500",
//     min_order: "2",
//     discount: "20",
//     offer_date: "02/09/2023",
//     name: "Amm",
//     address: "aaa",
//     file_list: [
//       {
//         name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
//         url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
//       },
//     ],
//   },

// ];

let listQuery = {
  page: 1,
  limit: 10,
  search: "",
  searchJoin: "or",
  orderBy: "created_at",
  sortedBy: "desc",
};

const apiDataCache = ref({});
const selectedApi = ref(null); // Track the selected API

//fetch the table data
const fetchApiData = (apiName) => {
  selectedApi.value = apiName;
  if (apiName === "customers") {
    tableName.value = "All customers";
  } else if (apiName === "order") {
    tableName.value = "Latest order";
  } else if (apiName === "complaints") {
    tableName.value = "Complaints";
  }

  if (apiDataCache.value[apiName]) {
    return; // Data is cached; no need to make the API request again
  }

  axios
    .get(`/api/${apiName}`)
    .then((response) => {
      apiDataCache.value[apiName] = response.data; // Store the response in the cache
    })
    .catch((error) => {
      console.error(`API request error for ${apiName}`, error);
    });

  // Set the selected API
  selectedApi.value = apiName;
};

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

definePageMeta({
  layout: "default",
});

//here store your table data
const listData = computed(() => {
  // You can access cached data based on the selected API
  return (
    apiDataCache.value[selectedApi.value] || [
      {
        id: 101,
        price: "GHS 100",
        stock_qty: "500",
        min_order: "2",
        discount: "20",
        offer_date: "02/09/2023",
        name: "Amm",
        address: "aaa",
        file_list: [
          {
            name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
            url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          },
        ],
      },
      {
        id: 101,
        price: "GHS 100",
        stock_qty: "500",
        min_order: "2",
        discount: "20",
        offer_date: "02/09/2023",
        name: "Amm",
        address: "aaa",
        file_list: [
          {
            name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
            url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          },
        ],
      },
      {
        id: 101,
        price: "GHS 100",
        stock_qty: "500",
        min_order: "2",
        discount: "20",
        offer_date: "02/09/2023",
        name: "Amm",
        address: "aaa",
        file_list: [
          {
            name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
            url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          },
        ],
      },
      {
        id: 101,
        price: "GHS 100",
        stock_qty: "500",
        min_order: "2",
        discount: "20",
        offer_date: "02/09/2023",
        name: "Amm",
        address: "aaa",
        file_list: [
          {
            name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
            url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          },
        ],
      },
      {
        id: 101,
        price: "GHS 100",
        stock_qty: "500",
        min_order: "2",
        discount: "20",
        offer_date: "02/09/2023",
        name: "Amm",
        address: "aaa",
        file_list: [
          {
            name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
            url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          },
        ],
      },
      {
        id: 101,
        price: "GHS 100",
        stock_qty: "500",
        min_order: "2",
        discount: "20",
        offer_date: "02/09/2023",
        name: "Amm",
        address: "aaa",
        file_list: [
          {
            name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
            url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          },
        ],
      },
      {
        id: 101,
        price: "GHS 100",
        stock_qty: "500",
        min_order: "2",
        discount: "20",
        offer_date: "02/09/2023",
        name: "Amm",
        address: "aaa",
        file_list: [
          {
            name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
            url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          },
        ],
      },
      {
        id: 101,
        price: "GHS 100",
        stock_qty: "500",
        min_order: "2",
        discount: "20",
        offer_date: "02/09/2023",
        name: "Amm",
        address: "aaa",
        file_list: [
          {
            name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
            url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          },
        ],
      },
      {
        id: 101,
        price: "GHS 100",
        stock_qty: "500",
        min_order: "2",
        discount: "20",
        offer_date: "02/09/2023",
        name: "Amm",
        address: "aaa",
        file_list: [
          {
            name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
            url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          },
        ],
      },
      {
        id: 101,
        price: "GHS 100",
        stock_qty: "500",
        min_order: "2",
        discount: "20",
        offer_date: "02/09/2023",
        name: "Amm",
        address: "aaa",
        file_list: [
          {
            name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
            url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          },
        ],
      },
    ]
  );
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
