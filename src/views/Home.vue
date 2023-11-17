<template>
  <v-container
    fluid
    class="d-flex justify-center"
  >
    <v-avatar
      size="150"
      class="absolute"
      :class="{ isStories: isStories }"
    >
      <v-img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/1200px-Avatar_icon_green.svg.png"
        contain
      >
        <v-icon
          icon="mdi-camera"
          class="relative camera_position cursor-pointer"
          :class="{ camera_opacity: cameraOpacity }"
          @click="onChangeAvatar()"
        ></v-icon>
      </v-img>
    </v-avatar>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  data() {
    return {
      isStories: true,
      cameraOpacity: true
    }
  },
  methods: {
    onChangeAvatar() {
      console.log('object')
    }
  }
})
</script>

<style lang="scss">
.isStories {
  border: solid #2b5cad 6px;
}
.camera_position {
  top: 85%;
  left: 0%;
}
.camera_opacity {
  opacity: 0.5;
}
</style>
