<template>
    <header class="header text-white  mb-3 top-0 z-40 w-full">


        <nav v-if="!isSticky" class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="top_nav_wrapper grid align-middle items-center h-[60px] justify-center md:justify-start">
                    <div class="top_nav flex">
                        <div class="top_nav_part flex gap-2 align-middle items-center">
                            <Icon name="ion:location-outline" class="text-gray-700 " />
                            <span  class="text-gray-700 cursor-pointer">{{ $t('location') }}</span>

                        </div>
                        <div class="top_nav_part flex gap-2 align-middle items-center">
                            <Icon name="mdi:envelope-outline" class="text-gray-700 gap-3" />
                            <span class="text-gray-700 cursor-pointer">alphaskin@mail.ru</span>
                        </div>
                    </div>
                </div>
                <div class="top_nav_wrapper flex justify-center md:justify-end align-middle items-center h-[60px]">
                    <div class="top_nav flex">
                        <span class="text-gray-700">English</span>
                    </div>
                </div>
            </div>




        </nav>

        <div :class="{
            'h-[150px] fixed w-full top-0 transition-all duration-200 ease-in-out animate-sticky pt-4 z-40 bg-white': isSticky,
            'relative': !isSticky
        }">
            <nav class="container hidden md:block">
                <HeaderSearchMenuNav />
            </nav>

            <nav class="container hidden md:grid grid-cols-3 nav-menu-wrapper mt-4 z-40">
                <div class="wrapper relative z-40">
                    <HeaderAccordionMenu />
                </div>
                <HeaderNavigationMenu />
            </nav>

            <nav class="container md:hidden">
                <div class="grid grid-cols-3 gap-4 h-[70px]">
                    <div class="left-side flex justify-center items-center">
                        <Icon class="bg-gray-900" @click="toggleMobileMenu" name="lucide:menu" />
                        <Icon class="bg-gray-900" name="tabler:search" />
                    </div>
                    <Logo />
                    <HeaderRightIcons />
                </div>
            </nav>
        </div>






    </header>


</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);
const isSticky = ref(false);
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};


// Handle scroll event
const onScroll = () => {
    if (window.scrollY > 200) { // Change the value to control when the sticky effect is triggered
        isSticky.value = true;
    } else {
        isSticky.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>

@keyframes stickyAnimation {
    0% {
        opacity: 0;
        transform: translateY(-10px);
        /* Start slightly above */
    }

    100% {
        opacity: 1;
        transform: translateY(0);
        /* End in the normal position */
    }
}

.animate-sticky {
    animation: stickyAnimation 0.2s ease-in-out forwards;
}
/* Add custom styles here if needed */
</style>
