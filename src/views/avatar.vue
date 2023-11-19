<template>
  <v-avatar size="150" :class="{ isStories: isStories }">
    <input ref="fileImage" type="file" @change="onFileChanged" hidden>
    <v-img :src="imageUrl || avatarDefault" cover>
      <v-icon icon="mdi-camera" class="relative camera_position cursor-pointer" :class="{ camera_opacity: cameraOpacity }"
        @click="onChangeAvatar()"></v-icon>
    </v-img>
  </v-avatar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Avatar',
  data() {
    return {
      isStories: true,
      cameraOpacity: true,
      imageUrl: '',
      avatarDefault: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/1200px-Avatar_icon_green.svg.png'
    }
  },
  methods: {
    onChangeAvatar() {
      (this.$refs.fileImage as HTMLElement).click()
    },

    onFileChanged(event: any) {
      const file = event.target.files[0]
      if (file) {
        this.imageUrl = URL.createObjectURL(file)
      }
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
