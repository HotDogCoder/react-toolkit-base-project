import PokemonList from './features/pokemon/PokemonList';

function App() {
    return (
        <main>
            <header>
                <h1>Pokédex</h1>
                <p>React + Redux Toolkit + PokéAPI</p>
            </header>

            <PokemonList />
        </main>
    );
}

export default App;