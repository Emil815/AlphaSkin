<script setup lang="ts">
import {
    NumberField,
    NumberFieldContent,
    NumberFieldDecrement,
    NumberFieldIncrement,
    NumberFieldInput,
} from '@/components/ui/number-field'
import type { NumberFieldRootProps } from 'radix-vue';


</script>

<template>
    <NumberField id="age" class="w-[200px]" :default-value="18" :min="0">
        <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
        </NumberFieldContent>
    </NumberField>
</template>