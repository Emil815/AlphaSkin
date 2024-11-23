<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createReusableTemplate, useMediaQuery } from '@vueuse/core'
import { useForm } from 'vee-validate'
import { ref } from 'vue'

// Reuse `form` section
const [UseTemplate, GridForm] = createReusableTemplate()
const isDesktop = useMediaQuery('(min-width: 768px)')
const { productModal } = useProductModal()

const isOpen = ref(productModal)

// Image file state
const imageFile = ref<File | null>(null)
const imageBase64 = ref<string | null>(null)
const imageType = ref<string | null>(null)

const { handleSubmit } = useForm()

const handleImageChange = (e: Event) => {
    const fileInput = e.target as HTMLInputElement
    const file = fileInput.files?.[0]
    if (file) {
        imageFile.value = file
        imageType.value = file.type

        // Convert to base64
        const reader = new FileReader()
        reader.onloadend = () => {
            if (reader.result) {
                imageBase64.value = reader.result as string
            }
        }
        reader.readAsDataURL(file)
    }
}


const onSubmit = handleSubmit(async (values) => {
    console.log({ values });

    const formData = new FormData();

    // Prepare the command object as a JSON string
    const command = {
        quantity: 0,
        wholeSalePrice: 0,
        name: 'string',
        code: 'string',
        note: 'string',
        article: 'string',
        sellPrice: 0,
        description: 'string',
        category: 'string',
        subCategory: 'string',
    };

    // Append the command object as a JSON string
    formData.append('command', JSON.stringify(command));

    // Append the file (binary data) separately
    if (imageFile.value) {
        formData.append('file', imageFile.value);
    }

    console.log('FormData content:');
    for (const [key, value] of formData.entries()) {
        console.log(key, value); // Debugging purpose
    }

    const res = await useFetchApi("/api/admin/product/add", {
        method: "POST",
        body: formData,
    });
   
});



</script>

<template>
    <UseTemplate>
        <form enctype="multipart/form-data" @submit="onSubmit">
            <FormField v-slot="{ componentField }" name="image">
                <FormItem>
                    <FormLabel>image</FormLabel>
                    <FormControl>
                        <Input type="file" accept="image/*" @change="handleImageChange" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>

            <Button class="w-full mt-2" type="submit">Submit</Button>

        </form>


    </UseTemplate>

    <Dialog v-if="isDesktop" v-model:open="isOpen">
        <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                </DialogDescription>
            </DialogHeader>
            <GridForm />
        </DialogContent>
    </Dialog>

    <Drawer v-else v-model:open="isOpen">
        <DrawerTrigger as-child>
            <Button variant="outline">
                Edit Profile
            </Button>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader class="text-left">
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>
                    Make changes to your profile here. Click save when you're done.
                </DrawerDescription>
            </DrawerHeader>
            <GridForm />
            <DrawerFooter class="pt-2">
                <DrawerClose as-child>
                    <Button variant="outline">
                        Cancel
                    </Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
</template>