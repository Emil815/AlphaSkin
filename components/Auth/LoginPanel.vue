<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { Button } from '@/components/ui/button'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginSchema } from '~/schemas/loginSchema'
import { type Login, type LoginForm } from '~/types'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'

const formSchema = toTypedSchema(loginSchema)
const localePath = useLocalePath()
const { loginPanel } = useAuthModal()

const isOpen = ref(loginPanel)
const formLogin = useForm({
    validationSchema: formSchema,
    validateOnMount:false,
    initialValues:{
        password: '',
        phoneNumber: ''
    } 

})

const { login, refreshToken } = useAuth()
const onSubmit = formLogin.handleSubmit(async (values) => {
    const datas = await login(values as LoginForm)

    if (datas?.accessToken) {
        navigateTo(localePath('/'));
    }
})


</script>

<template>
    <Drawer direction="right" class="h-full" v-model:open="isOpen">
        <DrawerTrigger as-child class="cursor-pointer">
            <Icon name="icon-park-outline:user" />
        </DrawerTrigger>
        <!-- Adjusted DrawerContent to decrease width from the left -->
        <DrawerContent class="absolute top-0 left-auto right-0 w-[600px] h-full m-0 p-4">
            <div class="mx-auto w-full">
                <form @submit="onSubmit">

                    <DrawerHeader>
                        <DrawerTitle>Sign In</DrawerTitle>
                    </DrawerHeader>
                    <div class="p-4 pb-0">
                        <FormField v-slot="{ componentField }" name="phoneNumber">
                            <FormItem>
                                <FormLabel>Phone number</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="phone" v-bind="componentField" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        <FormField v-slot="{ componentField }" name="password">
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="pass" v-bind="componentField" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                    </div>
                    <DrawerFooter>
                        <Button type="submit">Submit</Button>
                        <NuxtLink class="w-full" :to="$localePath('register')"> <Button class="w-full"
                                variant="outline">Register</Button></NuxtLink>
                        <DrawerClose as-child>
                            <Button variant="outline">
                                Cancel
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </form>

            </div>
        </DrawerContent>
    </Drawer>
</template>


<style scoped>

</style>