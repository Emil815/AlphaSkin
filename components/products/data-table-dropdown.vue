<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-vue-next'

defineProps<{
    payment: {
        id: string
    }
}>()

const { productModal, setModalData } = useProductModal()

function copy(id: string) {
    navigator.clipboard.writeText(id)
}

function handleCLickOpenModal() {
    setModalData(true)
}
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" class="w-8 h-8 p-0">
                <span class="sr-only">Open menu</span>
                <MoreHorizontal class="w-4 h-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="cursor-pointer" align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem class="cursor-pointer">
                <Button variant="outline" @click="handleCLickOpenModal">
                    Edit Profile
                </Button>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer" @click="copy(payment.id)">
                Delete
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>