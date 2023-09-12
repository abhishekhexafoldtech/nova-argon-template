<template>
  <div class="cus_kpi_item">
    <div class="kpi_percentage">
      <img :src="icon" alt="icon" />
      <p>
        <span
          v-if="Math.sign(parseFloat(percentage)) === 1"
          class="text-success"
        >
          <el-icon>
            <TopRight />
          </el-icon>
          +{{ percentage }}
        </span>
        <span
          v-if="Math.sign(parseFloat(percentage)) === -1"
          class="text-danger"
        >
          <el-icon>
            <BottomRight />
          </el-icon>
          -{{ percentage }}
        </span>
        <span
          v-if="Math.sign(parseFloat(percentage)) === 0"
          class="text-danger"
        >
          <el-icon>
            <BottomRight />
          </el-icon>
          {{ percentage }}
        </span>
        {{ time }}
      </p>
    </div>
    <h4
      :class="[Math.sign(parseFloat(percentage)) === -1 ? 'text-danger' : '']"
    >
      {{ value }}
    </h4>
    <p class="kpi_det">{{ title }}</p>
  </div>
  <!-- <div class="mb-3 card">
    <div class="p-3 card-body">
      <div class="d-flex flex-row-reverse justify-content-between">
        <div class="text-center">
          <span v-if="Math.sign(parseFloat(percentage)) === 1" class="text-sm text-success font-weight-bolder">
            <el-icon>
              <TopRight />
            </el-icon> +{{ percentage }}
          </span>
          <span v-if="Math.sign(parseFloat(percentage)) === -1" class="text-sm text-danger font-weight-bolder">
            <el-icon>
              <BottomRight />
            </el-icon> -{{ percentage }}
          </span>
          <span v-if="Math.sign(parseFloat(percentage)) === 0" class="text-sm text-danger font-weight-bolder">
            <el-icon>
              <BottomRight />
            </el-icon> {{ percentage }}
          </span>
          <br />
          <span style="font-size: smaller"> {{ time }} </span>
        </div>
        <div :class="classContent">
          <div class="numbers">
            <div>
              <img :src="icon" alt="icon" />
            </div>
            <h5 :class="[
              Math.sign(parseFloat(percentage)) === -1 ? 'text-danger' : '',
            ]" class="mt-4 mb-0 font-weight-bolder">
              {{ value }}
            </h5>
            <span class="font-weight-bolder">
              {{ title }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script setup>
import { TopRight, BottomRight } from "@element-plus/icons-vue";

defineProps({
  time: {
    type: String,
    default: "since last week",
  },
  title: {
    type: String,
    required: false,
    color: {
      type: String,
    },
  },
  description: {
    type: String,
    default: "",
  },
  value: {
    type: [Object, String, Number],
    required: false,
    text: {
      type: [String, Number],
    },
  },
  percentage: {
    type: [Number],
    value: {
      type: String,
    },
  },

  icon: {
    type: [String],
  },
  classContent: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.cus_kpi_item {
  width: 100%;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 15px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    background: rgba(94, 114, 228, 0.1);
    border-radius: 5px;
    content: "";
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.5s;
    width: 0;
  }

  &.active-card {
    &::before {
      left: 0;
      width: 100%;
    }
  }

  .kpi_percentage {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 18px;

    img {
      width: 55px;
      height: 55px;
      border-radius: 12px;
      object-fit: contain;
      object-position: center;
    }

    p {
      margin: 0;
      color: var(--grey);
      font-size: 12px;
      font-weight: 400;

      span {
        display: block;
        font-size: 14px;
        font-weight: 700;

        .el-icon {
          margin-right: 3px;
        }
      }
    }
  }

  h4 {
    color: var(--black);
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 8px;
  }

  p {
    color: var(--grey);
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    margin: 0;
  }
}
</style>
