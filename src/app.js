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
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';

    // Instead of forloop use Map method
    // Code here

    let detailedPlayers = players.map((play, i) => {
        return {
            name: play,
            strength: getRandomStrength(),
            image: "images/super-" + (i + 1) + ".png",
            type: (i % 2 == 0) ? "hero" : "villain"
        }
    });
  return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {

    // return the random number.
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    let fragment = players.filter(play => play.type == type).map(play =>
        `<div class="player">
         <img src="${play.image}" alt="">
         <div class="name">${play.name}</div>
         <div class="strength">${play.strength}</div>
         </div>`).join();
   return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}



window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}