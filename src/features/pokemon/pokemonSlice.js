import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (limit = 20) => {

        // Primera llamada
        const response = await fetch(`${API_URL}?limit=${limit}`);

        if (!response.ok) {
            if (response.status === 400) {
                throw new Error('Error 400 obteniendo la lista de Pokémon');
            }

            throw new Error(
                `Error obteniendo Pokémon: ${response.status}`
            );
        }

        const data = await response.json();

        // Segunda llamada: una por cada Pokémon
        const pokemon = await Promise.all(
            data.results.map(async (pokemon) => {

                const response = await fetch(
                    //pokemon.url.replace('pokemon', 'poke')
                    pokemon.url
                );

                if (!response.ok) {
                    if (response.status === 400) {
                        throw new Error(
                            `Error 400 obteniendo ${pokemon.name}`
                        );
                    }

                    throw new Error(
                        `Error obteniendo ${pokemon.name}: ${response.status}`
                    );
                }

                return response.json();
            })
        );

        return pokemon;
    }
);

// export const fetchPokemon = createAsyncThunk(
//     'pokemon/fetchPokemon',
//     async (limit = 20) => {
//         const response = await fetch(
//             `https://pokeapi.co/api/v2/pokemonn?limit=${limit}`
//         );

//         if (!response.ok) {
//             throw new Error(`Error HTTP: ${response.status}`);
//         }

//         const data = await response.json();

//         return data;
//     }
// );

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const pokemonSlice = createSlice({
    name: 'pokemon',

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemon.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })

            .addCase(fetchPokemon.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default pokemonSlice.reducer;