let body = document.querySelector("#body");
console.log("working");
let players = [
  { id: 1, name: "Salah", number: 11, imageUrl: `/images/players.jpg` },
  { id: 2, name: "Mane", number: 10, imageUrl: `/images/players.jpg` },
  { id: 3, name: "Fabinho", number: 3, imageUrl: `/images/players.jpg` },
  { id: 4, name: "Alisson", number: 1, imageUrl: `/images/players.jpg` },
  { id: 5, name: "Virgil", number: 4, imageUrl: `/images/players.jpg` },
];
// let api = "https://betsapi.com/tsd/23451/Liverpool";

// let fetchData = async (url) => {
//   let res = await fetch(url, {
//     mode: "no-cors",
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     },
//   });
//   console.log("res :>> ", res);
//   let data = await res.json();
//   console.log("data :>> ", data);
//   players = data;
//   console.log(players);
// };

let makeCard = async () => {
  let wrapper = document.createElement("div");
  wrapper.setAttribute("class", "row");
  body.appendChild(wrapper);
  players.map((player) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card col-md-3");
    let img = document.createElement("img");
    img.setAttribute("src", `/images/${player.name}.jpg`);
    img.setAttribute("height", `400px`);
    let bodyDiv = document.createElement("div");
    bodyDiv.setAttribute("class", "card-body");
    let h5 = document.createElement("h5");
    h5.setAttribute("class", "card title");
    let p = document.createElement("p");
    p.setAttribute("class", "card-text");

    h5.innerHTML = `${player.name}`;
    p.innerHTML = `${player.name} is the number ${player.number} in Liverpool F.C`;

    wrapper.appendChild(card);
    card.appendChild(img);
    card.appendChild(bodyDiv);
    bodyDiv.appendChild(h5);
    bodyDiv.appendChild(p);
  });
};

makeCard();
