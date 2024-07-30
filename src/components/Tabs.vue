<template>
    <div>
        <button v-for="tab in tabs" :key="tab.value" @click="selectTab(tab.value)" :class="['mt-4 p-2 ', { 'bg-blue-700': tab.value === activeTab, 'bg-slate-50 text-sky-950 border border-x-sky-700': tab.value !== activeTab }]" class="text-white">
            {{ tab.text }}
        </button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    tabs: {
        type: Array,
        required: true
    },
    activeTab: {
        type: String,
        required: true
    }
})

const emits = defineEmits(['updateTab'])

const selectTab = (value) => {
    emits('updateTab', value)
}
</script>

<style scoped>
/* Add your styles here if needed */
</style>
