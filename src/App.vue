<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GridImages from '@/components/GridImages.vue';
</script>

<template>
  <Header />
  <main class="flex flex-col items-center min-h-screen">
    <GridImages />
  </main>
  <Footer />
</template>

<style scoped></style>
