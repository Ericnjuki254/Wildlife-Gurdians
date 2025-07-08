<template>
    <!-- Hero section -->
    <section class="relative h-[870px] flex items-center justify-center w-full overflow-hidden ">
        <img 
            :src="ForestImg"
            class="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div class="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40">
            <hgroup data-aos="fade-up" data-aos-delay="500">
            <h1 class="text-4xl font-bold mb-4 text-white text-center">Protecting our planet's Wildlife</h1>
            <p class="mb-6 text-gray-200 text-2xl font-semibold text-center">
                Every species plays a vital role in our ecosystem. Join us in our mission to preserve biodiversity and create a sustainable future for all living beings.
            </p>
            </hgroup>
    
        <!-- CTA Button -->
        <nav data-aos="fade-up" data-aos-delay="600"
            class="flex flex-row justify-center gap-5 mb-12">
        <a href="#cta"
            class="bg-emerald-500 hover:bg-emerald-700 text-white px-8 py-3 rounded-full transition shadow-lg">Get Involved</a>
        <a href="#conversation"
            class="bg-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full transition shadow-lg">Learn More</a>
        </nav>
        </div>
    </section>

        <!-- Stats Section -->
         <section id="stats" class="py-20">
            <div class="mx-auto px-4">
                <h2 class="text-4xl font-bold text-dark mb-5 text-center text-green-900 relative">Wildlife In Crisis</h2>
                <div class="w-16 h-1 bg-orange-500 mx-auto mb-5"></div>
                <p class="section-subtitle text-center">Our planet's biodiversity is under threat. Here are some alarming statistics</p>
            <div>
            </div>
            </div>
         </section>
</template>

<script setup>
import ForestImg from '../assets/images/Forest.png'

</script>

