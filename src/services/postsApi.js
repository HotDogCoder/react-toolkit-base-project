import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: 'postsApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
    }),

    tagTypes: ['Posts'],

    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',

            providesTags: ['Posts'],
        }),

        getPostById: builder.query({
            query: (id) => `posts/${id}`,
        }),

        addPost: builder.mutation({
            query: (post) => ({
                url: 'posts',
                method: 'POST',
                body: post,
            }),

            invalidatesTags: ['Posts'],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useAddPostMutation,
} = postsApi;