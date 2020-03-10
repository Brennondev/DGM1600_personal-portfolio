import { starships } from "../data/starships.js";

const nav = document.querySelector(".nav");

const navList = document.querySelector(".navList");

function populateNav(characters) {
  starships.forEach(starship => {
    let anchorWrap = document.createElement("a");
    anchorWrap.href = "#";
    anchorWrap.addEventListener("click", event => {
      let shipName = event.target.textContent
      console.log(event);
    });

    let listItem = document.createElement("li");
    listItem.textContent = starship.name;

    anchorWrap.appendChild(listItem);
    navList.appendChild(anchorWrap);
    nav.appendChild(navList);
  });
}

populateNav(starships);
