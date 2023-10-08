import { Component, OnInit } from '@angular/core';
import { CitiesService } from './store/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mapgl-workaround';
  constructor(private citiesService: CitiesService) { }
  ngOnInit(): void {
    this.citiesService.loadCities()
  }
}
