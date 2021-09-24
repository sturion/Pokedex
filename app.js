const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;


    var loadBase = 1;
    var loadTargets = 20;
    var loadOffset = 20;
    var loadCalls = 1;
    var pokemonPromises = [];

const fetchPokemon = () => {
  
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
      }.png" onError="this.onerror=null;this.src='/assets/pokebola.png';"/>
                
                <p class="card-subtitle ${types[0]}"><img class="typeImg" src="assets/${types[0]}.svg"/>${types[0]}</p>
                <p class="card-subtitle ${types[1]}"><img class="typeImg" src="assets/${types[1]}.svg"/>${types[1]}</p>
                
                </li>
                `;

      return accumulator;
    }, "");
    const ul = document.querySelector('[data-js="pokedex"]');

    ul.innerHTML = lisPokemons;
  });
};

if(loadTargets >= 860){
  loadOffset = 5;
}

window.addEventListener("scroll", infiniteScroll);
async function infiniteScroll() {
  if(loadTargets == 880){
    loadOffset = 18;
    loadBase = loadTargets - loadOffset + 1;
  }
  if(loadTargets == 898){
    loadOffset = 20;
    loadTargets = 10000
    loadBase = loadTargets - loadOffset + 1;
  }
  
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadBase = loadBase + loadOffset;
    loadTargets = loadTargets + loadOffset;
    loadCalls++;
    fetchPokemon();
  console.log(loadTargets,loadBase,loadOffset);
}
  
}
fetchPokemon();



/*function pokemons() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const pokemons = data.results.map(pokemon => pokemon.name);
        console.log(pokemons);
      })
}

<p class="card-subtitle">${types.join(" | ")}</p>

pokemons();*/
