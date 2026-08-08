import { useState } from 'react';
import { useAddPostMutation } from '../../services/postsApi';

function AddPost() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const [
        addPost,
        {
            data: createdPost,
            isLoading,
            error,
        },
    ] = useAddPostMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await addPost({
                title,
                body,
                userId: 1,
            }).unwrap();

            setTitle('');
            setBody('');

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Add Post</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(event) =>
                        setTitle(event.target.value)
                    }
                />

                <textarea
                    placeholder="Body"
                    value={body}
                    onChange={(event) =>
                        setBody(event.target.value)
                    }
                />

                <button
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading
                        ? 'Creating...'
                        : 'Create Post'}
                </button>

            </form>

            {error && (
                <div>
                    <p>
                        {error.data?.message ||
                            'Error creating post'}
                    </p>
                </div>
            )}

            {createdPost && (
                <div>
                    <h3>Post created successfully!</h3>

                    <p>
                        ID: {createdPost.id}
                    </p>

                    <p>
                        Title: {createdPost.title}
                    </p>

                    <p>
                        Body: {createdPost.body}
                    </p>
                </div>
            )}
        </div>
    );
}

export default AddPost;