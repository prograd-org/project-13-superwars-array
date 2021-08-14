const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = [];

  // Instead of forloop use Map method
  // Code here
  players.map((plays, i) => {
    let player = {};
    player.name = plays[i];
    player.strength = Math.floor(Math.random() * 100) + 1;
    player.image = `images/super-${i + 1}.png`;
    player.type = i % 2 == 0 ? "hero" : "villan";
    detailedPlayers.push(Object.assign({}, player));
  });

  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100);
};

// Build player template
const buildPlayers = (players, type) => {
  let fragment = "";

  // Instead of using for loop
  // Use chaining of Array methods - filter, map and join
  // Type your code here
  if (players[0].type == type) {
    fragment += `<div class="player">
                    <img src="${players[0].image}" alt="">
                    <div class="name">${players[0].name}</div>
                    <div class="strength">${players[0].strength}</div>
                    </div>`;
  } else {
    fragment += `<div class="player">
                    <img src="${players[1].image}">
                    <div class="name">${players[1].name}</div>
                    <div class="strength">${players[1].strength}</div>
                    </div>`;
  }

  return fragment;
};

// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
