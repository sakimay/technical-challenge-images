<template>
    <div class="relative image-card" :id="photo.id" :title="photo.title">
        <img v-lazy="{ src: photo.url, loading: photo.thumbnailUrl, error: 'https://dummyimage.com/600x400/' }"
            class="rounded hover:scale-[1.02] hover:shadow-lg shadow-md cursor-pointer" :alt="photo.title" height="400"
            width="600" />
        <p
            class="absolute bottom-4 left-0 right-0 bg-gradient-to-r from-black/80 to-black/10 text-white w-full font-bold p-2 uppercase text-sm md:text-base"
            :title="photo.title">
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
img {
    transition: all 0.2s;
}

img[lazy=loading] {
    filter: blur(20px);
}

img[lazy=loaded],
img[lazy=error] {
    filter: none;
}

.image-card p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: max-content;
}
</style>