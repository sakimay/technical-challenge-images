<template>
    <div v-if="loading">Loading...</div>
    <div class="text-red-500" v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
        <div class="grid grid-cols-2 gap-4">
            <ImageCard v-for="photo in photos" :photo="photo" :key="photo.id" />
        </div>

        <div class="pagination">
            <button @click="loadMore">Load more</button>
        </div>
    </div>

</template>

<script setup>
import { fetchPhotos } from '@/api/photos.js'
import ImageCard from '/src/components/ImageCard.vue'
import { ref, onMounted } from 'vue'

const photos = ref([])
const loading = ref(false)
const error = ref(null)
const page = ref(1)
const limit = 10

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

const loadMore = async () => {
    page.value++
    await loadPhotos()
}

onMounted(loadPhotos)

</script>