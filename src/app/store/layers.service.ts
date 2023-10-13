import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { loadLayers, addLayers, removeLayers } from "./layers.actions";
import { HttpClient } from "@angular/common/http"
import { Store } from "@ngrx/store";
import { map } from "rxjs";
@Injectable()
export class LayersService {
    private layersSubject = new BehaviorSubject<any[]>([]);
    layers$: Observable<any[]> = this.layersSubject.asObservable();
    loading$ = new BehaviorSubject<boolean>(false);
    error$ = new BehaviorSubject<string | null>(null);
    citiesData!: any[];
    constructor(private httpClient: HttpClient, private store: Store<any>) { }
    loadCities(): void {
        this.loading$.next(true);
        this.httpClient.get<any[]>("https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh").pipe(map((response) => {
            this.store.dispatch(loadLayers());
            this.layersSubject.next(response);
            this.loading$.next(false);
        }))
    }
}