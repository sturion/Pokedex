//const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const srchReturn = () => {
    console.log("teste");
}



    /*  
  for (let i = loadBase; i < loadTargets+1; i++) {
    pokemonPromises.push(
      fetch(getPokemonUrl(i)).then((response) => response.json())
    );
  }

  Promise.all(pokemonPromises).then((pokemons) => {
    const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
      const types = pokemon.types.map((typeInfo) => typeInfo.type.name);

      accumulator += `
                <li class="card ${types[0]}" id="${pokemon.name}">
                <h2 class="card-id">#${pokemon.id}. ${pokemon.name}</h2>
                <img class="card-image" alt="${
                  pokemon.name
                }" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        pokemon.id
      }.png"/>
                
                <p class="card-subtitle ${types[0]}">${types[0]}</p>
                <p class="card-subtitle ${types[1]}">${types[1]}</p>
                
                </li>
                `;

      return accumulator;
    }, "");
    const ul = document.querySelector('[data-js="pokedex"]');

    ul.innerHTML = lisPokemons;
  });
};*/
