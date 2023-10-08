import { createAction, props } from "@ngrx/store";
import { City } from "./cities.interface";
export const addCity = createAction('[Cities Component] Add', props<{ city: any }>());
export const removeCity = createAction(
    '[Cities Component] Remove',
    props<{ cityName: number }>()
);
export const listCities = createAction('[Cities Component] List', props<{ cities: City[] }>());
