import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import './assets/style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

createApp(App).mount('#app')
