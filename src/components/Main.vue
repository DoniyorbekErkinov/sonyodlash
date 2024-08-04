<template>
  <div class="w-full h-full flex flex-col">
    <!-- <div class="fixed top-0 left-0 w-full z-10 p-4">
      <button @click="leaveFullScreen" class="p-2 bg-blue-500 text-white rounded">Tizimdan chiqish</button>
    </div> -->
    <Tabs :tabs="tabs" :activeTab="activeTab" @updateTab="activeTab = $event" />
    <div v-if="activeTab === 'generateNumbers'">
      <GenerateNumbers />
    </div>
    <div v-if="activeTab === 'memoNumbers'">
      <MemoNumbers />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tabs from './Tabs.vue'
import GenerateNumbers from './GenerateNumbers.vue'
import MemoNumbers from './MemoNumbers.vue';
const tabs = ref([
  { text: 'Generate Numbers', value: 'generateNumbers' },
  { text: 'Memorize Numbers', value: 'memoNumbers' },
])

const activeTab = ref('generateNumbers')

// const leaveFullScreen = () => {
//   if (document.exitFullscreen) {
//     document.exitFullscreen()
//   } else if (document.mozCancelFullScreen) {
//     document.mozCancelFullScreen()
//   } else if (document.webkitExitFullscreen) {
//     document.webkitExitFullscreen()
//   } else if (document.msExitFullscreen) {
//     document.msExitFullscreen()
//   }
// }
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}

.number-square {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px;
  font-size: 24px;
  font-weight: bold;
}
</style>
