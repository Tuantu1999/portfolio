<template>
  <v-app :class="{ 'dark-mode': darkMode }">
    <!-- Nav bar -->
    <nav-bar
      :isDarkMode="darkMode"
      @onChangeThemeMode="onChangeThemeMode"
    />

    <!-- Body -->
    <v-row noGutters>
      <home />
    </v-row>
  </v-app>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/layouts/navBar-header.vue'
import Home from '@/views/Home.vue'

export default defineComponent({
  components: { NavBar, Home },
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    onChangeThemeMode(): any {
      this.darkMode = !this.darkMode
    }
  },
  computed: {
    isDarkMode(): boolean {
      return (this.darkMode = true)
    }
  }
})
</script>
