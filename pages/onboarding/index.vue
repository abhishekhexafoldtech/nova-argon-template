<template>
    <div class="container-area">
      <h4 class="page_heading">Manage admins & roles</h4>
      <div class="table_header">
        <el-button 
          v-if="activeName == 'first'"
          type="button" 
          class="btn_add" 
          @click="handleCreateAdmin()"><span class="text-white"><i>+</i>Add Admin</span>
        </el-button>
        <el-button 
          v-if="activeName == 'second'"
          type="button" 
          class="btn_add" 
          @click="handleCreateRole()"><span class="text-white"><i>+</i>Add Role</span>
        </el-button>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="Admins" name="first">
            <div class="table-area">
              <Table 
                tableHeading="List Admin" 
                tableSubHeading="" 
                :moreActionsVisibility="true" 
                :addButtonVisibility="false" 
                :tableConfig="tableConfig" 
                :tableData="listData" 
                :tableQuery="listQuery" 
                @pagination="handlePagination()"
                @edit="handleEdit($event)" 
                @delete="handleDelete($event)" 
                :tableCheckBoxVisibility="true"
                @multipleSelection="handleMultipleSelection($event)" 
              />
            </div>
          </el-tab-pane>
          <el-tab-pane label="Roles" name="second">
            <div class="table-area">
              <Table 
                tableHeading="List Role" 
                tableSubHeading="" 
                :addButtonVisibility="false" 
                :tableConfig="tableConfig" 
                :tableData="listData" 
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
    </div>
  </template>
  
  <script setup>
  import Table from "@/components/tables/Table.vue";
  import useToast from "@/composables/useToast";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const activeName = ref("first");
  
  let tableConfig = reactive([
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
  ]);
  
  let listData = [
    {
      price: "1",
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
      price: "2",
      name: "Baa",
      address: "bb",
      file_list: [
        {
          name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
    },
    {
      price: "3",
      name: "Caa",
      address: "cc",
      file_list: [
        {
          name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
    },
    {
      price: "4",
      name: "Tom",
      address: "dd",
      file_list: [
        {
          name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
    },
    {
      price: "5",
      name: "Daa",
      address: "ee",
      file_list: [
        {
          name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
    },
    {
      price: "6",
      name: "Tom",
      address: "ff",
      file_list: [
        {
          name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
    },
    {
      price: "7",
      name: "Tom",
      address: "gg",
      file_list: [
        {
          name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
    },
    {
      price: "8",
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
      price: "9",
      name: "Baa",
      address: "bb",
      file_list: [
        {
          name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
    },
    {
      price: "10",
      name: "Caa",
      address: "cc",
      file_list: [
        {
          name: "f1c8b75e3e535a44e93444e47fe2f77e.png",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
    },
  ];
  
  let listQuery = {
    page: 1,
    limit: 10,
    search: "",
    searchJoin: "or",
    orderBy: "created_at",
    sortedBy: "desc",
  };
  
  // pagination
  function handlePagination(data) {
    getList();
  }
  
  // add Admin
  function handleCreateAdmin() {
    let r = "add-admin";
    router.push(`onboarding/${r}`);
  }

  // add Role
  function handleCreateRole() {
    let r = "add-role";
    router.push(`onboarding/${r}`);
  }
  
  // edit
  function handleEdit(data) {
    console.log(data);
    let r = "edit";
    router.push(`product/${r}-${data.price}`);
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
  </script>