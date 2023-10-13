import { createAction, props } from '@ngrx/store';
export const loadLayers = createAction('[Layers Component] Load Layers');
export const removeLayers = createAction('[Layers Component] Remove Layers', props<{ id: string }>());
export const addLayers = createAction('[Layers Component] Add Layers', props<{ layer: any }>());