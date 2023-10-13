import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from "@ngrx/store";
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { layersReducer } from './store/layers.reducer';
import { LayersService } from './store/layers.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [LayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
