<script setup lang="ts">

import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '~/components/ui/breadcrumb'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { watchOnce } from '@vueuse/core'
import { ref } from 'vue'

const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex = ref(0)

function onSelect() {
    if (!emblaMainApi.value || !emblaThumbnailApi.value)
        return
    selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
    emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
    if (!emblaMainApi.value || !emblaThumbnailApi.value)
        return
    emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, (emblaMainApi) => {
    if (!emblaMainApi)
        return

    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
})


</script>
<template>
    <div class="container mt-4">

        <div class="grid grid-cols-12 bread_crumb">
            <div class="col-span-12">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/docs/components/accordion.html">
                                Components
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>


            </div>
        </div>

        <div class="grid grid-cols-12 h-100 gap-3">

            <ScrollArea class="col-span-1 mini_product h-full">
                <Carousel class="relative w-full h-40" @init-api="(val) => emblaThumbnailApi = val">
                    <CarouselContent class="flex gap-1 ml-0 flex-col">
                        <CarouselItem v-for="(_, index) in 10" :key="index" class="pl-0 basis-1/4 cursor-pointer"
                            @click="onThumbClick(index)">
                            <div class="p-1" :class="index === selectedIndex ? '' : 'opacity-50'">
                                <Card>
                                    <CardContent class="flex aspect-square items-center justify-center p-6">
                                        <span class="text-4xl font-semibold">{{ index + 1 }}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>

            </ScrollArea>
            <div class="col-span-6">
                <div class="w-full sm:w-auto">
                    <Carousel class="relative w-full" @init-api="(val) => emblaMainApi = val">
                        <CarouselContent>
                            <CarouselItem v-for="(_, index) in 10" :key="index">
                                <div class="p-1">
                                    <Card>
                                        <CardContent class="flex aspect-square items-center justify-center p-6">
                                            <span class="text-4xl font-semibold">{{ index + 1 }}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious class="left-3" />
                        <CarouselNext class="right-2" />
                    </Carousel>


                </div>
            </div>
            <div class="col-span-5">
                breadcrumb
            </div>
        </div>
    </div>
</template>


<style scoped></style>