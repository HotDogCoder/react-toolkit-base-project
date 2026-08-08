import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: 'postsApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
    }),

    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
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

            async onQueryStarted(
                post,
                { dispatch, queryFulfilled }
            ) {
                try {
                    const { data: createdPost } =
                        await queryFulfilled;

                    dispatch(
                        postsApi.util.updateQueryData(
                            'getPosts',
                            undefined,
                            (draft) => {
                                draft.push(createdPost);
                            }
                        )
                    );

                } catch (error) {
                    console.error(
                        'Error creating post:',
                        error
                    );
                }
            },
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useAddPostMutation,
} = postsApi;