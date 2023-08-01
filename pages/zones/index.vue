<!-- <template>
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
</style> -->
<!-- /////////////////////////////Date Picker///////////////////// -->

<!-- <template>
  <div>
    <el-date-picker
      v-model="selectedDate"
      type="date"
      placeholder="Pick a day"
      @change="handleDateChange"
      size="large"
    ></el-date-picker>
    <div v-if="isDateInvalid" class="error-message">
      Please select the current date
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { format, isToday } from "date-fns";

const selectedDate = ref(null);
let isDateInvalid = ref(false);
const handleDateChange = (value) => {
  try {
    const selected = new Date(value);
    if (!isToday(selected)) {
      selectedDate.value = null;
      isDateInvalid.value = true;
      return;
    }
    isDateInvalid.value = false;
    const formattedDate = format(selected, "dd/MM/yyyy");
    console.log("Selected Date:", formattedDate);
  } catch (error) {
    return;
  }
};
</script>

<style>
.error-message {
  color: red;
  margin-top: 5px;
}
</style>-->

<!-- /* /////////////////////////////Date Range///////////////////// */ -->

<template>
  <div>
    <el-date-picker
      v-model="selectedDateRange"
      type="daterange"
      @change="handleDateChange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      size="default"
    />
  </div>
  <span v-if="isDateInvalid" style="color: red">Plese select future date</span>
</template>
<script setup>
import { format, isFuture, isToday } from "date-fns";
const selectedDateRange = ref([]);
let isDateInvalid = ref(false);
const handleDateChange = (date) => {
  try {
    if (!isToday(...date) && !isFuture(...date)) {
      selectedDateRange.value = [];
      isDateInvalid.value = true;
      return;
    }
    isDateInvalid.value = false;
    const [startDate, endDate] = date;
    const formattedStartDate = format(startDate, "dd/MM/yyyy");
    const formattedEndDate = format(endDate, "dd/MM/yyyy");
    console.log(
      "Selected Date Range:",
      formattedStartDate,
      "to",
      formattedEndDate
    );
  } catch (error) {
    return;
  }
};
</script>
