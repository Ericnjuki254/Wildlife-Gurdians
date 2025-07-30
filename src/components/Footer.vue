<template>
    <footer class="bg-green-950 text-white pt-16 pb-8">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                <!-- company info -->
                 <section class="lg:col-span-1">
                    <h2 class="text-2xl font-bold">Wildlife Guardians</h2>
                    <div class="w-16 h-0.5 bg-orange-500 mb-3"></div>
                    <p class="mb-6">Dedicated to preserving Earth's biodiversity through research, <br /> conservation, and education since 1995.</p>
                    <nav aria-label="Social Media Links">
                        <ul class="flex space-x-4">
                            <li v-for="(item,index) in socialLinks" :key="index">
                                <a :href="item.url" tagert="_blank" rel="noopener" :aria-label="item.name"></a>
                                    <img :src="item.icon" :alt="item.name + 'icon'"
                                          class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 
                                          hover:-translate-y-1 transition-all duration-300">
                            </li>
                        </ul>
                    </nav>
                 </section>
                 <!-- Quick Links -->
                  <section>
                    <h3 class="text-xl font-bold">Quick Links</h3>
                    <div class="w-16 h-0.5 bg-orange-500 mb-3"></div>
                    <nav aria-label="Quick Links">
                        <ul class="space-y-3">
                            <li v-for="(item,index) in quickLinks" :key="index">
                                <span class="text-orange-600 mr-2">&gt;</span>
                                <a :href="item.href" class="hover:text-orange-600 transition">{{ item.text }}</a>
                            </li>
                        </ul>
                    </nav>
                  </section>
                  <!-- Contact Info -->
                   <address>
                        <h3 class="text-xl font-bold">Contact Us</h3>
                        <div class="w-16 h-0.5 bg-orange-500 mb-3"></div>
                            <ul class="space-y-4">
                                <li v-for="(item,index) in contactInfo" :key="index" class="flex items-start">
                                    <img :src="item.icon" class="text-orange-600 text-xl mt-1 mr-4 w-6 h-6 flex-shrink-0"/>
                                    <p class="hover:text-orange-600 transition">{{ item.text }}</p>
                                </li>
                            </ul>
                   </address>
            </div>
        </div>
    </footer>
</template>

<script setup>
import {ref} from 'vue'
import Facebook from '../assets/icons/Facebook.png'
import Instagram from '../assets/icons/Instagram.png'
import Linkedin from '../assets/icons/Linkedin.png'
import Youtube from '../assets/icons/Youtube.png'
import X from '../assets/icons/X.png'
import location from '../assets/icons/Location.png'
import Phone from '../assets/icons/Phone.png'
import Mail from '../assets/icons/Mail.png'

const socialLinks=ref([
  { name: 'Facebook', url: 'https://facebook.com', icon: Facebook },
  { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'Youtube', url: 'https://youtube.com', icon: Youtube },
  { name: 'X', url: 'https://x.com', icon: X },
]);

const quickLinks = ref([
    {text:'Home',href:'#'},
    {text:'Statistics',href:'#Statistics'},
    {text:'Conservation',href:'#Conservation'},
    {text:'Endagered Species',href:'#Endangered Species'},
    {text:'Take Action',href:'#Take Action'},
]);

const contactInfo = ref([
    {
        icon: location,
        text:'123 Conservation Way, Nakuru'
    },

    {
        icon: Phone,
        text:'+2548656256'
    },

    {
        icon: Mail,
        text:'contact@wildlifeguardians.org'
    },
]);
</script>