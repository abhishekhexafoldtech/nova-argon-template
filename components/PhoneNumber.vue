<template> 
    <MazPhoneNumberInput
      v-model="phoneNumber"
      show-code-on-list
      color="info"
      :preferred-countries="['IN']"
      :ignored-countries="['AC']"
      @update="results = $event"
      :success="results?.isValid"

    />
    <code>
      {{ results }}
    </code>
  </template>
  
  <script setup>
    import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput' 
    import { ref } from 'vue'
    const phoneNumber = ref()  // get the phone number
    const results = ref()
  </script>