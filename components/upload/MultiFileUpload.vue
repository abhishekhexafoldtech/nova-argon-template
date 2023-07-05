<template>
  <div class="container-fluid">
    <div class="row main">
      <div
        v-for="box in boxes"
        :key="box.id"
        class="col-6 col-md-6 p-0 d-flex align-items-center flex-column"
      >
        <label :class="['image-box', 'image-preview', { 'top-box': box.type === 'top' }]">
          <input
            type="file"
            :ref="`fileInput${box.id}`"
            @change="handleFileChange($event, box.id)"
            style="display: none"
          />
          <img v-if="box.image" :src="box.image" alt="Preview" />
          <div v-else>
            <i class="el-icon-plus"></i>
            <div class="text">Click to Upload</div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
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
        { id: 1, type: 'top', image: null },
        { id: 2, type: 'top', image: null },
        { id: 3, type: 'bottom', image: null },
        { id: 4, type: 'bottom', image: null },
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
        this.$emit('image-uploaded', this.boxes);
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

<style scoped>
@media screen and (min-width: 776px) {
  .main {
    padding-bottom: 199px;
  }
}
.image-box {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 220px;
  border: 18px solid #ffff;
  border-radius: 15px;
}


.image-box img {
  max-width: 100%;
  max-height: 100%;
}

.image-box i {
  font-size: 50px;
  margin-bottom: 10px;
}

.image-box .text {
  font-size: 14px;
  color: #666;
}
.image-preview {
  background-color: #f8f8f8;
  background-size: cover;
}
</style>
