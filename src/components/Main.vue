<template>
  <div class="w-full h-full flex flex-col">
    <div v-if="checked" class="text-center w-full">Your score {{ correctAnswers }} / {{ numbers.length }}</div>
    <div>
      <button @click="leaveFullScreen" class="mt-4 p-2 bg-blue-500 text-white rounded">Tizimdan chiqish</button>
    </div>
    <div class="w-full flex flex-col justify-center items-center">
      <button @click="generateNumbers" class="mt-4 p-2 bg-green-500 text-white rounded">Raqamlarni yaratish</button>
      <div :class="`grid-container mt-4 !w-[${numbers.length * 10}px]`">
        <div v-for="(number, i) in numbers" :key="i" class="flex flx-wrap">
          <div class="number-square border border-gray-400 shadow">
            <div>{{ number }}</div>
            <input v-model="letters[i]" class="bg-gray-200/50 rounded ml-2 w-[40px] h-[40px] border border-gray-400 focus:outline-none p-2 text-sm" />
          </div>
        </div>
      </div>
      <button :disabled="numbers.length != letters.length" v-if="numbers.length > 0" @click="CheckNumbersAndLetters" class="mt-4 p-2 bg-green-500 text-white rounded " :class="numbers.length != letters.length ? 'cursor-not-allowed' : 'cursor-pointer'">Tekshirish</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tabs from "./Tabs.vue"
const numbers = ref([]);
const letters = ref([])
const hrk = ref({
  z: 0,
  t: 1,
  n: 2,
  m: 3,
  r: 4,
  l: 5,
  b: 6,
  k: 7,
  f: 8,
  g: 9
})
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
  checked.value = false
  numbers.value = [];
  for (let i = 0; i < 6 * 4; i++) {
    numbers.value.push(Math.floor(Math.random() * 10));
  }
};
const correctAnswers = ref(0)
const checked = ref(false)
const CheckNumbersAndLetters = () => {
  correctAnswers.value = 0; // Reset the correctAnswers before counting
  if (numbers.value.length == letters.value.length) {
    for (let i = 0; i < numbers.value.length; i++) { // Use < instead of <=
      if (letters.value[i] !== 'undefined' && letters.value[i] !== null) {
        if (hrk.value[letters.value[i]] == numbers.value[i]) {
          correctAnswers.value++;
        }
      } else {
        console.log('Else');
      }
    }
    checked.value = true;
  }
};

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
