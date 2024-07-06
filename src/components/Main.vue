<template>
    <div class="w-full h-full flex flex-col">
      <div>
        <button @click="leaveFullScreen" class="mt-4 p-2 bg-blue-500 text-white rounded">Tizimdan chiqish</button>
      </div>
      <div class="w-full flex flex-col justify-center items-center">
        <button @click="generateNumbers" class="mt-4 p-2 bg-green-500 text-white rounded">Raqamlarni yaratish</button>
        <div class="grid-container mt-4">
          <div v-for="(row, rowIndex) in numbers" :key="rowIndex" class="flex">
            <div v-for="(number, numIndex) in row" :key="numIndex" class="number-square border border-gray-400 shadow">
              {{ number }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const numbers = ref([]);
  
  const leaveFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  };
  
  const generateNumbers = () => {
    numbers.value = [];
    for (let i = 0; i < 15; i++) {
      const row = [];
      for (let j = 0; j < 40; j++) {
        row.push(Math.floor(Math.random() * 10));
      }
      numbers.value.push(row);
    }
  };
  </script>
  
  <style scoped>
  .grid-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .number-square {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
    font-size: 24px;
    font-weight: bold;
  }
  </style>
  