<template>
    <div v-for="tab in tabs" :key="tab.value">
        <button @click="emit('updateTab', tab.value)" class="mt-4 p-2 bg-blue-500 text-white rounded">{{ tab.text }}</button>
    </div>
</template>

<script setup>
const props = defineProps({
    tabs: {
        type: Object
    }
})
const emits = defineEmits(['updateTab'])
</script>

<style lang="scss" scoped></style>
