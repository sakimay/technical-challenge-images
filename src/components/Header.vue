<script setup>
import { Bars3Icon } from '@heroicons/vue/24/solid'

const navLinks = [
    {
        href: '/',
        title: 'technical challenge'
    }
]

</script>

<template>
    <header class="flex justify-between w-full p-4 shadow-sm">
        <Bars3Icon class="size-6"/>
        <nav>
            <ul>
                <li v-for="navLink in navLinks" :key="navLink.href">
                    <a :href="navLink.href" class="hover:text-blue-500 hover:bg-gray-300/30 px-4 py-2 rounded-md text-sm transition duration-100">{{navLink.title}}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>

</style>
