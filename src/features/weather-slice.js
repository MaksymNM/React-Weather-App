import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loadWeather = createAsyncThunk(
    '@@weather/load-weather',
    async (cityName = 'Kiev') => {
        const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=fa9a0f36f1f14b05a7e132605221005&q=${cityName}&days=1&aqi=no&alerts=no`);
        const data = await res.json();
        return data;
    }
)



const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        res: [],
        time: [],
        location: {},
        current: {},
        condition: {},
        loading: false,
        error: null,
    }, 
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadWeather.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(loadWeather.fulfilled, (state, action) => {
            state.res = action.payload;
            state.time = action.payload.forecast.forecastday[0].hour;
            state.location = action.payload.location;
            state.current = action.payload.current;
            state.condition = action.payload.current.condition;
            state.loading = false;
        }) 
        .addCase(loadWeather.rejected, (state, action) => {
            state.loading = false;
            state.error = 'something went wrong';
        })

        
    },
})

export const weatherReducer = weatherSlice.reducer;