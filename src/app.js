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
    let detailedPlayers = [];

    // Instead of forloop use Map method
    // Code here
    players.map(items => {
        let i = 0;
        let flag = "hero"
        let play = { name: players[i], strength: getRandomStrength(), image: "images/super-" + (i + 1) + ".png", type: flag }

        if (flag == "hero") {
            flag = "villain";
        } else {
            flag = "hero";
        }
        detailedPlayers.push(play);

    })

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.floor(Math.random() * 100) + 1;
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';
    let arr = players.map(function(x) {
        fragment = fragment +
            `<div class="player">
    <img src="${x.image}" alt="">
    <div class="name">${x.name}</div>
    <div class="strength">${x.strength}</div>
    </div>`
    });

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