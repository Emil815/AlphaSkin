<script setup lang="ts">
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"



const banners = [
    {
        id: '1',
        src: "/banner.webp",
        tite: 'Table & Smartphones',
        discount: "UP TO 30& OFF"
    },
    {
        id: '2',
        src: "/banner.webp",
        tite: 'Table & Smartphones',
        discount: "UP TO 30& OFF"
    },
    {
        id: '3',
        src: "/banner.webp",
        tite: 'Table & Smartphones',
        discount: "UP TO 30& OFF"
    }
]

</script>

<template>
    <div class="">

        <section id="slider">
            <SliderMain />
        </section>


        <section class="container mt-4" id="banners">
            <div class="grid grid-cols-12 gap-3">

                <div class="col-span-4" v-for="banner in banners" :key="banner.id">
                    <Card class="group overflow-hidden">
                        <CardContent class="p-0 relative cursor-pointer">
                            <NuxtImg densities="x1" format="webp" :src="banner.src" alt="slider_logo"
                                class="transform transition-transform duration-300 ease-in-out group-hover:scale-105" />
                            <div
                                class="absolute top-0 left-0 max-w-[185px] flex flex-col justify-center text-center h-full">
                                <CardHeader>{{ banner.discount }}</CardHeader>
                                <CardTitle>{{ banner.tite }}</CardTitle>
                            </div>
                        </CardContent>
                    </Card>
                </div>





            </div>

        </section>

        <section class="container mt-4" id="deals">

            <SliderDeals/>
        </section>
    </div>
</template>



<!-- <style scoped>

.card_content:hover .banner_logo {
    scale: 1.1;
}

</style> -->