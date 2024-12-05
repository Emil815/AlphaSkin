<script setup lang="ts">

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const components: { title: string, href: string, description: string }[] = [
    {
        title: 'mainPage',
        href: '/',
        description:
            'mainPageDesc',
    },
    {
        title: 'products',
        href: '/products',
        description:
            'productPageDesc',
    },
]

</script>

<template>

    <NavigationMenu>

        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger>{{ $t('mainPage') }}</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
                        <li class="row-span-3">
                            <NavigationMenuLink as-child>
                                <a class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href="/">
                                    <NuxtImg class="h-full w-auto" densities="1x" format="webp" src="/brandLogoMain.png"
                                        alt="logo" />

                                    <div class="mb-2 mt-4 text-lg font-medium">
                                        AlphaSkin
                                    </div>
                                    <p class="text-sm leading-tight text-muted-foreground">
                                        {{ $t('aboutCompany') }}
                                    </p>
                                </a>
                            </NavigationMenuLink>
                        </li>

                        <li>
                            <NavigationMenuLink as-child>
                                <NuxtLink :to="$localePath('/')"
                                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                    <div class="text-sm font-medium leading-none">{{ $t('mainPage') }}</div>
                                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {{ $t('mainPageDesc') }}
                                    </p>
                                </NuxtLink>
                            </NavigationMenuLink>
                        </li>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger>{{ $t('others') }}</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        <li v-for="component in components" :key="component.title">
                            <NavigationMenuLink as-child>
                                <a :href="component.href"
                                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                    <div class="text-sm font-medium leading-none">{{ $t(`${component.title}`) }}</div>
                                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {{ $t(`${component.description}`) }}
                                    </p>
                                </a>
                            </NavigationMenuLink>
                        </li>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
</template>