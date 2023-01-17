import Aos from 'aos'
import { createApp } from 'vue'
import App from './App.vue'

import "aos/dist/aos.css"
import "./styles/index.css"

createApp(App).mount('#app')
Aos.init()
