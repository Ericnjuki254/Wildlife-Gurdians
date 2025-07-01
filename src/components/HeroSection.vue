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
            <p class="mb-6 text-gray-200 text-2xl font-semibold text-center">Every species plays a vital role in our ecosystem. Join us in our mission to preserve biodiversity and create a sustainable future for all living beings.</p>
            </hgroup>
        </div>
        <!-- CTA Button -->

    </section>
</template>

<script setup>
import ForestImg from '../assets/images/Forest.png'
</script>

