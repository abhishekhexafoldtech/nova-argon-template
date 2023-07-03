<template>
  <div class="container">
    <h6 class="text-white mt-5">List of products</h6>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane class="tab-pane" label="Cylinders" name="cylinders">
        <CylindersTable />
      </el-tab-pane>
      <el-tab-pane label="Accessories" class="tab-pane" name="second">
        <AccessoriesTable />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import CylindersTable from "./CylindersTable.vue";
import AccessoriesTable from "./AccessoriesTable.vue";

const activeName = ref("cylinders");
</script>
<style>
.demo-tabs,
.tab-pane {
  margin-top: 20px;
  color: white;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs__item {
  color: white;
}

.el-tabs__item:hover {
  color: white;
}
</style>
