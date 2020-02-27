import { films } from "../data/films.js";
import { people } from "../data/people.js";
import { starships } from "../data/starships.js"

const greetingDiv = document.querySelector(".greeting");

const castList = document.createElement("ul");

let counter = 1

people.forEach(person => {
  let listItem = document.createElement("li");
  listItem1.textContent = person.name;
  castList.appendChild(listItem);

  let imageItem = document.createElement("img")
  imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`
  greetingDiv.appendChild(castList)
  counter++
});

greetingDiv.appendChild(castList);
