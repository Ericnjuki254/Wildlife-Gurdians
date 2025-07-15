<template>
           <section id="endagered species section" class="bg-white py-20">
        <div class="container mx-auto px-4">
            <header data-aos="fade-up" data-aos-delay="500" class="text-center mb-16 relative">
                <h2 class="text-4xl text-center font-dark font-bold text-green-900 mb-5 relative">Endangered Species Spotlight</h2>
                <div class="w-16 h-1 bg-orange-500 mx-auto mb-5"></div>
                <p class="section-subtitle text-xl text-gray-600 text-center mb-5">Meet some of the incredible species we're working to protect from extinction.</p>
            </header>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <div v-for="(animal,index) in animal" :key="index" class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="h-64 overflow-hidden">
              <img :src="animal.image" :alt="animal.name" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-primary-dark mb-2">{{ animal.name }}</h3>
                <span
                    class="inline-block px-3 py-1 rounded-full text-xs bg-pink-200 text-pink-700 mb-2 font-semibold"
                    :class="'status-' + animal.status"
                >
                     {{ animal.statusLabel }}
                </span>
              <p class="text-gray-600">{{ animal.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import Leopard from '../assets/images/Leopard.png'
import Sumatran from '../assets/images/Sumatran.png'
import Rhino from '../assets/images/Rhino.png'
import Gorilla from '../assets/images/Gorilla.png'
const animal = ref([
    {
        name:"Amur Leopard",
        status:"critical",
        statusLabel:"Critically Endagered",
        image:Leopard,
        description:"With fewer than 100 individuals left in the wild, this rare leopard is one of the world's most endangered big cats."
    },

    {
        name: "Sumatran Orangutan",
        status:"critical",
        statusLabel:"Critically Endagered",
        image:Sumatran,
        description: "Deforestation and poaching have reduced their population to just 14,000 in the wild."
    },

    {
        name: "Black Rhino",
        status:"critical",
        statusLabel:"Critically Endagered",
        image:Rhino,
        description: "Poaching for their horns has driven this species to the brink of extinction."
    },

    {
        name: "Mountain Gorilla",
        status:"critical",
        statusLabel:"Endagered",
        image:Gorilla,
        description: "Conservation efforts have helped increase their numbers to just over 1,000 individuals."
    },
])
</script>