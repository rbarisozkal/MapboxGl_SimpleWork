import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { cities } from './cities';
@Component({
  selector: 'app-mapgl-box',
  templateUrl: './mapgl-box.component.html',
  styleUrls: ['./mapgl-box.component.scss']
})
export class MapglBoxComponent implements OnInit {
  map!: mapboxgl.Map
  cities: any = cities;
  ngOnInit(): void {
    this.createMap()
  }
  createMap() {
    const map = new mapboxgl.Map({
      accessToken: "pk.eyJ1IjoicmJhcmlzb3prYWwiLCJhIjoiY2xuZzQwOXhuMHVmcTJqcXBmdm5uMjdvYSJ9.U0e6ODQXFdfmk_m1U5echA",
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [10.451526, 51.165691],
      zoom: 16
    })
    new mapboxgl.Marker()
      .setLngLat([-0.1404545, 51.5220163])
      .addTo(map);
    map.on('load', () => {
      map.setFog({})
    })
  }
  createMarkers() {
    cities.forEach(city => {
      new mapboxgl.Marker().setLngLat([])
    })
  }
}
