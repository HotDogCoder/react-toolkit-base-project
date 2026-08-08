// import PokemonList from './features/pokemon/PokemonList';
import AddPost from './features/posts/AddPost';
import PostById from './features/posts/PostById';
import Posts from './features/posts/Posts';

function App() {
    return (
        <main>
            <header>
                <h1>Pokédex</h1>
                <p>React + Redux Toolkit + PokéAPI</p>
            </header>
            
            <AddPost />

            <PostById />

            <Posts />
        </main>
    );
}

export default App;