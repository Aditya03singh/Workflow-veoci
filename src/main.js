import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Workflow from './components/Workflow.vue'
import Workflow_launch from './components/Workflow_launch.vue'
import Workflow_edit from './components/Workflow_edit.vue'

const routes = [
    {path:"/", name:"workflow", component:Workflow},
    {path:"/create_workflow", name:"createWorkflow", component:Workflow},
    {path:"/show_workflow", name:"showWorkflow", component:Workflow},
    {path:"/create_workflow/launch_workflow", name:"launchWorkflow" , component:Workflow_launch},
    {path:"/edit_workflow", name:"editWorkflow", component:Workflow_edit}
]


const router = createRouter({
    history:createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
