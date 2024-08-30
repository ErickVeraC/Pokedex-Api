import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../api";
import { useNavigate } from "react-router-dom";

export default function PokemonPage() {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPokemonByName(name)
      .then((pokemonResponse) => setPokemon(pokemonResponse))
      .catch((error) => console.error("Error fetching pokemon data:", error));
  }, [name]);

  if (!pokemon.name) {
    return <h1 className="bg-[#3c3c3c] text-white">Pokemon doesn't found</h1>;
  }

  return (
    <main className="border-2 border-black shadow-2xl bg-[#3c3c3c] mx-auto rounded-lg p-8 w-3/4 mt-8 flex flex-col items-center">
      <img
        className="h-64 w-64 transform transition-transform duration-300 ease-in-out hover:scale-125"
        src={pokemon.sprites?.other["official-artwork"]?.front_default}
        alt={name}
      />
      <h1 className="text-center text-white text-4xl capitalize mt-4 text-orange-700">
        {name}
      </h1>
      <section className="text-center text-white mt-4">
        {pokemon.types?.map((type) => {
          return (
            <span
              key={type.slot}
              className="mr-2 text-2xl capitalize text-orange-400"
            >
              {type?.type?.name}
            </span>
          );
        })}
        <span className="block mt-2">Height: {pokemon.height}</span>
        <span className="block mt-2">Weight: {pokemon.weight}</span>
        <table className="table-auto w-full mt-4 text-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Stat</th>
              <th className="px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.stats?.map((stat) => (
              <tr key={stat.stat.name}>
                <td className="border px-4 py-2">{stat.stat.name}</td>
                <td className="border px-4 py-2">{stat.base_stat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 w-full bg-[#E9EAE4] text-[#3c3c3c] rounded transition-colors duration-300 ease-in-out hover:bg-[#3c3c3c] hover:text-[#E9EAE4]"
      >
        Home
      </button>
    </main>
  );
}
