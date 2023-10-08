import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { cities } from './cities';
import { Observable } from 'rxjs';
import { addCity, removeCity, listCities } from 'src/app/store/cities.actions';
import { Store } from '@ngrx/store';
import { initialState } from 'src/app/store/cities.reducer';
import { CitiesState, City } from 'src/app/store/cities.interface';
import { CitiesService } from 'src/app/store/cities.service';

@Component({
  selector: 'app-mapgl-box',
  templateUrl: './mapgl-box.component.html',
  styleUrls: ['./mapgl-box.component.scss']
})
export class MapglBoxComponent implements OnInit {
  map!: mapboxgl.Map
  cities$!: Observable<City[]>
  constructor(private store: Store<CitiesState>, private citiesService: CitiesService) { }
  ngOnInit(): void {
    this.createMap();
    this.cities$ = this.citiesService.cities$;
    console.log(this.cities$);
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

    })
  }
}
