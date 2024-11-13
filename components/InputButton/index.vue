<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Search } from 'lucide-vue-next'
</script>

<template>
    <div class="search_form_wrapper">
        <div class="relative w-full  items-center">
            <Input id="search" type="text" placeholder="Search..." class="p-5 rounded-full" />
            <Button
                class="absolute end-1 inset-y-0 flex items-center justify-center px-2 rounded-full w-[60px] submit_button"
                type="submit">
                <Search class="size-6 text-muted-foreground  text-white" />
            </Button>
        </div>

        <div class="most_searched flex h5 text-sm space-x-4 mt-2">
            <div>Most Searched:</div>
            <div class="flex  items-center h-5 space-x-4 ">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>Source</div>
            </div>
        </div>


    </div>

</template>


<style lang="css" scoped>
.submit_button{
    top: 3px;
}
</style>