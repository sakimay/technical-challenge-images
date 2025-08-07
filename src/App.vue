<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GridImages from '@/components/GridImages.vue';
</script>

<template>
  <Header />
  <main class="flex flex-col items-center min-h-screen container mx-auto pt-12">
      <div class="max-w-5xl mx-auto text-center py-12 px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Infinite Photo Gallery
        </h1>
        <h2 class="text-lg md:text-xl text-gray-600 mb-8">
          A Vue 3 app showcasing dynamic image loading, smooth UX, and responsive design.
        </h2>
      </div>
    <GridImages />
  </main>
  <Footer />
</template>

<style scoped></style>
