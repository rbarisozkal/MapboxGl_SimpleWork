import { Injectable } from "@angular/core";
import { City } from "./cities.interface";
import { CitiesState } from "./cities.interface";
import { cities } from "../components/mapgl-box/cities";
import { BehaviorSubject, Observable } from "rxjs";
import { listCities } from "../store/cities.reducer";
import { HttpClient } from "@angular/common/http"
import { Store } from "@ngrx/store";
@Injectable()
export class CitiesService {
    private citiesSubject = new BehaviorSubject<City[]>([]);
    cities$: Observable<City[]> = this.citiesSubject.asObservable();
    loading$ = new BehaviorSubject<boolean>(false);
    error$ = new BehaviorSubject<string | null>(null);
    citiesData: City[] = cities;
    constructor(private httpClient: HttpClient, private store: Store<CitiesState>) { }
    loadCities(): void {
        this.loading$.next(true);
        this.store.dispatch(listCities({ cities: cities }))
        this.citiesSubject.next(cities);
        this.loading$.next(false);
        /**
         * //this method is used for loading cities from an api.
         * 
         * this.loading$.next(true);
         * this.httpClient.get<City[]>(apiUrl).pipe(map((response)=>{
         *      this.store.dispatch(listCities({cities:response}))
         *      this.citiesSubject.next(response);
         *      this.loading$.next(false);
         * }))
         */
    }
}