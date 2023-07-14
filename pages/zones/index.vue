<template>
  <div>
    <BlankPage
      mainTitle="No Product Added"
      title="You haven't added any Product."
      subTitle="Start by adding first Product"
      buttonText="Add Product"
      :handleBlankPage="handleBlankPage"
      :blankImage="productBlankImage"
    />
  </div>
</template>
<script setup>
import BlankPage from "@/components/BlankPage.vue";
import productBlankImage from "@/assets/svg/empty_product.svg";

//handleBlank Page
const handleBlankPage = () => {};
</script>
<style></style>
