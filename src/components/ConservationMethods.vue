<template>
    <section id="Conservation Methods" class="bg-gray-50 py-20">
        <div class="container mx-auto px-4">
            <header data-aos="fade-up" data-aos-delay="500" class="text-center mb-16 relative">
                <h2 class="text-4xl text-center font-dark font-bold text-green-900 mb-5 relative">How We Protect Wildlife</h2>
                <div class="w-16 h-1 bg-orange-500 mx-auto mb-5"></div>
                <p class="section-subtitle text-xl text-gray-600 text-center mb-5">Effective conservation strategies are key to preserving biodiversity. 
                    <br />Here's how we're making a difference:</p>
            </header>
            <ul data-aos="fade-up" data-aos-delay="400" 
                class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <li v-for="(methods,index) in methods" :key="index" class="group"> 
                    <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <figure class="relative h-80 overflow-hidden">
                            <img :src="methods.image"
                                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy">
                        </figure>
                    <div class="p-6 relative -mb-2">
                        <h3 class="text-xl font-bold text-green-900 mb-1">{{methods.title}}</h3>
                        <p class="text-gray-700">{{methods.description}}</p>
                    </div>
                    </article>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import Poaching from '../assets/images/Poaching.png'
import Community from '../assets/images/Community.png'
import Habitat from '../assets/images/Habitat.png'
const methods =ref([
    {
        title:"Habitat Restoration",
        description:"Rehabilitating degraded ecosystems to provide safe havens for wildlife. We've restored over 500,000 acres of critical habitat worldwide.",
        image:Habitat,
    },

    {
        title:"Anti-Poaching Initiatives",
        description:"Training rangers, deploying technology, and working with communities to combat illegal wildlife trade and protect endangered species.",
        image:Poaching,
    },
    
    {
        title:"Community Engagement",
        description:"Partnering with local communities to develop sustainable livelihoods that protect rather than exploit natural resources.",
        image:Community,
    },
]);
</script>
