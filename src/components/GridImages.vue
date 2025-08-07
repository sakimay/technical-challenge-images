<template>
    <div class="grid-images w-full p-6">
        <ImageCard v-for="photo in photos" :photo="photo" :key="photo.id" @click="deletePhoto(photo.id)"/>
        <SkeletonImage v-if="loading" v-for="n in 6" :key="n" />
        <div ref="observerElement" class="h-[100px] flex items-center justify-center">
        </div>
    </div>
</template>

<script setup>
import { fetchPhotos } from '@/api/photos.js'
import ImageCard from '/src/components/ImageCard.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import SkeletonImage from './SkeletonImage.vue'

const photos = ref([])
const loading = ref(true)
const error = ref(null)
const page = ref(1)
const limit = 20
const finished = ref(false)
const observerElement = ref(null)

onMounted(() => {
    loadPhotos()
    window.addEventListener("scroll", handleScroll)
})
onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})

const handleScroll = (e) => {
    if (loading.value || finished.value) return
    if (!observerElement.value) return
    const element = observerElement.value
    if (!element) return
    if (element.getBoundingClientRect().bottom < window.innerHeight) {
        loadMorePhotos()
    }
}

const loadPhotos = async () => {
    loading.value = true
    error.value = null
    try {
        const newPhotos = await fetchPhotos({ page: page.value, limit })
        if (newPhotos.length < limit) {
            finished.value = true
        }
        photos.value.push(...newPhotos)
    } catch (err) {
        error.value = err
        console.error(err)
    } finally {
        loading.value = false
    }
}

const loadMorePhotos = async () => {
    if (loading.value || finished.value) return
    page.value++
    await loadPhotos()
}

const deletePhoto = (id) => {
    photos.value = photos.value.filter((photo) => photo.id !== id)
}

</script>

<style scoped>
.grid-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

@media (min-width: 768px) {
    .grid-images {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}
</style>