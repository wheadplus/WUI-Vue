import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DocDemo from './components/DocDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabDemo from './components/TabsDemo.vue'
import {createMemoryHistory,createRouter} from 'vue-router'

const history = createMemoryHistory()
export const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home},
        { path: '/doc',
          component: Doc,
          children: [
            { path: '', component: DocDemo },
            { path: 'switch', component:  SwitchDemo },
            { path: 'button', component:  ButtonDemo },
            { path: 'dialog', component:  DialogDemo },
            { path: 'tabs', component: TabDemo }
          ]  
        }
    ]
})