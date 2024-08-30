const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemonList(limit = 50, offset = 0) {
  const response = await fetch(
    `${POKEAPI_URL}?limit=${limit}&offset=${offset}`
  );
  const responseJson = await response.json();

  return responseJson.results;
}

export async function getPokemonByName(name) {
  const response = await fetch(`${POKEAPI_URL}/${name}`);
  const responseJson = await response.json();

  return responseJson;
}
