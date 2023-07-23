/* Types */
export interface WeatherSliceState {
    icon: string | undefined,
    main: string | null,
    description: string | null,
    status?: 'idle' | 'loading' | 'failed',
    name: string | null,
    lat: number | null,
    lon: number | null
}

export interface LocationSliceState {
    latitude: number | undefined,
    longitude: number | undefined,
    status?: 'idle' | 'loading' | 'failed',
}

export interface Coordinates {
    lat: number,
    lon: number
}

export interface WeatherResponse {
    id: number,
    main: string,
    description: string,
    icon: string,
    name: string,
    lat: number,
    lon: number
}