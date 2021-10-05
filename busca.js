const getPokemonUrlSearch = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const pokeSearch = () => {
  var pokemonPromises = [];
  pokeName = document.querySelector("#busca").value;
  searchPoke = pokeName.toLowerCase();
  console.log(searchPoke);



      pokemonPromises.push(
        fetch(getPokemonUrlSearch(searchPoke)).then((response) => response.json()));

  
    Promise.all(pokemonPromises).then((pokemons) => {
      const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
        const types = pokemon.types.map((typeInfo) => typeInfo.type.name);
  
        accumulator += `
                  <li class="card ${types[0]}" id="${pokemon.name}">
                  <a href="index.html"><button class="closeButton">X</button></a>
                  <h2 class="card-id">#${pokemon.id}. ${pokemon.name}</h2>
                  <img class="card-image" alt="${
                    pokemon.name
                  }" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          pokemon.id
        }.png" onError="this.onerror=null;this.src='assets/pokebola.png';"/>
                  
                  <p class="card-subtitle ${types[0]}"><img class="typeImg" src="assets/${types[0]}.svg"/>${types[0]}</p>
                  <p class="card-subtitle ${types[1]}"><img class="typeImg" src="assets/${types[1]}.svg"/>${types[1]}</p>
                  
                  </li>
                  `;
  
        return accumulator;
      }, "");
      const ul = document.querySelector('[data-js="pokedex"]');
  
      ul.innerHTML = lisPokemons;
    });
  }
  
  const inputEle = document.querySelector("#busca");
inputEle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { // codigo da tecla enter
    pokeSearch();
  }
});