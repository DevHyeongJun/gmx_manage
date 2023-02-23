import MainMap from '@/js/olMap/map.js';
import VectorLayer from 'ol/layer/Vector';
import point from 'ol/geom/Point';  //임포트
import Feature from 'ol/Feature';
import {
  Circle as CircleStyle,
  Fill,
  Style,
  Text,
} from 'ol/style';

import {Cluster, Vector as VectorSource} from 'ol/source';

const createCluster = (source) => {
  const clusterSource = new Cluster({
    distance: 50,
    minDistance: 50,
    source: source,
  });
  
  const styleCache = {};
  const clusters = new VectorLayer({
    id : 'gmx_cluster',
    zIndex:999,
    source: clusterSource,
    style: function (feature) {
  
      const size = feature.get('features').length;

      let style = styleCache[size];
      if (!style) {
        style = new Style({
          image: new CircleStyle({
            radius: 30,
            fill: new Fill({
              color: 'rgba(0,84,255, 0.8)',
            }),
          }),
          text: new Text({
            text: size.toString(),
            font: '20px sans-serif',
            fill: new Fill({
              color: '#fff',
            }),
          }),
        });
        styleCache[size] = style;
      }
      return style;
    },
  });

  return clusters;
}
export default {
    //하나의 store안에서 모듈화되어 사용될 수 있음을 명시
    namespaced : true,
    // 실제로 취급해야하는 각각의 data(==data)
    state: () => ({
      map: null
    }),

    // 계산된 상태를 만들어내는 개념(==computed)
    getters: {
        getMap(state) {
            return state.map;
        },
    },
    //✅mutations를 통에서만 데이터를 변경할 수 있습니다.
    mutations: {
        createMap(state, value) {
          state.map = MainMap.createMap(value);
          state.map.on('click', ()=>{
            console.log(state.map.getView().calculateExtent(state.map.getSize()));
           
          });
        },

        addPoint(state, value) {
          const list = state.map.getLayers().getArray();
          let isLayer = false;
          let targetLayer;
          
         
          for(var i=0; i<list.length; i++){
            if(list[i].get("id") === value.clusterid){
              targetLayer = list[i];
              isLayer = true;
              continue;
            }
          }

          if ( !isLayer ) {
            const projLayer =createCluster(new VectorSource());
            state.map.addLayer(projLayer);

            targetLayer = projLayer;
          }
          targetLayer.getSource().getSource().clear();
          targetLayer.getSource().clear();


          value.layerList.forEach((item) => {
            const pnt = new point(item.coord).transform('EPSG:4326', 'EPSG:5186');
            const feature = new Feature(pnt);
            targetLayer.getSource().getSource().addFeature(feature);
            
          });
          
          //state.map.addLayer(createCluster(projLayer));
          
          // const pnt = new point(value.id).transform('EPSG:4326', 'EPSG:5186');
          // console.log(pnt);
          
          // var cellFeature = new ol.Feature(cellPolygon);
        }
    },

    //actions의 함수들은 비동기로만 동작
    //✅async, await를 붙이지 않아도 비동기로만동작한다.
    actions: {
      createMap({ commit }, value) {    
        commit('createMap', value);
       
      },

      addPoint({ commit }, value) {
        commit('addPoint', value);
       
      },

    }
  }