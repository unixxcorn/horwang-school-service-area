import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import polygons from './polygons';

const poly = []

function initMap (option = {
  center: [0, 0],
  zoom: 16
}) {
  const container = document.getElementById('hw-map')
  const mapContainer = document.createElement('div')
  container.appendChild(mapContainer)

  const map = new Map({
    target: mapContainer,
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View(option)
  });

  map.on('click', (e) => {
    console.log(e)
    poly.push(e.coordinate)
  })


  const layers = [
    polygons.latYaoLayer,
    polygons.jatujakLayer,
    polygons.jomPolLayer,
    polygons.chandraKasemLayer,
    polygons.latYaoLabelVector,
    polygons.jatujakLabelVector,
    polygons.jomPolLabelVector,
    polygons.chankasemLabelVector,
    polygons.schoolLayer,
    polygons.markers,
  ]

  for (const layer of layers) {
    map.addLayer(layer)    
  }

}

initMap({
  center: [11194408, 1553414],
  zoom: 15
})