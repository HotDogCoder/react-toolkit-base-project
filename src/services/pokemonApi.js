import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/',
    }),

    endpoints: (builder) => ({
        getPokemon: builder.query({
            query: (limit = 20) => `pokemon?limit=${limit}`,
        }),

        getPokemonById: builder.query({
            query: (id) => `pokemon/${id}`,
        }),
    }),
});

export const {
    useGetPokemonQuery,
    useGetPokemonByIdQuery,
} = pokemonApi;