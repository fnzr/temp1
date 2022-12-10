import { createApp } from 'vue'
import { createPinia } from 'pinia'
import urql from '@urql/vue';
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(urql, {
    url: 'http://127.0.0.1:5173/graphql',

})

app.mount('#app')
