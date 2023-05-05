import { createApp } from 'vue'
import './style.css'
import App from './App.vue';

import eventBus from './plugins/event-bus';


createApp(App).use(eventBus).mount('#app')
