import { useEffect, useState } from "react";
import Pokemon from "../components/Pokemon";
import { getPokemonList } from "../api";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    loadMorePokemons();
  }, [offset]);

  const loadMorePokemons = () => {
    getPokemonList(100, offset)
      .then((pokemonListResponse) =>
        setPokemons((prev) => [...prev, ...pokemonListResponse])
      )
      .catch((error) => console.error("Error fetching data: ", error));
  };

  return (
    <main>
      <header>
        <h1 className="text-center text-5xl font-bold mb-8 mt-8 text-[#3c3c3c]">
          Pokedex
        </h1>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
        {pokemons.map((pokemon) => {
          return <Pokemon key={pokemon.name} name={pokemon.name} />;
        })}
      </section>
      <button
        onClick={() => setOffset((prev) => prev + 100)}
        className="mt-4 px-4 py-4 w-full bg-[#3c3c3c] text-[#E9EAE4] text-lg rounded transition-colors duration-300 ease-in-out hover:bg-[#E9EAE4] hover:text-[#3c3c3c]"
      >
        Catch more Pokemons!!!
      </button>
    </main>
  );
}
