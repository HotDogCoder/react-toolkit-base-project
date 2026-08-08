// import { configureStore } from '@reduxjs/toolkit';
// import pokemonReducer from '../features/pokemon/pokemonSlice';

// export const store = configureStore({
//     reducer: {
//         pokemon: pokemonReducer,
//     },
// });

import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from '../services/pokemonApi';

export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            pokemonApi.middleware
        ),
});