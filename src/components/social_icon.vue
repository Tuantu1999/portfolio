<template>
  <a :href="redirectTo" target="_blank">
    <v-icon class="cursor-pointer elevation-0" color="black" :icon="`mdi-${icon}`"></v-icon>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Social',
  props: {
    icon: {
      type: String,
      default: ''
    },
    redirectTo: {
      type: String,
      default: ''
    }
  }
})
</script>
