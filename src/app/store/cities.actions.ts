import { createAction, props } from "@ngrx/store";
export const addCity = createAction('[Cities Component] Add', props<{ city: any }>());
export const removeCity = createAction(
    '[Cities Component] Remove',
    props<{ cityName: number }>() // Define the type of the 'cityIndex' payload here
);
export const listCities = createAction('[Cities Component] List');
