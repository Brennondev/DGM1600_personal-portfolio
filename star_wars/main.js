import { films } from "../data/films.js";
import { people } from "../data/people.js";
import { starships } from "../data/starships.js";

const greetingDiv = document.querySelector(".greeting");
const maleButton = document.querySelector("#maleButton");
const femaleButton = document.querySelector("#femaleButton");
const otherButton = document.querySelector("#otherButton");

const otherCharacters = people.filter(person => {
  if (
    person.gender === "hermaphrodite" ||
    person.gender === "none" ||
    person.gender === "n/a"
  ) {
    return person;
  }
});

/*console.log(maleCharacters.length);
console.log(femaleCharacters.length);
console.log(otherCharacters.length);*/

maleButton.addEventListener("click", event => {
  populateDOM(people.filter(person => person.gender === "male"));
});

femaleButton.addEventListener("click", event => {
  populateDOM(people.filter(person => person.gender === "female"));
});

otherButton.addEventListener("click", event => {
  populateDOM(otherCharacters);
});

//"url": "https://swapi.co/api/people/10/"

function getCharNum(url) {
  let end = url.lastIndexOf("/");
  let start = end - 2;
  if (url.charAt(start) === "/") {
    start++;
  }
  return url.slice(start, end);
}

//getCharNum("https://swapi.co/api/people/1/")

function populateDOM(characters) {
  characters.forEach(person => {
    //need to extract the number from the person.url property
    let charNum = getCharNum(person.url);
    let anchorWrap = document.createElement("a");
    anchorWrap.href = "#";

    let imageItem = document.createElement("img");
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;

    imageItem.addEventListener("error", event => {
      //console.log(`${event.type}: Loading image\n`)
      //console.log(event)
      imageItem.hidden = true;
      //imageItem.src = '../Images/uvu_logo.png'
    });

    imageItem.addEventListener("click", event => {
      console.log(event);
    });
    anchorWrap.appendChild(imageItem);
    greetingDiv.appendChild(anchorWrap);
  });
}

greetingDiv.appendChild(castList);
