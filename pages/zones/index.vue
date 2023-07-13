<template>
  <div>
    <BlankPage
      title="Product"
      buttonText="Add Product"
      :handleBlankPage="handleBlankPage"
      :blankImage="productBlankImage"
    />
  </div>
</template>
<script setup>
import BlankPage from "@/components/BlankPage.vue";
import productBlankImage from "@/assets/svg/empty_product.svg"

//handleBlank Page
const handleBlankPage = () => {

};
</script>
<style>
</style>
