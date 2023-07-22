/* Types */
export interface WeatherSliceState {
    icon: string | undefined,
    main: string | null,
    description: string | null,
    status?: 'idle' | 'loading' | 'failed',
    name: string | null
}
