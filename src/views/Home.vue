<template>
  <v-container fluid class="d-flex flex-column align-center">
    <!-- Avatar -->
    <avatar />

    <!-- user info -->
    <div class="font-size-30 text-capitalize font-weight-bold mt-4">hoang tuan tu</div>
    <div>Web developer</div>

    <!-- Social link -->
    <v-row class="mt-4">
      <v-col cols="4">social 1</v-col>
      <v-col cols="4">social 2</v-col>
      <v-col cols="4">social 3</v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Avatar from '@/views/avatar.vue'


export default defineComponent({
  name: 'Home',
  components: { Avatar },
  data() {
    return {
    }
  },
  methods: {

  }
})
</script>

<style lang="scss"></style>
