<template>

    <div class="grid grid-cols-2 gap-4">
        <ImageCard v-for="photo in photos" :photo="photo" :key="photo.id" />
        <SkeletonImage v-if="loading" v-for="n in 6" :key="n"/>
        <div 
            ref="observerElement" 
            class="h-[40px] flex items-center justify-center"
        >
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
const observerElement = ref(null)

onMounted(() => {
    loadPhotos()
    window.addEventListener("scroll", handleScroll)
})
onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})

const handleScroll = (e) => {
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
        photos.value.push(...newPhotos)
    } catch (err) {
        error.value = err
        console.error(err)
    } finally {
        loading.value = false
    }
}

const loadMorePhotos = async () => {
    page.value++
    await loadPhotos()
}

</script>