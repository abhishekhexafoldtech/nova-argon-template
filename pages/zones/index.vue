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
