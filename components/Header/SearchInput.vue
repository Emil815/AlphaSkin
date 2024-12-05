<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Search } from 'lucide-vue-next';
import debounce from 'lodash/debounce';
import { ref, watch, onMounted, onUnmounted } from 'vue';

const searchInput = useState('searchInput', () => '');
const isLoading = useState('isLoading', () => true);
const searchResults = useState(() => []);
const showDropdown = ref(false);

const debouncedSearch = debounce(async () => {
    console.log({ searchInput });

    isLoading.value = true
    const { data, execute } = await useFetch('/api/products/popular', {
        immediate: false,
        query: {
            name: searchInput.value,
        },
        transform: (data) => {
            searchResults.value = data.popularProducts;
        },
    });

    await execute();
    isLoading.value = false

}, 300);

const onSearch = () => {
    showDropdown.value = true; // Show dropdown on search
    debouncedSearch();
};

// Hide dropdown when clicking outside
const hideDropdown = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const searchWrapper = document.querySelector('.search_form_wrapper');

    if (!searchWrapper?.contains(target)) {
        showDropdown.value = false;
    }
};

onMounted(() => {
    document.addEventListener('mousedown', hideDropdown);
});

onUnmounted(() => {
    document.removeEventListener('mousedown', hideDropdown);
});

// Mock most searched products
const mostSearchedProducts = [
    {
        id: '1',
        name: 'test',
    },
    {
        id: '2',
        name: 'test 2',
    },
    {
        id: '3',
        name: 'test 3',
    },
];
</script>

<template>
    <div class="search_form_wrapper">
        <div class="relative w-full items-center">
            <Input id="search" type="text" v-model="searchInput" @input="onSearch" :placeholder="$t('header.search')"
                class="p-5 rounded-full" />
            <Button
                class="absolute end-1 inset-y-0 flex items-center justify-center px-2 rounded-full w-[60px] submit_button"
                type="submit">
                <Search class="size-6 text-muted-foreground text-white" />
            </Button>

            <ScrollArea v-show="showDropdown"
                class="absolute z-50 top-6 p-5 bg-slate-50 text-gray-900 h-72 w-full rounded-md border">


                <div v-if="isLoading"
                    class="flex items-center justify-center w-full h-56  rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <div role="status">
                        <svg aria-hidden="true"
                            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>

                <div v-else class="p-4">
                    <h4 class="mb-4 text-sm font-medium leading-none">
                        {{ $t('products')}}
                    </h4>

                    <div v-if="!searchResults.content.length">

                        <div class="text-sm w-full h-full flex justify-center align-middle text-center flex-col">
                             {{ $t('notFound') }}
                        </div>
                    </div>


                    <div v-else v-for="product in searchResults.content" :key="product.id">
                        <div class="text-sm cursor-pointer">
                            {{ product.name }}
                        </div>
                        <Separator class="my-2" />
                    </div>
                </div>
            </ScrollArea>
        </div>

        <div class="most_searched flex h5 text-sm space-x-4 mt-2 text-gray-900 ml-2">
            <div>{{ $t('header.mostSearched') }}:</div>

            <div v-for="(product, index) in mostSearchedProducts" :key="product.id"
                class="flex items-center h-5 space-x-4">
                <div>{{ product.name }}</div>
                <Separator orientation="vertical" />
            </div>
        </div>
    </div>
</template>


<style lang="css" scoped>
.submit_button {
    top: 3px;
}
</style>