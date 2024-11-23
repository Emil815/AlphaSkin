<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { columns } from '@/components/products/columns'
import DataTable from '@/components/products/data-table.vue'
import type { Products } from '~/types';

const data = ref<Products[]>([])

async function getData(): Promise<Products[]> {
    // Fetch data from your API here.
    return [
        {
            id: '1',
            price: 100,
            name: 'aparat',
        },
        {
            id: '2',
            price: 100,
            name: 'aparat 2',
        },
        {
            id: '3',
            price: 100,
            name: 'aparat 3',
        },
        {
            id: '4',
            price: 100,
            name: 'aparat 4',
        },
        {
            id: '5',
            price: 100,
            name: 'aparat 5',
        },
        // ...
    ]
}

const { productModal, setModalData } = useProductModal()


onMounted(async () => {
    data.value = await getData()
})
</script>

<template>
    <div class="container py-10 mx-auto">
        <DataTable :columns="columns" :data="data" />


        <ProductsProductPanel v-if="productModal"/>

    </div>
</template>