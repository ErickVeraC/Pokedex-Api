import { useEffect, useState } from "react";
import { getPokemonByName } from "../api";
import { useNavigate } from "react-router-dom";

export default function Pokemon({ name }) {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemonByName(name)
      .then((pokemonResponse) => setPokemon(pokemonResponse))
      .catch((error) => console.error("Error fetching pokemon data:", error));
  }, []);

  return (
    <article
      onClick={() => {
        navigate(`/pokemon/${name}`);
      }}
      className="flex flex-col items-center p-4 bg-[#3c3c3c] border-2 border-black shadow-lg rounded-lg text-center text-lg font-semibold hover:bg-white hover:bg-opacity-25 hover:text-black hover:scale-110 transition-all duration-300 ease-in-out"
    >
      <img
        className="h-40 transform transition-transform duration-300 ease-in-out hover:scale-150"
        src={pokemon.sprites?.other["official-artwork"]?.front_default}
        alt={name}
      />
      <h2 className="text-xl font-bold capitalize">{name}</h2>
    </article>
  );
}
