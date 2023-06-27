<template>
  <div >

    <el-card class="py-4 container-fluid">
      <div class="table-component">
        <!-- Top heading  -->
        <el-row class="table-top-header">
          <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
            <h5>{{tableHeading}}</h5>
            <p>{{tableSubHeading}}</p>
          </el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
           <el-button v-if="addButtonVisibility" type="primary" @click="handleAdd"><icons-plus/> &nbsp; {{ addButtonText }}</el-button>
          </el-col>
        </el-row>
  
        <!-- Heading  -->
        <el-row class="table-top">
          <el-col :sm="3" :md="3" :lg="3" :xl="3">
            <!-- <el-pagination background layout="sizes" :total="1000" /> -->
          </el-col>
          <el-col :sm="15" :md="15" :lg="15" :xl="15"> &nbsp; </el-col>
          <el-col :sm="6" :md="6" :lg="6" :xl="6">
            <el-input
              v-if="tableSearchVisibility"
              v-model="search"
              placeholder="Search..."
            />
          </el-col>
        </el-row>
        <br />
  
        <!-- Table -->
        <el-table 
          :data="tableDataItems"
          @selection-change="handleMultipleSelectionChange"
        >
          
          <!-- CHECKBOX  -->
           <el-table-column
            v-if="tableCheckBoxVisibility"
            type="selection"
            :selectable="isTableCheckBoxVisibilityRowWise"
          >
          </el-table-column>
  
  
          <el-table-column
            v-for="(config, key) in props.tableConfig"
            :label="config.label"
            :prop="config.prop"
            :width="config.width"
            :sortable="config.sortable ? config.sortable : false"
            :class-name="config.className"
            :key="key"
          >
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <span style="margin-left: 10px">{{
                  scope.row[config.prop]
                }}</span>
              </div>
            </template>
          </el-table-column>
          
  
          <!-- ACTIONS -->
          <el-table-column v-if="actionVisibility" label="Actions">
            <template #default="scope">
              <el-button
                v-if="viewButtonVisibility"
                size="small"
                type="default"
                @click="handleView(scope.row)"
                ><i class="fa fa-eye" aria-hidden="true"></i></el-button
              >
              <el-button
                v-if="editButtonVisibility"
                size="small"
                type="default"
                @click="handleEdit(scope.row)"
                ><i class="fa fa-pencil-square-o" aria-hidden="true"></i></el-button
              >
              <el-button
                v-if="deleteButtonVisibility"
                size="small"
                type="default"
                @click="handleDelete(scope.$index, scope.row)"
                ><i class="fa fa-trash-o" aria-hidden="true"></i></el-button
              >
            </template>
          </el-table-column>
        </el-table>
  
        <!-- // PAGINATION -->
        <el-pagination
          v-if="tableDataTotal"
          :total="tableDataTotal"
          :page-size="props.tableQuery.limit"
          v-model:current-page="props.tableQuery.page"
          layout="prev, pager, next"
          @size-change="handlePagination()"
          @current-change="handlePagination()"
          background
        />
      </div>
    </el-card>
  </div>
</template>


<script setup >
import { Search } from "@element-plus/icons-vue";

let emit = defineEmits();

let multipleSelection = reactive([])

let search = ref("");



let props = defineProps({

  tableConfig: {},
  tableData: {},
  tableQuery: {},


  tableHeading: {
    type: String,
    default: ""
  },


  tableSubHeading: {
    type: String,
    default: ""
  },

  addButtonVisibility: {
    type: Boolean,
    default: true,
  },

  addButtonText: {
    type: String,
    default: "Add"
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

  tableCheckBoxVisibility: {
    type: Boolean,
    default: false,
  },

  tableSearchVisibility: {
    type: Boolean,
    default: true,
  }

});

let tableDataItems = computed(() => {
  return props.tableData ? props.tableData : [];
});

let tableDataTotal = computed(() => {
  return props.tableData ? props.tableData.length : 0;
});




watch(search, (currentValue, oldValue) => {
    handleSearch();
});

function handleSearch(){
  emit('search',search)
}

function handlePagination() {
  emit("pagination");
}

function handleView() {
  emit("view");
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