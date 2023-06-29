const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon-image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;


//Função que busca o pokemon no poke API
const fetchPokemon = async (pokemon) => {
//async para definir nossa função fetch como assincrona
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    //await para que nada que venha depois do bloco acima carregue até que o próprio bloco carregue totalmente

    if (APIResponse.status == 200) {
        const data = await APIResponse.json();

        return data;
    }
}


//Função que renderiza e acessa a imagem do pokemon
const renderPokemon = async (pokemon) => {
    pokemonNumber.innerHTML = '';
    pokemonName.innerHTML = 'Loading...'
    const data = await fetchPokemon(pokemon);

    if(data) {

        pokemonImage.style.display = 'block'
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

    
        input.value = '';

        searchPokemon = data.id;
    } else {

        pokemonImage.style.display = 'none'
        pokemonName.innerHTML = 'não localizado.';
        pokemonNumber.innerHTML = '';

        input.value = '';
    }
}


//EventListener acompanhando nosso 'submit' (que é pela tecla enter)
form.addEventListener('submit', (event) => {

    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
});

//Configurando os botões de "prev" e "next"

buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -=1;
        renderPokemon(searchPokemon);
    } 
});

buttonNext.addEventListener('click', () => {
    searchPokemon +=1;
    renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);