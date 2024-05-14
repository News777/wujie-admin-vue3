import { createApp } from 'vue'
import { createPinia } from 'pinia'
// main.ts
import 'virtual:uno.css'
import 'virtual:svg-icons-register'

import App from './App.vue'
import router from './router'
import SvgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('SvgIcon', SvgIcon)

app.mount('#app')
