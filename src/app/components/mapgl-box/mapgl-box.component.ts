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

    this.cities$ = this.citiesService.cities$;
    this.createMap();
    this.createMarkers();
  }
  createMap() {
    this.map = new mapboxgl.Map({
      accessToken: "pk.eyJ1IjoicmJhcmlzb3prYWwiLCJhIjoiY2xuZzQwOXhuMHVmcTJqcXBmdm5uMjdvYSJ9.U0e6ODQXFdfmk_m1U5echA",
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [10.451526, 51.165691],

      zoom: 5.5
    })
    new mapboxgl.Marker()
      .setLngLat([-0.1404545, 51.5220163])
      .addTo(this.map);
    this.map.on('load', () => {
      this.createMarkers();
    })
  }
  createMarkers() {
    this.cities$.subscribe((city) => {
      city.forEach((city) => {
        const marker = new mapboxgl.Marker().setLngLat([city.lon, city.lat]).setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h3>${city.cityName} $</h3><p>${city.price}</p>`
            )
        ).addTo(this.map);
      })
    })
  }
}
