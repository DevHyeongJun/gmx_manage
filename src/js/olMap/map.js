import View from 'ol/View';
import Map from 'ol/Map';
import proj4 from 'proj4/dist/proj4';
import {register} from 'ol/proj/proj4';

import {TileMap} from '@/js/olMap/layer/tile/Tiles';

import {
 get
} from 'ol/proj';

proj4.defs([
  ['EPSG:5186', '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs']
  , ['EPSG:5181', '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs']
]);

register(proj4);

export default {
  createMap : (eleId) => {
    const map =  new Map({
      target: eleId,
      renderer: "webgl",
      logo : false,
      layers: [
        TileMap.daumMap()
      ],
      // the map view will initially show the whole world
      view: new View({
        projection: get('EPSG:5186'),
        center: [200000, 600000],
        zoom: 12,
      }),
    });

    map.getView().fit([-466130.4139568072, 34255.27610304137, 979230.963035262, 703487.7053457234]);
    return map;
  }
}