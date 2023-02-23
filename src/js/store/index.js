import { createStore } from 'vuex';
import map from './modules/map';
import search from './modules/search';



const store = createStore({
  modules: {
    map, search
  }
})

export default store;

