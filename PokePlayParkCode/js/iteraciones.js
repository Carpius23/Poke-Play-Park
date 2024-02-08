const pokemonList = document.querySelector('.All-Pokemon');
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i<= 1025; i++){
    fetch(URL + i)
    .then((Response) => Response.json())
}
