import { listCities, removeCity, addCity } from "./cities.actions";
import { createReducer, on } from "@ngrx/store";
import { cities } from "../components/mapgl-box/cities";
export const initialState = {
    cities: cities
};
export const cityReducer = createReducer(
    initialState,
    on(addCity, (state, { city }) => {
        return {
            ...state,
            cities: [...state.cities, city]
        };
    }),
    on(removeCity, (state, { cityName }) => {
        const updatedCities = [...state.cities];
        updatedCities.splice(cityName, 1);

        return {
            ...state,
            cities: updatedCities
        };
    }),

    on(listCities, (state, { cities }) => {
        return {
            ...state,
            cities: cities,
        };
    })
);
export { listCities };

