<template>
  <div class="container-area">
    <h4 class="page_heading">Manage admins & roles</h4>
    <div class="table_header">
      <el-button v-if="activeName == 'first'" type="button" class="btn_add" @click="handleCreateAdmin()"><span
          class="text-white"><i>+</i>Add Admin</span>
      </el-button>
      <el-button v-if="activeName == 'second'" type="button" class="btn_add" @click="handleCreateRole()"><span
          class="text-white"><i>+</i>Add Role</span>
      </el-button>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Admins" name="first">
          <div class="table-area">
            <Table tableHeading="List Admin" 
              :tableConfig="adminTableConfig" 
              :tableData="showAdminListData" 
              :tableQuery="listQuery"
              :moreActionsVisibility="true" 
              :tableCheckBoxVisibility="true" 
              @pagination="handlePagination()" 
              @edit="handleEditAdmin($event)" 
              @delete="handleDelete($event)"
              @multipleSelection="handleMultipleSelection($event)"
              @search="handleAdminSearch($event)" 
              @rolePermission="handleAssignRoleAndPermission($event)"
              @resetPassword="handleResetPassword($event)"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="Roles" name="second">
          <div class="table-area">
            <Table tableHeading="List Role" 
              :tableConfig="roleTableConfig" 
              :tableData="showRoleListData" 
              :tableQuery="listQuery"
              :tableCheckBoxVisibility="true" 
              @pagination="handlePagination()" 
              @edit="handleEditRole($event)" 
              @delete="handleDelete($event)"
              @multipleSelection="handleMultipleSelection($event)"
              @search="hanldeRoleSearch($event)" 
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


let roleListData = [
  {
    serial_number: 1,
    role: "Distributor",
  },
  {
    serial_number: 2,
    role: "Delivery agents"
  },

];
let adminTableData = [
  {
    id: "01",
    admin_name: "Yaw Graham",
    phone_number: "0224465884",
    user_name: "yawgraham@gmail.com",
    assigned_role: "N/A"
  },
  {
    id: "02",
    admin_name: "Kiran Kumar",
    phone_number: "02243546584",
    user_name: "kirankumar@gmail.com",
    assigned_role: "N/A"
  },

];
const showRoleListData = ref(roleListData);
const showAdminListData = ref(adminTableData);


let roleTableConfig = reactive([
  {
    label: "Role Name",
    prop: "role",
    width: "900",
    sortable: true,
    className: "redFont"
  },

])

let adminTableConfig = reactive([
  {
    label: "ID",
    prop: "id",
    width: "100",
    sortable: true,
    className: "redFont"
  },
  {
    label: "Name",
    prop: "admin_name",
    width: "",
    sortable: true,
    className: "redFont"
  },
  {
    label: "Phone #",
    prop: "phone_number",
    width: "",
    sortable: true,
    className: "redFont"
  },
  {
    label: "User Name",
    prop: "user_name",
    width: "",
    sortable: true,
    className: "redFont"
  },
  {
    label: "Role",
    prop: "assigned_role",
    width: "",
    sortable: true,
    className: "redFont"
  },

]);

let listQuery = {
  page: 1,
  limit: 10,
  search: "",
  searchJoin: "or",
  orderBy: "created_at",
  sortedBy: "desc",
};

// reset password 
function handleResetPassword() {
  router.push("/user")
}

// assign-rol-admin
function handleAssignRoleAndPermission(data) {
  router.adminName=data.admin_name
  navigateTo("/onboarding/assign-role-permission");
}

// admin search
function handleAdminSearch(data) {
  const filter = adminTableData.filter((e) => {
    if (e.admin_name.toLowerCase().includes(data.value.toLowerCase()) || e.phone_number.toLowerCase().includes(data.value.toLowerCase()) || e.user_name.toLowerCase().includes(data.value.toLowerCase()) || e.assigned_role.toLowerCase().includes(data.value.toLowerCase())) {
      return e
    }
  })
  if (filter.length === 0) {
    showAdminListData.value = adminTableData;
  } else {
    showAdminListData.value = filter;
  }
}

// role search
function hanldeRoleSearch(data) {
  const filter = roleListData.filter((e) => {
    if (e.role.toLowerCase().includes(data.value.toLowerCase())) {
      return e
    }
  })
  if (filter.length === 0) {
    showRoleListData.value = roleListData;
  } else {
    showRoleListData.value = filter;
  }
}

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

// edit role
function handleEditAdmin(data) {
  handleCreateAdmin()
}
// edit role
function handleEditRole(data) {
  handleCreateRole()
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

onMounted(() => {
  const route = useRouter();
  if(route.previousRoute && route.previousRoute == 'role') {
    activeName.value = 'second';
    route.previousRoute = "";
  }else{
    activeName.value = "first"
  }
})

definePageMeta({
  layout: "default",
});
</script>