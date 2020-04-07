const allPokemon = []

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
}

let pokemonGrid = document.querySelector(".pokemonGrid");

getPokeData("https://pokeapi.co/api/v2/pokemon?&limit=25");

console.log(allPokemon)

populatePokeCards(allPokemon)

function populatePokeCards(pokeArray) {
  pokeArray.forEach(pokemon => {
    let pokeScene = document.createElement("div");
    pokeScene.className = "scene";
    let pokeCard = document.createElement("div");
    pokeScene.className = "card";
    pokecard.addEventListener("click", () =>
      pokecard.classList.toggle("is-flipped")
    );
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
  });
}

/* var card = document.querySelector(".card");
card.addEventListener("click", function() {
  card.classList.toggle("is-flipped");
}) */

/* <div class="scene">
  <div class="card">
    <div class="card__face card__face--front">
      <figure>
        <img src="../Images/PokemonLogo.png" />
        <figcaption>Bulbasaur</figcaption>
      </figure>
    </div>
    <div class="card__face card__face--back">
      <div>
        <p>Pokemon attributes</p>
      </div>
    </div>
  </div>
</div> */
