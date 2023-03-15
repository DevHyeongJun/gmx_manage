
import {RequestAPI} from '@/js/request/requsetApI.js';

export default {
    //하나의 store안에서 모듈화되어 사용될 수 있음을 명시
    namespaced : true,
    // 실제로 취급해야하는 각각의 data(==data)
    state: () => ({
      count: {},
    }),

    // 계산된 상태를 만들어내는 개념(==computed)
    getters: {
        getMonitorCount(state) {
            return state.count;
        },
    },
    //✅mutations를 통에서만 데이터를 변경할 수 있습니다.
    mutations: {
      getAllData(state) {
        console.log(RequestAPI);
        RequestAPI.getMonitorCnt({}, function(result){
            state.count = result[0];
          });
        },
    }, 

    //actions의 함수들은 비동기로만 동작
    //✅async, await를 붙이지 않아도 비동기로만동작한다.
    actions: {
      getAllData({ commit }) {    
        commit('getAllData');
      },
    }
  }