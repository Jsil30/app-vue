import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'light',
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
