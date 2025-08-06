<template>
    <div class="shadow-sm relative rounded">
        <img class="rounded" :src="photo.url" :alt="photo.title" height="300" width="600" />
        <p
            class="absolute bottom-4 left-0 right-0 bg-gradient-to-r from-black/80 to-black/10 text-white w-full font-bold p-2 uppercase">
            {{ photo.title }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    photo: Object
})
</script>