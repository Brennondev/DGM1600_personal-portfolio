import { senators } from "../data/senators.js";

const senatorDiv = document.createElement("div");
const main = document.querySelector("main");

function populateSenatorDiv() {
  senators.forEach(senator => {
    let senatorName = `${senator.first_name} ${senator.last_name}`;
    let nameParagraph = document.createElement("p");
    nameParagraph.textContent = senatorName;
    senatorDiv.appendChild(nameParagraph);
  });
  main.appendChild(senatorDiv);
}

const filterSenators = (prop, value) => {
  return senators.filter(senator => {
    return senator[prop] === value;
  });
};

/*console.log(filterSenators("party", "R"));
console.log(filterSenators("party", "D"));
console.log(filterSenators("party", "ID"));*/

const senatorNames = senators.map(senator => {
  let middleName = senator.middle_name ? ` ${senator.middle_name}` : ``
  return {
    id: senator.id,
    name: `${senator.first_name} ${middleName} ${senator.last_name}`,
    imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}--200ps.jpeg`
  }
})

//https://www.govtrack.us/static/legislator-photos/300002-200px.jpeg

console.log(senatorNames)

populateSenatorDiv();
