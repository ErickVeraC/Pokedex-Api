import React, { useEffect, useState } from "react";

export default function Pokemon({ name }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error("Error fetching pokemon data:", error));
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <article className="flex flex-col items-center p-4 bg-[#3c3c3c] border-2 border-black shadow-lg rounded-lg text-center text-lg font-semibold hover:bg-white hover:bg-opacity-25 hover:text-black hover:scale-110 transition-all duration-300 ease-in-out">
      <img
        className="h-40"
        src={pokemon.sprites?.other["official-artwork"]?.front_default}
        alt={name}
      />
      <h2 className="text-xl font-bold">{name}</h2>
    </article>
  );
}
