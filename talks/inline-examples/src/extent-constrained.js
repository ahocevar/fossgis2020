import 'ol/ol.css'
import { Map } from 'ol';
import { Tile } from 'ol/layer';
import { OSM } from 'ol/source';
import { View } from 'ol';
import { useGeographic } from 'ol/proj';

useGeographic();

const map = new Map({
  target: 'map',
  layers: [
    new Tile({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

document.getElementById('freiburg').addEventListener('click', () => {
  const extent = [7.849881 - 0.1, 47.994828 - 0.05, 7.849881 + 0.1, 47.994828 + 0.05];
  const view = map.getView();
  map.setView(new View({
    extent: extent
  }));
  map.getView().fit(extent);
});