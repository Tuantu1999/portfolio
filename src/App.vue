<template>
  <main-container />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainContainer from '@/layouts/main-container.vue'

export default defineComponent({
  components: { MainContainer },
  name: 'App',
  data() { },
  methods: {},
  computed: {}
})
//
</script>

<style lang="scss">
// theme mode
.dark-mode {
  background-color: #1a1a1a;
  color: #ffffff;
}

// position
.absolute {
  position: absolute;
}

//  pointer
.cursor-pointer {
  cursor: pointer;
}

// font size
.font-size-12 {
  font-size: 12px;
}

.font-size-13 {
  font-size: 13px;
}

.font-size-18 {
  font-size: 18px;
}

.font-size-20 {
  font-size: 20px;
}

.font-size-24 {
  font-size: 24px;
}

.font-size-30 {
  font-size: 30px;
}

// font weight
.font-weight-bold {
  font-weight: bold;
}

.font-weight-bolder {
  font-weight: bolder;
}

.font-weight-500 {
  font-weight: 500;
}

.font-weight-600 {
  font-weight: 600;
}

.font-weight-700 {
  font-weight: 700;
}
</style>
