const pokemonList = document.querySelector('.All-Pokemon');
let URL = "https://pokeapi.co/api/v2/pokemon/";
let resultsArray = [];

const fetchAndSaveData = async () => {
    try {
        const fetchPromises = [];

        for (let i = 1; i <= 1025; i++) {
            fetchPromises.push(fetch(URL + i).then(response => response.json()));
        }

        const responses = await Promise.all(fetchPromises);
        resultsArray = responses;
        
        console.log("Todas las solicitudes fetch se completaron.");
        console.log("Array de resultados:", resultsArray);
    } catch (error) {
        console.error("Ocurrió un error al realizar las solicitudes fetch:", error);
    }
};

fetchAndSaveData();

generarNumeroAleatorio = () => {
    var numeroAleatorio = Math.floor(Math.random() * 1025) + 1;
    return numeroAleatorio;
}

generarPokemonAleatorio = () => {
    const numeroAleatorio = generarNumeroAleatorio()
    let pokemonAleatorio = resultsArray[numeroAleatorio - 1];
    return pokemonAleatorio;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {

        let nombrePokemon = document.querySelector('.searchpoke').value;
        
        let pokemonEncontrado = buscarPokemon(nombrePokemon);
        
        console.log(pokemonEncontrado);
    }
}

function buscarPokemon(nombre) {
    let objetoEncontrado = resultsArray.find(objeto => objeto.name === nombre);
    return objetoEncontrado || null;
}

