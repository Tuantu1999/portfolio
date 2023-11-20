<template>
  <v-container fluid class="d-flex flex-column align-center">
    <!-- Avatar -->
    <avatar />

    <!-- user info -->
    <div class="font-size-30 text-capitalize font-weight-bold mt-4">hoang tuan tu</div>
    <div class="font-weight-500">Web developer</div>

    <!-- Social link -->
    <v-row class="my-0">
      <v-col cols="3">
        <social-icon :icon="`email-outline`" @click="toRedirect('email')" :redirectTo="redirectTo"></social-icon>
      </v-col>
      <v-col cols="3">
        <social-icon :icon="`linkedin`" @click="toRedirect('linkedin')" :redirectTo="redirectTo"></social-icon>
      </v-col>
      <v-col cols="3">
        <social-icon :icon="`phone`" @click="toRedirect('phone')" :redirectTo="redirectTo"></social-icon>
      </v-col>
      <v-col cols="3">
        <social-icon :icon="`github`" @click="toRedirect('github')" :redirectTo="redirectTo"></social-icon>
      </v-col>
    </v-row>

  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Avatar from '@/views/avatar.vue'
import SocialIcon from '@/components/social_icon.vue'

export type typeRedirect = 'email' | 'linkedin' | 'phone' | 'github'

export default defineComponent({
  name: 'Home',
  components: { Avatar, SocialIcon },
  data() {
    return {
      redirectTo: ''
    }
  },
  methods: {
    toRedirect(type: typeRedirect) {
      switch (type) {
        case 'email':
          return (this.redirectTo = 'https://vuetifyjs.com/en/')
        case 'linkedin':
          console.log('linkedin')
          return (this.redirectTo = '#')
        case 'phone':
          console.log('phone')

          break
        case 'github':
          console.log('github')

          return 'https://github.com/Tuantu1999'
      }
    }
  }
})
</script>

<style lang="scss"></style>
