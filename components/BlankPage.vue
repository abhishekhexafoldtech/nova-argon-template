<template>
  <div class="blank_page">
    <div class="bp_inner">
      <div class="bp_box">
        <img :src="blankImage" alt="Blank0" />
        <h3>No {{ title }} added</h3>
        <p>You haven't added any {{ title }}.<br/>Start by adding first {{ title }}</p>
        <button class="btn w-100 btn-primary" @click="handleBlankPage">
          + {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import image from "@/assets/svg/empty_product.svg"
defineProps({
  title: {
    type: String,
    default: "Product",
  },
  buttonText: {
    type: String,
    default: "Add Product",
  },
  handleBlankPage: {
    type: Function,
  },
  blankImage:{
    type: String,
    default:image
  }
});
</script>
