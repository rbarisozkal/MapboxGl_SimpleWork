import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapglBoxComponent } from './components/mapgl-box/mapgl-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapglBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMapboxGLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
