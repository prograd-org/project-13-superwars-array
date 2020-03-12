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
    let detailedPlayers = PLAYERS.map(function (name, strength, image, type) {
        name: PLAYERS[i];
        strength: getRandomStrength();
        image: "./images/super-" + (i + 1) + ".png";
        type: "hero|villan"
    });

    // Instead of forloop use Map method
    // Code here


    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    var fragment = "";
    for (var i = 0; i < 4; i++) {
        fragment = `
            <div class="player">
            <img src="${detailedPlayers[i].image}" alt = "characters">
            <h4> ${detailedPlayers[i].name}</h4>
            <h1>${detailedPlayers[i].strength}</h1>
            </div>
             `;
    }
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here


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
