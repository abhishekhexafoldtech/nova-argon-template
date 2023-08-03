<template>
  <el-row class="pr_img_upload_box">
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="box in boxes" :key="box.id">
      <label :class="[
        'image-box',
        'image-preview',
        { 'top-box': box.type === 'top' },
      ]">
        <input type="file" :ref="`fileInput${box.id}`" @change="handleFileChange($event, box.id)" style="display: none" />
        <img v-if="box.image" :src="box.image" alt="Preview" />
        <div class="box_inner" v-else>
          <div class="text">Drop files here to upload</div>
        </div>
      </label>
    </el-col>
  </el-row>
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: {
    imageUrls: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      boxes: [
        { id: 1, type: "top", image: null },
        { id: 2, type: "top", image: null },
        { id: 3, type: "bottom", image: null },
        { id: 4, type: "bottom", image: null },
      ],
    };
  },
  mounted() {
    // Update the image URLs when the component is mounted
    this.updateImageUrls();
  },
  watch: {
    imageUrls: {
      handler() {
        // Update the image URLs when the prop value changes
        this.updateImageUrls();
      },
      immediate: true,
    },
  },
  methods: {
    handleFileChange(event, boxId) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageSrc = e.target.result;
        const box = this.boxes.find((box) => box.id === boxId);
        if (box) {
          box.image = imageSrc;
        }
        this.$emit("image-uploaded", this.boxes);
      };
      reader.readAsDataURL(file);
    },
    updateImageUrls() {
      // Update the image URLs based on the prop value
      this.boxes.forEach((box, index) => {
        box.image = this.imageUrls[index] || null;
      });
    },
  },
};
</script>
