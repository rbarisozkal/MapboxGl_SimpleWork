import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as mapboxgl from 'mapbox-gl';

const publicToken = "pk.eyJ1IjoicmJhcmlzb3prYWwiLCJhIjoiY2xuZzQwOXhuMHVmcTJqcXBmdm5uMjdvYSJ9.U0e6ODQXFdfmk_m1U5echA"
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
