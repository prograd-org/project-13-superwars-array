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
let detailedPlayers = '';
let detailedPlayers = players.map((p, i) => {
    return {
        name: p,
        strength: getRandomStrength(),
        image: "images/super-" + (i + 1) + ".png",
        type: (i % 2 == 0) ? "hero" : "villain"
    }
});

// Instead of forloop use Map method
// Code here

return detailedPlayers;


// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';
    let fragment = players.filter(p => p.type == type).map(p =>
        `<div class="player">
         <img src="${p.image}" alt="">
         <div class="name">${p.name}</div>
         <div class="strength">${p.strength}</div>
         </div>`).join();
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