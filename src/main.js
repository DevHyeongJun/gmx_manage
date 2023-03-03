import { createApp } from 'vue'
import App from './App.vue'

import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'
import store from '@/js/store';

import axios from 'axios'
createApp(App)
.use(OpenLayersMap)
.use(store)
.mount('#app');

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
