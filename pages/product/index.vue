<template>
    <div class="container-area">
        <el-row class="table-top">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <h4 class="heading">
                <span>List of Products </span>
                </h4>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <div class="search-wrapper">
                    &nbsp;
                </div>
            </el-col>
            <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4">
                <div class="btn-wrapper" style="display:flex">
                       <!-- <el-input placeholder="Search..."/> &nbsp; -->
                <el-button type="button primary-add-btn"  @click="handleCreate()"><span class="text-white">+ Add Product</span> </el-button>
                </div>
            </el-col>
        </el-row>

        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="Cylinders(1)" name="first">
            <div class="table-area">
                <Table
                    tableHeading="Cylinders"
                    tableSubHeading=""
                    :addButtonVisibility="false"
                    addButtonText="Add Product"
                    :tableConfig="tableConfig"
                    :tableData="items"
                    :tableQuery="listQuery"
                    @pagination="handlePagination()"
                    @edit="handleEdit($event)"
                    @delete="handleDelete($event)"
                    :tableCheckBoxVisibility="true"
                    @multipleSelection="handleMultipleSelection($event)"
                    @search = "handleSearch($event)"
                />
            </div>
          </el-tab-pane>
          <el-tab-pane label="Accessories(2)" name="second">
            <div class="table-area">
                <Table
                    tableHeading="Accessories"
                    tableSubHeading=""
                    :addButtonVisibility="false"
                    addButtonText="Add Product"
                    :tableConfig="tableConfig"
                    :tableData="items"
                    :tableQuery="listQuery"
                    @pagination="handlePagination()"
                    @edit="handleEdit($event)"
                    @delete="handleDelete($event)"
                    :tableCheckBoxVisibility="true"
                    @multipleSelection="handleMultipleSelection($event)"
                />
            </div>
          </el-tab-pane>
          
        </el-tabs>
      
  </div>
</template>

<script setup>
import Table from "@/components/tables/Table.vue"
import { useRouter } from 'vue-router'
const router = useRouter()
const activeName = ref('first')

let tableConfig = reactive(
   [
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
          className: "blueFont",
        },
        {
          label: "Address",
          prop: "address",
          width: "",
          sortable: "",
          className: "blueFont",
        },
    ],
)

let listData = [
  {
    price: "1",
    name: "Amm",
    address: "aaa",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "2",
    name: "Baa",
    address: "bb",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "3",
    name: "Caa",
    address: "cc",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "4",
    name: "Tom",
    address: "dd",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "5",
    name: "Daa",
    address: "ee",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "6",
    name: "Tom",
    address: "ff",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "7",
    name: "Tom",
    address: "gg",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "8",
    name: "Amm",
    address: "aaa",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "9",
    name: "Baa",
    address: "bb",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "10",
    name: "Caa",
    address: "cc",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
];

let items= reactive([
{
    price: "1",
    name: "Amm",
    address: "aaa",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "2",
    name: "Baa",
    address: "bb",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "3",
    name: "Caa",
    address: "cc",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "4",
    name: "Tom",
    address: "dd",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "5",
    name: "Daa",
    address: "ee",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "6",
    name: "Tom",
    address: "ff",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "7",
    name: "Tom",
    address: "gg",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "8",
    name: "Amm",
    address: "aaa",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "9",
    name: "Baa",
    address: "bb",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
  {
    price: "10",
    name: "Caa",
    address: "cc",
    file_list: [{
      name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }],
  },
])

let  listQuery = {
        page: 1,
        limit: 10,
        search: "",
        searchJoin: "or",
        orderBy: "created_at",
        sortedBy: "desc",
}


function handleSearch(data){
  const filterData = listData.filter((e)=>{
    if(e.address.includes(data.value.toLowerCase()) || e.price.includes(data.value) || e.name.includes(data.value.toLowerCase())){
      return e
    }
  });

  if(filterData.length == 0){
    items=listData;
  }

  items = filterData;

  console.log(items)
}

// pagination 
function handlePagination(data) {
  getList();
}

// add 
function handleCreate() {
  console.log('add button')
  let r = "add"
  router.push(`product/${r}`)
}

// edit 
function handleEdit(data) {
  console.log(data)
  let r = "edit"
  router.push(`product/${r}-${data.price}`)
}

// delete 
function handleDelete(data) {
  console.log(data)
}

// get list 
function getList() {
  // API CALL MADE
}

function handleMultipleSelection(data) {
  console.log(data)
}



definePageMeta({
  layout: "default",
});
</script>