<template>
  <el-card>
    <el-skeleton :throttle="100" :loading="tableLoadingStatus" :rows="10" animated />
    <div v-show="!tableLoadingStatus" class="table-component">

      <!-- Active this for Filter Table Only -->
      <!-- Please remove the class "reverse_filter" for swapping the search & Filter -->
      <!-- <el-row :class="headerRow ?   'table_filter' : 'table_filter reverse_filter'"> -->
      <el-row :class="headingRowReverse  ? 'table_filter' : 'table_filter reverse_filter'">
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <input class="filter_search" v-if="tableSearchVisibility" v-model="search" placeholder="Search..." />
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div style="margin-right:20px">
            <h5 v-if="tableHeading">{{ tableHeading }}</h5>
            <p v-if="tableSubHeading">{{ tableSubHeading }}</p>
          </div>
          <div class="filter_right">
            <ul>
              <li>
                <button class="btn_filter" v-if="export" @click="handleExport"><i class="exp_icon ri-upload-2-line"></i>Export</button>
              </li>
              <li>
                <div class="dropdown" v-if="filter">
                  <button class="btn_filter dropdown-toggle" type="button" id="upcomingHolidayDrop" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Filter
                  </button>
                  <div class="dropdown-menu" aria-labelledby="upcomingHolidayDrop">
                    <Filter/>
                  </div>
                </div>
              </li>
              <li>
                <button v-if="refresh"><i class="sync_icon ri-loop-right-fill"></i></button>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>

      <!-- Top heading  -->
      <!-- <el-row class="table-top-header">
        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
          <h5>{{ tableHeading }}</h5>
          <p>{{ tableSubHeading }}</p>
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
          <el-input v-if="tableSearchVisibility" v-model="search" placeholder="Search..." />
        </el-col>
      </el-row> -->


      <!-- Table -->
      <el-table class="theme_table" :data="tableDataItems" @selection-change="handleMultipleSelectionChange">
        <!-- CHECKBOX  -->
        <el-table-column v-if="tableCheckBoxVisibility" type="selection" :selectable="isTableCheckBoxVisibilityRowWise">
        </el-table-column>

        <el-table-column v-for="(config, key) in props.tableConfig" :label="config.label" :prop="config.prop"
          :width="config.width" :sortable="config.sortable ? config.sortable : false" :class-name="config.className"
          :key="key">
          <template #default="scope">
            <!-- FOR IMAGE  -->
            <span v-if="typeof scope.row[config.prop] === 'object'">
              <span v-for="(item, index) in scope.row[config.prop]" :key="index">
                <!-- for image and name -->
                <span v-if="scope.row[config.prop] &&
                  scope.row[config.prop].length &&
                  'url' in scope.row[config.prop][0]
                  ">
                  <span v-if="scope.row[config.prop][0].url">
                    <span v-for="(item, index) in scope.row[config.prop]" :key="index">
                      <el-image :src="item.url"
                        :preview-src-list="[item.url]" :class="item.content ? 'circle_img' : 'square_img'">
                      </el-image>
                      <span>{{ item?.content ? item.content : "" }}</span>
                    </span>
                  </span>
                </span>
                <!-- for active and inactive status -->
                <span v-if="scope.row[config.prop] &&
                  scope.row[config.prop].length &&
                  'status' in scope.row[config.prop][0]
                  ">
                  <span v-if="scope.row[config.prop][0].content">
                    <span v-for="(item, index) in scope.row[config.prop]" :key="index">
                      <span class="act_status"><i :class="item.status ? 'fa fa-circle text-success' : 'fa fa-circle text-warning'"
                          aria-hidden="true"></i>
                      </span>
                      <span>{{ item?.content ? item.content : "" }}</span>
                    </span>
                  </span>
                </span>
                <!-- customer order status delivery pending -->
                <span v-if="scope.row[config.prop] &&
                  scope.row[config.prop].length &&
                  'order_status' in scope.row[config.prop][0]
                  ">
                  <span v-if="scope.row[config.prop][0]">
                    <span v-for="(item, index) in scope.row[config.prop]" :key="index" class="order_status">
                      <span v-if="item.order_status" class="text-success">Delivered 
                        <p class="del_date">on 2020/12/16</p>
                      </span>
                      <span v-if="!item.order_status" class="text-warning">Pending</span>
                      <!-- <span>{{ item?.content ? item.content : "" }}</span>   -->
                    </span>
                  </span>
                </span>
              </span>
            </span>
 
            <span v-else>
              {{ scope.row[config.prop] }}
            </span>
          </template>
        </el-table-column>

        <!-- ACTIONS -->
        <el-table-column v-if="actionVisibility" width="150" label="Actions">
          <template #default="scope">
            <span class="table-icon" v-if="viewButtonVisibility" @click="handleView(scope.row)">
              <i class="fa fa-eye" aria-hidden="true"></i>
              </span>
            <span class="table-icon edit_btn" v-if="editButtonVisibility" @click="handleEdit(scope.row)">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </span>
            <span class="table-icon delete_btn" v-if="deleteButtonVisibility"
              @click="handleDelete(scope.$index, scope.row)">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </span>
            <!-- view receipt  -->
            <span class="table-icon view_rec" v-if="downloadLinkContent"
              @click="handleViewReceipt(scope.$index, scope.row)">
              {{ downloadLinkContent }}
            </span>
            <!-- download icon -->
            <span class="table-icon dnld_btn" v-if="downloadVisibility"
              @click="handleDownload(scope.$index, scope.row)">
              <i class="ri-download-2-line"></i>
            </span>
            <el-dropdown class="table-icon more_btn" v-if="moreActionsVisibility">
              <span class="el-dropdown-link">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item v-if="resetPasswordVisibility" @click="handleResetPassword(scope.row)">Reset
                    password</el-dropdown-item>
                  <el-dropdown-item v-if="roleAndPermissionVisibility"
                    @click="handleAssignRolesAndPermissions(scope.row)">Assign roles & permissions</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
        </el-table-column>

      </el-table>

      <!-- // PAGINATION -->
      <el-pagination v-if="tableDataTotal" :total="tableDataTotal" :page-size="props.tableQuery.limit"
        v-model:current-page="props.tableQuery.page" layout="prev, pager, next" @size-change="handlePagination()"
        @current-change="handlePagination()" background />
    </div>
  </el-card>
