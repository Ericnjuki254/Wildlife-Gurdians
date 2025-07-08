<template>
    <header class="z-0 bg-dark/90 bg-green-500 backdrop-blur-sm ">
        <div class="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
            <!-- Logo -->
                <a href="/" class="flex items-center space-x-2">
                    <img :src="PawImg" class="w-20 h-20 flex items-center">
                    <h1 class="text-2xl"> Wildlife Gurdians</h1>
                </a>
                
                <!-- Desktop Navigation -->
                 <nav class="space-x-6 py-5" aria-label="primary navigation">
                    <a 
                    v-for="(link,index) in navLinks"
                    :key="index"
                    :href="link.href"
                    class="relative text-white semi-bold transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-[5px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"> 
                    {{ link.Label }}
                    </a>
                 </nav>
        </div>
    </header>
</template>

<script setup>
import PawImg from '../assets/Paw.png'
import { ref } from 'vue';
const navLinks = ref([
    {href: '#Home', Label: 'Home'},
    {href: '#Statistics', Label: 'Statistics'},
    {href: '#Conservations', Label: 'Conservations'},
    {href: '#Endangered Species', Label: 'Endangered Species'},
    {href: '#Take Action', Label: 'Take Action'},
]); 
</script>
