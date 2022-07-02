import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import jimmy from './components/jimmy.vue'
import coco from './components/coco.vue'
import {createMemoryHistory,createRouter} from 'vue-router'

const history = createMemoryHistory()
const router = createRouter({
    history,
    routes: [
        { path:'/',component:jimmy },
        { path: '/xx', component: coco}
    ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
// createApp(App).mount('#app')
