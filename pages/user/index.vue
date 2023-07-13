<template>
    <div class="container-area">
      <h4 class="page_heading">Profile</h4>

      <el-card>

      </el-card>

      <div class="table_header">
      
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="Profile Details" name="profile">
            <el-card>
                profile
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="Address" name="address">
            <el-card>
                address
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="Reset password" name="password">
            <el-card>
                paassword
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </template>
  
<script setup>
  const activeName = ref("profile");

  
  definePageMeta({
    layout: "default",
  });
</script>