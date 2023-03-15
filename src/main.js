import { createApp } from 'vue'
import App from './App.vue'

import store from '@/js/store';

import axios from 'axios'
createApp(App)
.use(store)
.mount('#app');

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
