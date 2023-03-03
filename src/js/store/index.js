import { createStore } from 'vuex';
import monitor from './modules/monitor';

const store = createStore({
  modules: {
    monitor
  }
})

export default store;

