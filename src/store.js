import {configureStore} from  '@reduxjs/toolkit';
import { weatherReducer } from './features/weather-slice';

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
});