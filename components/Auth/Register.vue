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
import { registerSchema } from '~/schemas/registerSchema'

const config = useRuntimeConfig();
const localePath = useLocalePath()

const formSchema = toTypedSchema(registerSchema)

const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit(async (values) => {
    console.log('Form submitted!', values)

    const { data: responseData } = await useFetch(
        "/api/auth/signup",
        {
            method: "post",
            body: useOmit(values, ['confirmPassword']),
            baseURL: config.public.apiBase
        }
    );

    console.log('useCloneDeep(responseData?.value)', useCloneDeep(responseData?.value))

    if ((useCloneDeep(responseData?.value))){
        navigateTo(localePath('/login'));
    }


    

})
</script>

<template>
    <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="phoneNumber">
            <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="number" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="name">
            <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="name" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="surname">
            <FormItem>
                <FormLabel>Surname</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="surname" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
            <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="shadcn" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="confirmPassword">
            <FormItem>
                <FormLabel>confirmPassword</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="shadcn" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <Button type="submit" class="w-full mt-2">
            Submit
        </Button>
    </form>
</template>