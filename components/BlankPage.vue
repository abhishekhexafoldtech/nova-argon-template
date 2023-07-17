<template>
  <div class="blank_page">
    <div class="bp_inner">
      <div class="bp_box">
        <img :src="blankImage" alt="Blank0" />
        <h3>{{ mainTitle }}</h3>
        <p v-if="title">{{ title }}</p>
        <p v-if="subTitle">{{ subTitle }}</p>
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
  mainTitle: {
    type: String,
    default: "Product",
  },
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  buttonText: {
    type: String,
    default: "Add Product",
  },
  handleBlankPage: {
    type: Function,
  },
  blankImage: {
    type: String,
    default: image
  }
});
</script>
