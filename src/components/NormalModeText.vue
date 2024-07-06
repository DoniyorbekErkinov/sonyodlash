<template>
    <div class="container mx-auto px-4 text-center text-4xl text-blue-800 font-semibold h-ful w-full flex flex-col items-center justify-center">
        <div>Tizimdan foydalanish uchun "F11" tugmasini bosing.</div>
        <button @click="() => {emits('openF11')}" class="mt-4 p-2 bg-blue-500 text-white rounded">Tizimga kirish</button>
      </div>
</template>
<script setup>
const emits = defineEmits(["openF11"])
</script>