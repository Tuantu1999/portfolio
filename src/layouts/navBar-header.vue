<template>
  <v-container fluid>
    <v-row class="d-flex justify-end">
      <v-icon
        :icon="isDarkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
        @click="onChangeThemeMode()"
      >
      </v-icon>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  name: 'NavBar',
  data() {
    return {}
  },
  props: {
    isDarkMode: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onChangeThemeMode(): any {
      this.$emit('onChangeThemeMode')
    }
  },
  computed: {}
})
</script>
