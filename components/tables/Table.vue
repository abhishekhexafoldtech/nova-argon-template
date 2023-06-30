<template>
  <el-card>
    <div class="table-component">
      <!-- Top heading  -->
      <el-row class="table-top-header">
        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
          <h5>{{ tableHeading }}</h5>
          <p>{{ tableSubHeading }}</p>
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
          <el-button
            v-if="addButtonVisibility"
            type="primary"
            @click="handleAdd"
            >+ {{ addButtonText }}</el-button
          >
        </el-col>
      </el-row>

      <!-- Heading  -->
      <!-- <el-row class="heading-table-top">
        <el-col :sm="3" :md="3" :lg="3" :xl="3">
          <el-pagination background layout="sizes" :total="1000" />
        </el-col>
        <el-col :sm="17" :md="17" :lg="17" :xl="17"> &nbsp; </el-col>
        <el-col :sm="4" :md="4" :lg="4" :xl="4">
          <br>
          <el-input
            v-if="tableSearchVisibility"
            v-model="input3"
            placeholder="Search..."
          />
        </el-col>
      </el-row>
      <br /> -->

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
                      <!-- <el-image class="medium" :src="item.url"> </el-image> -->
                      <el-avatar shape="square" :size="50" :src="item.url" />
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
            <el-button
              v-if="viewButtonVisibility"
              size="small"
              type="default"
              @click="handleView(scope.row)"
              ><i class="fa fa-eye" aria-hidden="true"></i
            ></el-button>
            <el-button
              v-if="editButtonVisibility"
              size="small"
              type="default"
              @click="handleEdit(scope.row)"
              ><i class="fa fa-pencil-square-o" aria-hidden="true"></i
            ></el-button>
            <el-button
              v-if="deleteButtonVisibility"
              size="small"
              type="default"
              @click="handleDelete(scope.$index, scope.row)"
              ><i class="fa fa-trash-o" aria-hidden="true"></i
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- // PAGINATION -->
      <el-pagination
        v-if="tableDataTotal"
        :total="tableDataTotal"
        :page-size="props.tableQuery.limit"
        v-model:current-page="props.tableQuery.page"
        layout="prev, pager, next, sizes"
        @size-change="handlePagination()"
        @current-change="handlePagination()"
        background
      />
    </div>
  </el-card>
</template>


<script setup >
import { Search } from "@element-plus/icons-vue";

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