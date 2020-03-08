import 'ol/ol.css'
import { Map } from 'ol';
import { Tile } from 'ol/layer';
import { OSM } from 'ol/source';
import { View } from 'ol';
import { fromLonLat } from 'ol/proj';
import { transformExtent } from 'ol/proj';

new Map({
  target: 'map',
  layers: [
    new Tile({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat([13.73836, 51.049259]),
    extent: transformExtent([13.53836, 50.949259, 13.93836, 51.149259], 'EPSG:4326', 'EPSG:3857'),
    zoom: 12
  })
})