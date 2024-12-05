<template>
    <div>
        <a-modal v-model:open="props.isOpen" title="Title" @ok="handleOk" @update:open="handleCancel">
            <template #footer>
                <a-button key="back" @click="handleCancel">Return</a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
            </template>
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
        </a-modal>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod'
import { loginSchema } from '~/schemas/loginSchema'
import { useForm } from 'vee-validate';

const formSchema = toTypedSchema(loginSchema)
const { login, refreshToken } = useAuth()

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true,
    },
})


const formLogin = useForm({
    validationSchema: formSchema,
    validateOnMount: false,
    initialValues: {
        password: '',
        phoneNumber: ''
    }

})


const loading = ref<boolean>(false);
const open = ref<boolean>(false);


const emit = defineEmits(['closeModal'])

const showModal = () => {
    open.value = true;
};

const handleOk = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        open.value = false;
    }, 2000);
};



const onSubmit = formLogin.handleSubmit(async (values) => {

    console.log({ values })
    const datas = await login(values)

    handleCancel()
})


const handleCancel = () => {

    console.log('close islesin')
    emit('closeModal');
};
</script>
