<template>
  <el-card>
    <el-skeleton :throttle="100" :loading="tableLoadingStatus" :rows="10" animated/>
    <div v-show="!tableLoadingStatus" class="table-component">
      <!-- Top heading  -->
      <el-row class="table-top-header">
        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
          <h5>{{ tableHeading }}</h5>
          <p>{{ tableSubHeading }}</p>
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
          <el-input
            v-if="tableSearchVisibility"
            v-model="input3"
            placeholder="Search..."
          />
        </el-col>
      </el-row>


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
            <!-- FOR IMAGE  -->
            <span v-if="typeof scope.row[config.prop] === 'object'">
              <span
                v-for="(item, index) in scope.row[config.prop]"
                :key="index"
              >
                <span
                  v-if="
                    scope.row[config.prop] &&
                    scope.row[config.prop].length &&
                    'url' in scope.row[config.prop][0]
                  "
                >
                  <span v-if="scope.row[config.prop][0].url">
                    <span
                      v-for="(item, index) in scope.row[config.prop]"
                      :key="index"
                    >
                      <el-image
                          style="width: 35px; height: 35px; border-radius:10px"
                          :src="item.url"
                          :preview-src-list="[item.url]"
                        >
                        </el-image>
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
        <el-table-column v-if="actionVisibility" label="Actions">
          <template #default="scope">
            <span
              class="table-icon"
              v-if="viewButtonVisibility"
              @click="handleView(scope.row)"
              ><i class="fa fa-eye" aria-hidden="true"></i
            ></span>
            <span 
              class="table-icon"
              v-if="editButtonVisibility"
              @click="handleEdit(scope.row)"
              ><i class="fa fa-pencil-square-o" aria-hidden="true"></i
            ></span>
            <span
              class="table-icon"
              v-if="deleteButtonVisibility"
              @click="handleDelete(scope.$index, scope.row)"
              ><i class="fa fa-trash-o" aria-hidden="true"></i
            ></span>
            <el-dropdown class="table-icon" v-if="moreActionsVisibility">
              <span class="el-dropdown-link">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item v-if="resetPasswordVisibility">Reset password</el-dropdown-item>
                  <el-dropdown-item v-if="roleAndPermissionVisibility">Assign roles & permissions</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
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
</template>


<script setup >

let emit = defineEmits();

let multipleSelection = reactive([]);

let props = defineProps({
  tableConfig: {},
  tableData: {},
  tableQuery: {},

  tableHeading: {
    type: String,
    default: "",
  },

  tableLoadingStatus: {
      type: Boolean,
      default: false,
  },
  
  tableSubHeading: {
    type: String,
    default: "",
  },

  addButtonVisibility: {
    type: Boolean,
    default: true,
  },

  addButtonText: {
    type: String,
    default: "Add",
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
    default: true,
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
});

let tableDataItems = computed(() => {
  return props.tableData ? props.tableData : [];
});

let tableDataTotal = computed(() => {
  return props.tableData ? props.tableData.length : 0;
});

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