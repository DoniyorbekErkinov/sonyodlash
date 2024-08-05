<template>
    <div class="w-full h-full">
        <button class="mx-auto mt-2 bg-green-500 text-white rounded-md p-2 px-4" @click="randomize">Randomize</button>
        <div class="grid gap-4 grid-cols-1 mt-4">
            <div v-for="(value, key) in majorLearnData" :key="key" class="bg-slate-500 w-[50%] mx-auto h-52 flex justify-center items-center opacity-70 text-white tracking-wider text-4xl p-2 rounded-md shadow-md">
                <div>{{ value.order }} -- {{ value.value }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMainComposible } from '../helpers/useMainComposible';
const {majorLearnData} = useMainComposible()
function randomize() {
    majorLearnData.value = shuffleArray(majorLearnData.value);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


</script>

<style scoped></style>
