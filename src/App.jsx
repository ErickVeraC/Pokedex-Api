import { useEffect, useState } from "react";
import Pokemon from "./components/Pokemon";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPokemons(jsonResponse.results);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

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
    </main>
  );
}
