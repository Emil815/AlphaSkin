<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { ref, nextTick, watch } from 'vue'

const api = ref<CarouselApi | null>(null) // Update the ref type to allow null
const activeIndex = ref(0) // Track the active slide index
const slider = ref([
    {
        id: '1',
        src: '/first_cover.webp',
        title: 'Cover 1'
    },
    {
        id: '2',
        src: '/second_cover.jpg',
        title: 'Cover 2'
    }
])

function setApi(val: CarouselApi) {
    api.value = val
    console.log({ val })
}

const stop = watch(api, (api) => {
    console.log({ api })
    if (!api) return

    // Watch only once or use watchOnce() in @vueuse/core
    nextTick(() => stop())

    // Track the active slide on each slide change
    api.on('select', (index) => {
        console.log('Active slide index:', activeIndex.value)
        activeIndex.value =  activeIndex.value + 1 // Update the active index to re-trigger animation
        // You can add code here to respond to the slide change
    })
})
</script>

<template>
    <Carousel @init-api="setApi" v-slot="{ canScrollNext }" class="relative w-full">
        <CarouselContent>
            <CarouselItem v-for="slide in slider" :key="slide.id">
                <div class="p-0">
                    <Card>
                        <CardContent class="flex items-center justify-center p-0 relative">
                            <NuxtImg densities="x1" format="webp" :src="slide.src" alt="slider_logo" />
                            <div
                                class="text_wrapper absolute t-0 left-0 bg-transparent h-full w-full flex justify-center items-center">
                                <h1 :key="activeIndex" class="animate-left-to-right">salamlar olsuin {{ activeIndex }}</h1>

                            </div>
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
        </CarouselContent>
        <!-- <CarouselPrevious />
        <CarouselNext v-if="canScrollNext" /> -->
    </Carousel>
</template>
