<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import NumberField from '../Product/NumberField.vue';

const displayNumberFields = ref(false)

const products = ref([
    {
        id: '1',
        src: '/dynamic.jpg',
        srcSecondary: '/dynamic1.webp',
        title: 'Cover 1'
    },
    {
        id: '2',
        src: '/dynamic.jpg',
        srcSecondary: '/dynamic1.webp',
        title: 'Cover 1'
    },
    {
        id: '3',
        src: '/dynamic.jpg',
        srcSecondary: '/dynamic1.webp',
        title: 'Cover 1'
    },
    {
        id: '4',
        src: '/dynamic.jpg',
        srcSecondary: '/dynamic1.webp',
        title: 'Cover 1'
    },
    {
        id: '5',
        src: '/dynamic.jpg',
        srcSecondary: '/dynamic1.webp',
        title: 'Cover 1'
    },
    {
        id: '6',
        src: '/dynamic.jpg',
        srcSecondary: '/dynamic1.webp',
        title: 'Cover 1'
    },
    {
        id: '7',
        src: '/dynamic.jpg',
        srcSecondary: '/dynamic1.webp',
        title: 'Cover 1'
    },
    {
        id: '8',
        src: '/dynamic.jpg',
        srcSecondary: '/dynamic1.webp',
        title: 'Cover 1'
    },
    {
        id: '9',
        src: '/dynamic.jpg',
        srcSecondary: '/dynamic1.webp',
        title: 'Cover 1'
    },
])



const buttons = ref([
    {
        id: 'basket',
        icon: 'simple-line-icons:basket',
        tooltip: 'Add to Cart'

    },
    {
        id: 'view',
        icon: 'lsicon:view-outline',
        tooltip: 'Quick View'

    },
    {
        id: 'heart',
        icon: 'mdi-light:heart',
        tooltip: 'Wishlist'


    },
    {
        id: 'compare',
        icon: 'ic:outline-compare-arrows',
        tooltip: 'Compare'


    },

])

function handleMouseOver({ target }: MouseEvent) {
    const { id } = (target as HTMLElement)
    console.log('event', id)
    displayNumberFields.value = Boolean(id === 'basket')
}

const localePath = useLocalePath()

</script>

<template>
    <Carousel class="relative w-full" :opts="{
        align: 'start',
    }">
        <CarouselContent class="border-none">
            <CarouselItem v-for="product in products" :key="product.id" class="md:basis-1/2 lg:basis-1/4 border-none">
                <div class="p-1">

                    <NuxtLink :to="localePath({ name: 'product-id', params: { id: product.id } })">
                        <Card class="border-none group cursor-pointer  overflow-hidden">
                            <CardContent class="flex aspect-square items-center justify-center p-0 relative">
                                <div class="img_wrapper border rounded-md overflow-hidden top-0 left-0 w-full h-full">
                                    <NuxtImg densities="x1" format="webp" :src="product.src" alt="slider_logo"
                                        class="w-full h-full object-cover transition-all duration-300 group-hover:scale-110" />
                                </div>
                                <div
                                    class="img_wrapper border rounded-md overflow-hidden absolute inset-6 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 w-full h-full top-0 left-0">
                                    <NuxtImg densities="x1" format="webp" :src="product.srcSecondary" alt="slider_logo"
                                        class="w-full h-full object-cover" />
                                </div>

                                <div class="buttons_wr absolute top-2 right-2 flex flex-col gap-2">

                                    <TooltipProvider>
                                        <Tooltip v-for="(btn, index) in buttons" :key="index">
                                            <TooltipTrigger as-child>
                                                <div class="flex relative justify-end"
                                                    :class="{ 'group/item': btn.id === 'basket' }">
                                                    <Button
                                                        class="button-animate bg-transparent text-primary border-gray-500 hover:bg-accordion hover:text-white"
                                                        :style="{ '--delay': `${index * 0.1}s` }" :id="btn.id">
                                                        <Icon :name="btn.icon" />
                                                    </Button>

                                                    <div
                                                        class="group/edit max-w-0 overflow-hidden group-hover/item:max-w-52 transition-all ease-in duration-300">
                                                        <NumberField />
                                                    </div>
                                                </div>


                                            </TooltipTrigger>
                                            <TooltipContent side="left">
                                                <p>{{ btn.tooltip }}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                </div>
                            </CardContent>
                            <CardFooter>
                                Card Footer
                            </CardFooter>
                        </Card>
                    </NuxtLink>


                </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
</template>


<style scoped>
.group:hover .img_wrapper:first-child img {
    transform: scale(1.1);
}

.group .img_wrapper:last-child {
    transition: opacity 0.3s ease-in-out;
}

.group:hover .img_wrapper:last-child {
    animation: fadeIn 0.3s ease-in-out forwards;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

.button-animate {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    transition-delay: var(--delay);
}

.group:hover .button-animate {
    opacity: 1;
    transform: translateY(0);
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>