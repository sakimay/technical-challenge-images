<template>
    <div class="shadow-sm relative rounded">
        <img v-lazy="{ src: photo.url, loading: photo.thumbnailUrl, error: 'https://dummyimage.com/600x400/' }"
            class="rounded" :alt="photo.title" height="400" width="600" />
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

<style scoped>
img{
    transition: filter 0.2s;
}
img[lazy=loading] {
    filter: blur(20px);
}

img[lazy=loaded],
img[lazy=error] {
    filter: none;
}
</style>