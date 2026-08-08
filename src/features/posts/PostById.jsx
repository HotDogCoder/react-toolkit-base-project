import { useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetPostByIdQuery } from '../../services/postsApi';

function PostById() {
    const [postId, setPostId] = useState('');
    const [searchId, setSearchId] = useState(null);

    const {
        data,
        error,
        isLoading,
        isFetching,
    } = useGetPostByIdQuery(
        searchId ?? skipToken
    );

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!postId) {
            return;
        }

        setSearchId(Number(postId));
    };

    return (
        <div>
            <h2>Search Post</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    min="1"
                    max="1000"
                    placeholder="Post ID"
                    value={postId}
                    onChange={(event) =>
                        setPostId(event.target.value)
                    }
                />

                <button type="submit">
                    Search
                </button>
            </form>

            {isLoading && <p>Loading...</p>}

            {isFetching && <p>Fetching...</p>}

            {error && (
                <p>
                    Error: {error.status}
                </p>
            )}

            {data && (
                <article>
                    <h3>
                        #{data.id} - {data.title}
                    </h3>

                    <p>
                        {data.body}
                    </p>

                    <small>
                        User: {data.userId}
                    </small>
                </article>
            )}
        </div>
    );
}

export default PostById;