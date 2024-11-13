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
    const datas: Login = await login(values as LoginForm)

    if (datas?.accessToken){
        navigateTo(localePath('/'));
    }
})


</script>

<template>

    <div class="p-4 pb-0 max-w-sm mx-auto">
        <form @submit="onSubmit">
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
            <Button class="w-full mt-2" type="submit">Submit</Button>

        </form>


    </div>

</template>


<style scoped>

</style>