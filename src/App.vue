<template>
  <div class="bg-gray-400/50 w-full h-wull py-4 flex flex-col">
    <NormalModeText class="my-auto" @openF11="openFullscreen" v-if="!isFullscreen" />
    <div v-else class="container mx-auto py-8 px-4">
      <Main />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import NormalModeText from './components/NormalModeText.vue';
import Main from './components/Main.vue';

const isFullscreen = ref(false);

const checkFullscreen = () => {
  isFullscreen.value = !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  );
};

const handleFullscreenChange = () => {
  checkFullscreen();
};

const openFullscreen = () => {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
};

onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullscreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.addEventListener('mozfullscreenchange', handleFullscreenChange);
  document.addEventListener('MSFullscreenChange', handleFullscreenChange);
  window.addEventListener('resize', handleFullscreenChange);  // To handle F11 toggles
  checkFullscreen();
});

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', handleFullscreenChange);
  document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
  document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
  window.removeEventListener('resize', handleFullscreenChange);
});
</script>

<style scoped>
* {
  min-height: 100vh;
  height: 100% !important;
}
/* Add any specific styles you want */
</style>
