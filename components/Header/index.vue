<script setup lang="ts">

import AccordionMenu from './AccordionMenu.vue';
import NavigationMenu from './NavigationMenu.vue';


</script>

<template>

    <header class="container relative">

        <div class="grid grid-cols-12 items-center gap-4">
            <div class="col-span-3">
                <Logo />
            </div>

            <!-- InputButton: spans 7 columns -->
            <div class="col-span-7">
                <InputButton />
            </div>

            <!-- Icon: spans 2 columns -->
            <div class="col-span-2 icon-wrapper">
                <Icon name="uil:github" style="color: black" />
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











    </header>

</template>