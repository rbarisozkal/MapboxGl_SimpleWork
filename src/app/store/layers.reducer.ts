import { Layer } from "../models/layers.interface";
import { loadLayers, addLayers, removeLayers } from "./layers.actions";
import { createReducer, on } from "@ngrx/store";
export const initialState = {
    layers: []
}
export const layersReducer = createReducer(initialState,
    on(loadLayers, (state) => {
        return {
            ...state,
            layers: state.layers
        }
    }
    ),
    on(addLayers, (state, { layer }) => {
        return {
            ...state,
            layers: state.layers.concat(layer)
        }
    }
    ),
    on(removeLayers, (state, { id }) => {
        return {
            ...state,
            layers: state.layers.filter((layer: Layer) => layer.id !== id)
        }
    }
    )
)
export { addLayers, removeLayers, loadLayers }