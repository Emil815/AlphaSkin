<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const contentItems = [
    { value: 'item-1', title: 'Best Seller', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
    { value: 'item-2', title: 'Top 100 products', content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.' },
]

</script>

<template>
    <Accordion
        class="absolute min-w-[280px] bg-accordion rounded-tl-lg rounded-tr-lg  border-b-0 text-white border-transparent z-50"
        type="single" collapsible>
        <AccordionItem value="item-1" class="border-b-0  border-transparent">
            <AccordionTrigger class="no-underline  hover:no-underline flex justify-center gap-3 border-transparent">
                <div class="flex align-middle items-center gap-3">
                    <Icon name="mdi:menu" />
                    <span>
                        {{ $t('categories') }}
                    </span>
                </div>
            </AccordionTrigger>
            <AccordionContent class="bg-white text-primary border border-b-0 border-white shadow-lg">

                <ul class="p-3">
                    <li v-for="item of contentItems" :key="item.value" class="p-2">
                        {{ item.title }}
                        <Separator orientation="horizontal" class="mt-2" />
                    </li>

                </ul>
            </AccordionContent>


        </AccordionItem>
    </Accordion>
</template>