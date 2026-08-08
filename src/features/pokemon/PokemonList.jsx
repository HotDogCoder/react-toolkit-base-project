import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPokemon } from './pokemonSlice';

function PokemonList() {
    const dispatch = useDispatch();

    const {
        data: pokemon,
        loading,
        error,
    } = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemon(20));
    }, [dispatch]);

    if (loading) {
        return <h2>Loading Pokémon...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <div className="pokemon-grid">
            {pokemon.map((item) => (
                <article className="pokemon-card" key={item.id}>
                    <img
                        src={item.sprites.front_default}
                        alt={item.name}
                    />

                    <h2>
                        #{item.id} {item.name}
                    </h2>

                    <div className="types">
                        {item.types.map((type) => (
                            <span key={type.type.name}>
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    );
}

export default PokemonList;