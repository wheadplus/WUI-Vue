import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import HelloWorld from './components/HelloWorld.vue'
import {createMemoryHistory,createRouter} from 'vue-router'

const history = createMemoryHistory()
const router = createRouter({
    history,
    routes: [
        {path: '/', component: HelloWorld}
    ]
})

createApp(App).mount('#app')
