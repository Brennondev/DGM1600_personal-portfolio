/* const allPokemon = []

function getPokeData(url) {
  fetch(url).then(function(response) {
    response.json().then(function(pokeData) {
      console.log(pokeData.results);
      const pokeMap = pokeData.results.map(pokemon => {
        return fetch(pokemon.url).then(resData => {
          resData.json().then(pokeJson => {
            allPokemon.push(pokeJson)
          });
        });
      });
    });
  });
} */

async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

getAPIData("https://pokeapi.co/api/v2/pokemon/?&limit=25").then((data) => {
  for (const pokemon of data.results) {
    getAPIData(pokemon.url).then((pokeData) => {
      populatePokeCards(pokeData);
    });
  }
});

let pokemonGrid = document.querySelector(".pokemonGrid");

function populatePokeCards(pokeArray) {
  pokeArray.forEach((pokemon) => {
    let pokeScene = document.createElement("div");
    pokeScene.className = "scene";
    let pokeCard = document.createElement("div");
    pokeScene.className = "card";
    pokecard.addEventListener("click", () =>
      pokecard.classList.toggle("is-flipped"),
    )
    let pokeFront = document.createElement("div");
    pokeScene.className = "card__face card__face--front";
    pokeFront.textContent = pokemon.name;
    let pokeBack = document.createElement("div");
    pokeScene.className = "card__face card__face--back";
    pokeBack.textContent = "back";

    pokeCard.appendChild(pokeFront);
    pokeCard.appendChild(pokeBack);
    pokeScene.appendChild(pokeCard);
    pokemonGrid.appendChild(pokeScene);
  }

function populateCardFront(pokemon) {
  let cardFront = document.createElement('div')
  cardFront.className = 'card__face card__face--front'
  cardFront.textContent = pokemon.name
  let frontImage = document.createElement('img')
  frontImage.srce = `../images/${pokemon.id}.png`
  cardFront.appendChild(frontImage)
  return cardFront
}

function populateCardBack(pokemon) {
  let cardBack = document.createElement('div')
  cardBack.className = 'card__face card__face--back'
  cardBack.textContent = `${pokemon.ablilites}`
  let abilityList = document.createElement('ul')
  pokemon.ablilites.forEach(ablility =>{
   let abilityName = document.createElement('li')
   abilityName.textContent = ablility.ability.name
   abilityList.appendChild(abilityName)
  })
  cardBack.appendChild(abilityList)
  return cardBack
}

// https://github.com/fanzeyi/pokemon.json/blob/master/images/001.png?raw=true