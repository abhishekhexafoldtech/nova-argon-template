<template>
    <section class="pt-5">
        <el-card>
            <h3>Notification</h3>
            <p>You have 3 unread notifications</p>
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <!-- all  -->
                <el-tab-pane label="All(10)" name="all">
               
                </el-tab-pane>
                <!-- pending  -->
                <el-tab-pane label="Pending requests(3)" name="pending">
                
                </el-tab-pane>
                <!-- stock  -->
                <el-tab-pane label="Stock request(2)" name="stock">
        
                </el-tab-pane>
                <!-- other  -->
                <el-tab-pane label="Other(2)" name="other">
                
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </section>
</template>

<script setup>
const activeName = ref("all");


</script>