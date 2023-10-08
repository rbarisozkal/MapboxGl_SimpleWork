export interface City {
    cityName: string,
    apartmentName: string,
    listingType: string,
    street: string,
    lon: number,
    lat: number,
    price: number
}
export interface CitiesState {
    cities: City[]
}