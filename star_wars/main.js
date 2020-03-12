import { people } from "../data/people.js";
import { getLastNum, removeChildren } from "../scripts/utils.js";

const gallery = document.querySelector(".gallery");
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

maleButton.addEventListener("click", event => {
  populateDOM(people.filter(person => person.gender === "male"));
});

femaleButton.addEventListener("click", event => {
  populateDOM(people.filter(person => person.gender === "female"));
});

otherButton.addEventListener("click", event => {
  populateDOM(otherCharacters);
});

function populateDOM(characters) {
  removeChildren(gallery);
  characters.forEach(person => {
    let charNum = getLastNum(person.url);
    let anchorWrap = document.createElement("a");
    anchorWrap.href = "#";

    let imageItem = document.createElement("img");
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;

    imageItem.addEventListener("error", event => {
      imageItem.hidden = true;
    });

    imageItem.addEventListener("click", event => {
      console.log(event);
    });
    anchorWrap.appendChild(imageItem);
    gallery.appendChild(anchorWrap);
  });
}

greetingDiv.appendChild(castList);
