import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Workflow from './components/Workflow.vue'
import Workflow_launch from './components/Workflow_launch.vue'

const routes = [
    {path:"/", name:"workflow", component:Workflow},
    {path:"/create_workflow", name:"createWorkflow", component:Workflow},
    {path:"/create_workflow/launch_workflow", name:"launchWorkflow" , component:Workflow_launch}
]


const router = createRouter({
    history:createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
