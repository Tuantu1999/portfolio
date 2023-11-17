<template>
  <main-container />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainContainer from '@/layouts/main-container.vue'

export default defineComponent({
  components: { MainContainer },
  name: 'App',
  data() {},
  methods: {},
  computed: {}
})
//
</script>

<style lang="scss">
.dark-mode {
  background-color: #1a1a1a;
  color: #ffffff;
}
.absolute {
  position: absolute;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
