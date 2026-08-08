import { useGetPostsQuery } from '../../services/postsApi';

function Posts() {
    const {
        data,
        error,
        isLoading,
    } = useGetPostsQuery();

    if (isLoading) {
        return <p>Loading posts...</p>;
    }

    if (error) {
        return <p>Error: {error.status}</p>;
    }

    return (
        <div>
            <h2>Posts</h2>

            {data?.map((post) => (
                <article key={post.id}>
                    <h3>
                        #{post.id} - {post.title}
                    </h3>

                    <p>{post.body}</p>

                    <small>
                        User: {post.userId}
                    </small>
                </article>
            ))}
        </div>
    );
}

export default Posts;