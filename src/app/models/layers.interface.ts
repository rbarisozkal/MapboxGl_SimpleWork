export interface Layer {
    id: string,
    type: string,
    source: string,
    minzoom?: number,
    layout?: any,
    paint?: any,
    filter?: any,
    metadata?: any,
    maxzoom?: number,
}
export interface LayersState {
    layers: Layer[],
} 