</template>


<script setup >
import Filter from "./Filter.vue";
import { downloadCSVFromJson } from "@/composables/useDownloadCsv"

let emit = defineEmits();

let multipleSelection = reactive([]);

let search = ref("");


onMounted(()=>{
  // do something
})


watch(search, () => {
  handleSearch();
});

function handleSearch() {
  emit("search", search)
}


function handleExport(){
  downloadCSVFromJson("name.csv",props.tableData)
}

let props = defineProps({
  tableConfig: {},
  tableData: {},
  tableQuery: {},

  tableHeading: {
    type: String,
    default: "",
  },

  headingRowReverse:{
    type : Boolean,
    required: false,
    default : false
  },
  tableLoadingStatus: {
    type: Boolean,
    default: false,
  },

  tableSubHeading: {
    type: String,
    default: "",
  },


  tableSearchVisibility: {
    type: Boolean,
    default: true,
  },

  actionVisibility: {
    type: Boolean,
    default: true,
  },

  viewButtonVisibility: {
    type: Boolean,
    default: false,
  },

  editButtonVisibility: {
    type: Boolean,
    default: true,
  },

  deleteButtonVisibility: {
    type: Boolean,
    default: true,
  },

  moreActionsVisibility: {
    type: Boolean,
    default: false,
  },
  resetPasswordVisibility: {
    type: Boolean,
    default: true,
  },
  roleAndPermissionVisibility: {
    type: Boolean,
    default: true,
  },

  tableCheckBoxVisibility: {
    type: Boolean,
    default: false,
  },

  tableSearchVisibility: {
    type: Boolean,
    default: true,
  },
  export: {
    type: Boolean,
    default: false
  },
  refresh: {
    type: Boolean,
    default: false
  },
  filter: {
    type: Boolean,
    default: false
  },
  downloadVisibility: {
    type: Boolean,
    default: false
  },
  downloadLinkContent: {
    type: String,
    required: false,
    default: ""
  }
});

let tableDataItems = computed(() => {
  return props.tableData ? props.tableData : [];
});

let tableDataTotal = computed(() => {
  return props.tableData ? props.tableData.length : 0;
});

function handleDownload(index,row){
  emit("handleDownload", row)
}
function handleViewReceipt(row){
  emit("handleViewReceipt",row)
}
function handleResetPassword(row) {
  emit("resetPassword", row)
}

function handleAssignRolesAndPermissions(row) {
  emit("rolePermission", row)
}

function handlePagination() {
  emit("pagination");
}

function handleView(data) {
  emit("view",data);
}

function handleAdd() {
  emit("add");
}
function handleEdit(row) {
  emit("edit", row);
}

function handleDelete(row) {
  emit("delete", row);
}

function handleMultipleSelectionChange(val) {
  multipleSelection = val;
  emit("multipleSelection", multipleSelection);
}
</script>

<style scoped lang="scss">
</style>