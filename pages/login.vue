<template>
    <div>
        <AuthLogin />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'authlayout'
})


</script>

<style scoped></style>