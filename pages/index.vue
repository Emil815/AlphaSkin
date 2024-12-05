<script setup lang="ts">
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { fetchProducts } from "~/controllers/product";
import { addToBasket } from "~/controllers/basket";

import take from 'lodash/take'



const products = await fetchProducts()

const { addToCart, getCartItems, useCartItems, useCartLoading } = useCart()
const cartItems = useCartItems()
const cartLoading = useCartLoading()
const authCookie = useCookie("auth_token");
const { setLoginPanel, loginPanel} = useAuthModal()


const handleCloseModal = () => {
    setLoginPanel(false)
}



const loginModalState = computed(() => {

    console.log('bura girir', loginPanel)

    return loginPanel.value
});

onMounted(() => {
    // getCartItems()
})

const addToCard = (product) => {


    console.log({ authCookie })
    if(!authCookie.value){

        setLoginPanel(true)

        return
    }


    console.log({product})
    addToCart(product)
}

const alreadyCart = (cardState, productToCheck) => {
    return cardState.some((productInCard) => {
        return productInCard.code === productToCheck.code
    })
}


</script>

<template>
    <div class="">

        <section id="slider">
            <SliderMain />
        </section>


        <section class="container mt-4" id="banners">
            <div class="grid grid-cols-12 gap-3">
                <!-- <div class="col-span-4" v-for="product in take(products?.content, 3)" :key="product.code">
                    <div
                        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <NuxtLink to="/">
                            <NuxtImg densities="x1" format="webp"
                                :src="`data:${product.imageType};base64,${product.imageData}`" alt="slider_logo"
                                class="transform transition-transform duration-300 ease-in-out group-hover:scale-105" />
                        </NuxtLink>
                        <div class="px-5 pb-5">
                            <NuxtLink to="/">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{
                                    product.name }}</h5>
                            </NuxtLink>
                            <div class="flex items-center mt-2.5 mb-5">
                                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                    <span class="text-sm  text-gray-900 dark:text-white">{{ product.description
                                        }}</span>

                                </div>

                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">{{ product.sellPrice }}
                                    M</span>


                                <button :disabled="cartLoading" type="button" @click="addToCard(product)"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg v-show="cartLoading" aria-hidden="true" role="status"
                                        class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="#E5E7EB" />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentColor" />
                                    </svg>
                                    <span v-if="alreadyCart(cartItems, product)"
                                        class="text-sm  text-gray-900 dark:text-white"> {{ $t('alreadyAdded')
                                        }}</span>
                                    <span v-else class="text-sm  text-gray-900 dark:text-white"> {{
                                        $t('addToCard')
                                        }}</span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div> -->
            </div>

        </section>

        <section class="container mt-4" id="deals">

            <SliderDeals />
        </section>

        <h1>salam</h1>

        {{ loginModalState }}

        <AuthLoginModal :is-open="loginModalState" @closeModal="handleCloseModal" />
    </div>
</template>



<!-- <style scoped>

.card_content:hover .banner_logo {
    scale: 1.1;
}

</style> -->