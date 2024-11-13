<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <h1 class="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">Countdown Timer</h1>
        <div class="flex space-x-4">
            <div v-for="(value, key) in timeLeft" :key="key" class="flex flex-col items-center">
                <div
                    class="text-5xl font-bold text-primary bg-primary-foreground rounded-lg p-4 w-24 h-24 flex items-center justify-center mb-2">
                    <span class="tabular-nums" aria-live="polite">
                        {{ formatTime(value) }}
                    </span>
                </div>
                <div class="text-sm uppercase text-gray-500 dark:text-gray-400">{{ key }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    endDate: {
        type: Date,
        default: () => new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
    }
})

const timeLeft = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
})

let timer

const calculateTimeLeft = () => {
    const difference = +props.endDate - +new Date()
    if (difference > 0) {
        timeLeft.value = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
    } else {
        clearInterval(timer)
    }
}

const formatTime = (value) => value.toString().padStart(2, '0')

onMounted(() => {
    calculateTimeLeft()
    timer = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
    clearInterval(timer)
})
</script>