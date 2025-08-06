<template>
    <div class="flex flex-col items-center justify-center shadow-sm">
        <img :src="`https://picsum.photos/seed/${photo.id}/600/400`" :alt="photo.title" />
        <p>{{ photo.title }}</p>
    </div>
</template>

<script setup>
    defineProps({
        photo: Object
    })
</script>