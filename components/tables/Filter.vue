<template>
      <el-tree
    :data="data"
    show-checkbox
    load
    node-key="id"
    :default-expanded-keys="expanded_keys"
    :default-checked-keys="checked_keys"
    :props="defaultProps"
    :expand-on-click-node="true"
    @check-change="handleCheckChange"
  />
  <!-- <template>
    <span v-if="expanded_keys[3]">seeall</span>
  </template> -->
  <!-- </el-tree> -->
</template>

<script setup>
const expanded_keys = ref([]);
const checked_keys = ref([])

watch(expanded_keys,(pre,cur)=>{
    console.log(pre,cur)
})
function handleCheckChange(data){
    // console.log("data",data);
    console.log(expanded_keys.value)
    // console.log("checked",checked);
    // console.log("interminate",interminate)
}
const data = [
  {
    id: 1,
    label: 'Zone',
    children: [
      {
        id: 1.1,
        label:"Northen"
      },
      {
        id: 1.2,
        label:"Western"
      }
    ],
  },
  {
    id: 2,
    label: 'Sub zone',
    children: [
      {
        id: 2.2,
        label: 'N12',
      },
      {
        id: 2.3,
        label: 'W12',
      },
    ],
  },
  {
    id: 3,
    label: 'Status',
    children: [
      {
        id: 3.1,
        label: 'Active',
      },
      {
        id: 3.2,
        label: 'Inactive',
      },
    ],
  },
  {
    id: 4,
    label: 'Distributor name',
    children: [
      {
        id: 4.1,
        label: 'Yaw Graham',
      },
      {
        id: 4.2,
        label: 'Derric Nwafor',
      },
      {
        id: 4.3,
        label: 'Yaw Graham',
      },
      {
        id: 4.4,
        label: 'Derric Nwafor',
      },
    ],
  },
]
</script>