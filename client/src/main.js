import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/store'
import vuetify from './plugins/vuetify'
import router from './router'

createApp(App).use(store).use(router).use(vuetify).mount('#app')
