import {
    useGetPokemonQuery,
    useGetPokemonByIdQuery,
} from '../../services/pokemonApi';

function PokemonItem({ pokemon }) {

    const id = pokemon.url.split('/').filter(Boolean).pop();

    const {
        data,
        error,
        isLoading,
    } = useGetPokemonByIdQuery(id);

    if (isLoading) {
        return <p>Loading {pokemon.name}...</p>;
    }

    if (error) {
        return <p>Error loading {pokemon.name}</p>;
    }

    return (
        <article>
            <h2>
                #{data.id} {data.name}
            </h2>

            <img
                src={data.sprites.front_default}
                alt={data.name}
            />

            <p>
                Height: {data.height}
            </p>

            <p>
                Weight: {data.weight}
            </p>
        </article>
    );
}

function PokemonList() {

    const {
        data,
        error,
        isLoading,
    } = useGetPokemonQuery(20);

    if (isLoading) {
        return <p>Loading Pokémon list...</p>;
    }

    if (error) {
        return <p>Error loading Pokémon list</p>;
    }

    return (
        <div>
            {data.results.map((pokemon) => (
                <PokemonItem
                    key={pokemon.name}
                    pokemon={pokemon}
                />
            ))}
        </div>
    );
}

export default PokemonList;