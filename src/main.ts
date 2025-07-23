import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createI18n } from 'vue-i18n'
import de from './locales/de.json'
import en from './locales/en.json'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const i18n = createI18n({
    fallbackLocale: 'en',
    locale: 'en',
    messages: { de, en }
})
app.use(i18n)

app.mount('#app')
