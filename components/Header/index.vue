<script setup lang="ts">
import AccordionMenu from './AccordionMenu.vue';
import NavigationMenu from './NavigationMenu.vue';
const localePath = useLocalePath()
const header = ref<HTMLElement | null>(null);
const isSticky = ref(false);

const checkSticky = () => {
    if (header.value) {
        isSticky.value = window.scrollY > header.value.offsetHeight;
    }
};

// Authentication related states
const { logout, useAuthToken } = useAuth(); // Access logout function and token state

// Check if the user is logged in
const isLoggedIn = computed(() => !!useAuthToken().value);



onMounted(() => {
    window.addEventListener('scroll', checkSticky);
    checkSticky(); // Check initially
});


onUnmounted(() => {
    window.removeEventListener('scroll', checkSticky);
});
</script>


<template>
    <header class="header sticky top-0 z-50 bg-white transition-all duration-300 ease-in-out transform"
        :class="{ 'top-[-100px]': !isSticky, 'top-0': isSticky }" ref="header">
        <div class="container">
            <div class="grid grid-cols-12 items-center gap-4">
                <div class="col-span-3">
                    <Logo />
                </div>

                <!-- InputButton: spans 7 columns -->
                <div class="col-span-7">
                    <InputButton />
                </div>

                <!-- Icon: spans 2 columns -->
                <div class="col-span-2 icon-wrapper flex gap-4 justify-end text-2xl cursor-pointer">
                    <AuthLoginModal v-if="!isLoggedIn" />
                    <Icon v-if="isLoggedIn" @click="logout" name="ic:baseline-logout" />
                    <Icon name="line-md:heart" />
                    <Icon name="mdi-light:cart" />
                </div>
            </div>

            <div class="header_bottom flex items-center relative overflow-visible">
                <div class="header-bottom-cate min-w-[280px] min-h-[57px]">
                    <AccordionMenu />
                </div>
                <div class="header-bottom-menu">
                    <NavigationMenu />
                </div>
            </div>
        </div>
    </header>
</template>

